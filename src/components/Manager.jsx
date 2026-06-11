import React from 'react'

const Manager = () => {
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
                        <input placeholder='https://example.com' id='url' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none w-full rounded-xl text-white py-2 px-4 text-lg transition-all duration-200' type="url" />
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="username">Username</label>
                            <input placeholder='Enter Username' id='username' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none w-full rounded-xl text-white py-2 px-4 text-lg transition-all duration-200' type="text" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-sm text-neutral-300 ml-1 ' htmlFor="password">Password</label>
                            <div className='relative w-full'>
                                <input placeholder='Enter Password' id='password' className='bg-neutral-950/50 border border-neutral-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none rounded-xl text-white py-2 pl-4 pr-12 text-lg w-full transition-all duration-200' type="password" />
                                <span className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity flex items-center'>
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
                    <button className='mt-4 bg-white/10 hover:bg-white/20 border border-white/20  shadow-lg backdrop-blur-md text-white transition-all duration-200 mx-auto py-3 px-8 rounded-full font-bold flex justify-center items-center gap-2 cursor-pointer w-fit'>
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
                    <div className="row flex flex-col gap-4">
                        <div className="group flex justify-between items-center bg-neutral-950/30 hover:bg-neutral-950/50 border border-white/5 hover:border-white/10 transition-all duration-200 p-4 rounded-xl gap-4" >
                            <div className="grid grid-cols-3 gap-4 w-full">
                                <div className="webs">
                                    <span className='text-xs text-neutral-500 block mb-1'>URL</span>
                                    <span className='text-white'>abdiegrf.com</span>
                                </div>
                                <div className="webs">
                                    <span className='text-xs text-neutral-500 block mb-1'>Username</span>
                                    <span className='text-white'>wi0rfh</span>
                                </div>
                                <div className="webs">
                                    <span className='text-xs text-neutral-500 block mb-1'>Password</span>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-white tracking-widest'>••••••••</span>
                                        <span className='cursor-pointer opacity-70 hover:opacity-100 transition-opacity flex items-center'>
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
                            <div className="buttons flex gap-3 justify-end items-center">
                                <button >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/exymduqj.json"
                                        trigger="hover"
                                        stroke="bold"
                                        colors="primary:#e5e5e5,secondary:#e5e5e5"
                                        style={{ width: "24px", height: "24px" }}>
                                    </lord-icon>
                                </button>
                                <button className='text-sm font-semibold text-neutral-400 hover:text-red-500 transition-colors'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/xyfswyxf.json"
                                        trigger="hover"
                                        colors="primary:#e5e5e5"
                                        style={{ width: "24px", height: "24px" }}>
                                    </lord-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Manager