"use client"
import Link from "next/link"
import React from "react"
import {useRouter} from "next/navigation"
import axios from "axios"

export default function SignupPage() { 
    const [user, setuser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
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
                onClick={onSignup}>Signup here</button>
            <Link href="/login">Already have an account? Login</Link>
        </div>
    )
}

