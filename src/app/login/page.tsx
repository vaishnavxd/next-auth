"use client"
import Link from "next/link"
import React from "react"
import {useRouter} from "next/navigation"
import axios from "axios"
import { useEffect } from "react";
import toast from "react-hot-toast"

export default function LoginPage() { 
    const router = useRouter();
    const [user, setuser] = React.useState({
        email: "",
        password: "",
        
    })
    const [loading, setLoading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user]); 

    const onLogin = async () => {
        try {
            const response = await axios.post("/api/user/login", user);
            console.log("Login successful", response.data);
            toast.success("Login successful");
            router.push("/profile");
        } catch (error: any) {
            console.log(error.response.data);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }   
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Login"}</h1>
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
                onClick={onLogin}>{buttonDisabled ? "Enter details..." : "Login"}</button>
            <Link href="/signup">Don't have an account? Signup</Link>
        </div>
    )
}

