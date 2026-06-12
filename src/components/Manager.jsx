import React, { useState,useRef, useEffect } from 'react'
import Card from './Card.jsx'
import {v4 as uuidv4} from "uuid"

const Manager = () => {
    const [visible, setVisible] = useState("password")
    const [passwords,setPasswords] = useState(JSON.parse(localStorage.getItem('storage'))||[])
    useEffect(() => {
      localStorage.setItem('storage',JSON.stringify(passwords))
    }, [passwords])
    
    const username = useRef()
    const url = useRef()
    const password = useRef()
    const showPass = ()=>{
        visible==="text"?setVisible("password"):setVisible("text")
    }
    const savePass = ()=>{
        const data = {
            id: uuidv4(),
            url: url.current.value,
            username: username.current.value,
            password: password.current.value
        }
        setPasswords([...passwords,data])
        url.current.value = ""
        username.current.value = ""
        password.current.value = ""
        alert("Password Saved")
    }
    const deletePass = (id)=>{
        setPasswords(passwords.filter(item=>item.id!==id))
    }
    const editPass = (id)=>{
        const pass = passwords.find(item=>item.id===id)
        url.current.value = pass.url
        username.current.value = pass.username
        password.current.value = pass.password

        url.current.focus();
        deletePass(id)
    }
    return (
        <main className='flex-1 flex justify-center items-center mx-auto'>
            <div className=" mt-7 mb-7 w-full max-w-4xl bg-neutral-900/50 backdrop-blur-lg border border-white/10 shadow-2xl shadow-indigo-900/20 text-neutral-200 py-10 px-8 rounded-2xl flex flex-col">
                <div className="heading flex flex-col gap-`1` justify-center items-center mb-10">
                    <div className="name font-bold text-4xl text-white tracking-tight">Vault</div>
                    <div className="tagline text-sm text-neutral-400">Your own Password Manager!!</div>
                </div>
                <div className="inputs flex flex-col gap-6 w-full max-w-2xl mx-auto mb-12">
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="url">Website URL</label>
                        <input ref={url} placeholder='https://example.com' id='url' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none w-full rounded-xl text-white py-2 px-4 text-lg transition-all duration-200' type="url" />
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="username">Username</label>
                                <input ref={username} placeholder='Enter Username' id='username' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none w-full rounded-xl text-white py-2 px-4 text-lg transition-all duration-200' type="text" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="password">Password</label>
                            <div className='relative w-full'>
                                <input ref={password} placeholder='Enter Password' id='password' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none rounded-xl text-white py-2 pl-4 pr-12 text-lg w-full transition-all duration-200' type={visible} />
                                <span onClick={()=>showPass()} className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity flex items-center'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/dicvhxpz.json"
                                        trigger="click"
                                        stroke="regular"
                                        colors="primary:#e5e5e5,secondary:#e5e5e5"
                                        style={{ width: "24px", height: "24px" }}>
                                    </lord-icon>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>savePass()} className='mt-4 bg-white/10 hover:bg-white/20 border border-white/20  shadow-lg backdrop-blur-md text-white transition-all duration-200 mx-auto py-3 px-8 rounded-full font-bold flex justify-center items-center gap-2 cursor-pointer w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                            colors="primary:#e5e5e5"
                            style={{ width: "24px", height: "24px" }}>
                        </lord-icon>
                        Add Password
                    </button>
                </div>

                <div className='w-full h-[1px] bg-white/10 mb-8'></div>

                <div className="rows flex flex-col w-full max-w-3xl mx-auto">
                    <h2 className='font-bold text-2xl mb-6 text-white'>Stored Passwords</h2>
                    {passwords.length===0 && <div>No Passwords Stored yet!</div>}
                    {passwords.length!==0 && passwords.map(item=>{
                        return <Card key={item.id} item = {item} deletePass={deletePass} editPass={editPass} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Manager