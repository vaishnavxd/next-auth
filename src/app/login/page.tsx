"use client"
import Link from "next/link"
import React from "react"
import {useRouter} from "next/navigation"
import axios from "axios"

export default function LoginPage() { 
    const [user, setuser] = React.useState({
        email: "",
        password: "",
        
    })

    const onLogin = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
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
                onClick={onLogin}>Login here</button>
            <Link href="/signup">Don&apos;t have an account? Signup</Link>
        </div>
    )
}

