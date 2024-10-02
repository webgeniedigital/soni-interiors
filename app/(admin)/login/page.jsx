'use client'
import { EyeIcon, EyeOff } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Login() {
    const [showHide, setShowHide] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    return (
        <main className="w-screen h-screen absolute flex items-center justify-center flex-col  top-0 left-0 bg-white px-4">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
            <div className="flex flex-col max-w-sm gap-4 p-8 border shadow-sm rounded-xl ">
                <input type="text" onChange={(e) => {
                    setData((prev) => ({
                        ...prev,
                        email: e.target.value
                    }))
                }} placeholder="Email" className="py-3 px-5 rounded-xl border  outline-none" />
                <div className="border rounded-xl flex items-center gap-3 pr-3" >
                    <input onChange={(e) => {
                        setData((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }} type={showHide ? 'text' : 'password'} placeholder="Password" className="py-3 px-5 rounded-xl outline-none " />
                    <span className="cursor-pointer" onClick={() => setShowHide((prev) => (!prev))}>
                        {
                            showHide ? <EyeIcon /> : <EyeOff />
                        }
                    </span>
                </div>
                <button className="w-full bg-[#f9af39] py-3 text-white rounded-xl font-semibold" >Login</button>
            </div>
        </main>
    )
}