import React, { useState, useRef, useEffect } from 'react'
import Card from './Card.jsx'
import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from 'react-toastify'

const Manager = () => {
    const [visible, setVisible] = useState("password")
    const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('storage')) || [])
    useEffect(() => {
        localStorage.setItem('storage', JSON.stringify(passwords))
    }, [passwords])
    const [search,setSearch] = useState("")
    let filtered = passwords.filter(item => item.url.toLowerCase().includes(search.toLowerCase())||item.username.toLowerCase().includes(search.toLowerCase()))
    const username = useRef()
    const url = useRef()
    const password = useRef()
    const showPass = () => {
        visible === "text" ? setVisible("password") : setVisible("text")
    }
    const savePass = () => {
        if (!url.current.value ||!username.current.value ||!password.current.value){
            toast.error("All fields are required!");
            return;
        }
        const data = {
            id: uuidv4(),
            url: url.current.value,
            username: username.current.value,
            password: password.current.value
        }
        setPasswords([...passwords, data])
        url.current.value = ""
        username.current.value = ""
        password.current.value = ""
        toast("Password Saved!!!!")
    }
    const deletePass = (id) => {
        setPasswords(passwords.filter(item => item.id !== id))
        toast.error('Password deleted!')
    }
    const editPass = (id) => {
        const pass = passwords.find(item => item.id === id)
        url.current.value = pass.url
        username.current.value = pass.username
        password.current.value = pass.password

        url.current.focus();
        setPasswords(passwords.filter(item=>item.id!==id))
        toast.info('Password ready to update!')
    }
    return (
        <main className='flex-1 flex justify-center items-center mx-auto'>
            <ToastContainer
                toastStyle={{
                    background: "rgba(23,23,23,0.7)",
                    backdropFilter: "blur(16px)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                }}
            />
            <div className=" mt-7 mb-7 w-full max-w-4xl bg-neutral-900/50 backdrop-blur-lg border border-white/10 shadow-2xl shadow-indigo-900/20 text-neutral-200 py-10 md:px-8 px-6  rounded-2xl flex flex-col">
                <div className="heading flex flex-col gap-1 justify-center items-center mb-10">
                    <div className="name font-bold text-4xl text-white tracking-tight">Vau<span className='text-red-500'>lt</span></div>
                    <div className="tagline text-sm text-neutral-400">Your own Password Manager!!</div>
                </div>
                <div onKeyDown={(e)=>{if(e.key==='Enter'){savePass()}}} className="inputs flex flex-col gap-6 w-full max-w-2xl mx-auto mb-12">
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="url">Website URL</label>
                        <input ref={url} placeholder='https://example.com' id='url' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none w-full rounded-xl text-white py-2 px-4 text-lg transition-all duration-200' type="url" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="username">Username</label>
                            <input ref={username} placeholder='Enter Username' id='username' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none w-full rounded-xl text-white py-2 px-4 text-lg transition-all duration-200' type="text" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="password">Password</label>
                            <div className='relative w-full'>
                                <input ref={password} placeholder='Enter Password' id='password' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none rounded-xl text-white py-2 pl-4 pr-12 text-lg w-full transition-all duration-200' type={visible} />
                                <span onClick={() => showPass()} className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity flex items-center'>
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
                    <button onClick={() => savePass()} className='mt-4 bg-white/10 hover:bg-white/20 border border-white/20  shadow-lg backdrop-blur-md text-white transition-all duration-200 mx-auto py-3 px-8 rounded-full font-bold flex justify-center items-center gap-2 cursor-pointer w-fit'>
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

                <div className="rows flex flex-col gap-4 md:gap-0 w-full max-w-3xl mx-auto">
                    <div className='flex md:flex-row md:gap-0 flex-col gap-5 items-center  mb-6 justify-between'>
                        <div>
                            <h2 className='font-bold text-2xl  text-white'>Stored Passwords</h2>
                            <div className="count text-sm text-neutral-300">Total Passwords Stored : {passwords.length}</div>
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <i className="absolute left-2 fa-solid fa-magnifying-glass"></i>
                            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search by URL/Username' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none w-full rounded-xl text-white py-1 px-10 text-sm transition-all duration-200'/>
                        </div>
                    </div>
                    {passwords.length === 0 && <div>No Passwords Stored yet!</div>}
                    {passwords.length > 0 && filtered.length === 0 && <div>No Matching Passwords Found</div>}
                    {filtered.length !== 0 && filtered.map(item => {
                        return <Card key={item.id} item={item} deletePass={deletePass} editPass={editPass} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Manager