"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import {useRouter} from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setuser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
     
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/user/signup", user);
            console.log("Signup successful", response.data);
            router.push("/login");

        } catch (error: any) {
            console.log(error.response.data);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Signi up" : "Proceccing"}</h1>
            <label htmlFor="username">username</label>
            <input 
                className="p-2 border border-gray-300 rounded-md text-black mb-4"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setuser({...user, username: e.target.value})}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-md text-black mb-4"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setuser({...user, email: e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-md text-black mb-4"
                id="password"
                type="text"
                value={user.password}
                onChange={(e) => setuser({...user, password: e.target.value})}
                placeholder="password"
            />  
            <button 
                className="p-2 border border-gray-300 rounded-md text-white mb-4"
                onClick={onSignup}>{buttonDisabled ? "Enter details..." : "Signup"}</button>
            <Link href="/login">Already have an account? Login</Link>
        </div>
    )
}

