import React from 'react'

const Manager = () => {
    return (
        <main className='flex-1 flex justify-center items-center mx-auto'>
            <div className="container min-w-[70vw] min-h-[70vh] bg-neutral-900/50 backdrop-blur-lg border border-white/10 shadow-white/10 shadow-xl text-neutral-200 py-10 px-10 rounded-2xl flex flex-col">
                <div className="heading flex flex-col gap-2 justify-center items-center">
                    <div className="name font-bold text-4xl">Vault</div>
                    <div className="tagline text-sm text-neutral-400">Your own Password Manager!!</div>
                </div>
                <div className="inputs flex flex-col gap-5 my-8">
                    <div>
                        <label className='font-bold text-lg ' htmlFor="url">URL : </label>
                        <input id='url' className='bg-neutral-200 border-2 border-white w-full rounded-lg text-neutral-900 p-1 px-3 text-lg' type="url" />
                    </div>
                    <div className='flex justify-around gap-5 items-center'>
                        <div>
                            <label className='font-bold text-lg ' htmlFor="username">Username : </label>
                            <input id='username' className='bg-neutral-200 border-2 border-white rounded-lg text-neutral-900 p-1 px-3 text-lg' type="text" />
                        </div>
                        <div>
                            <label className='font-bold text-lg ' htmlFor="password">Password : </label>
                            <input id='password' className='bg-neutral-200 border-2 border-white rounded-lg text-neutral-900 p-1 px-3 text-lg' type="text" />
                        </div>
                    </div>
                    <button className='bg-white/10 hover:bg-white/20 border border-white/20  shadow-lg backdrop-blur-md text-neutral-200 transition-all duration-200 mx-auto p-3 rounded-lg font-bold flex justify-center items-center gap-2 cursor-pointer'>Add Password</button>
                </div>
            </div>
        </main>
    )
}

export default Manager
// bg-neutral-950/50 hover:bg-neutral-800/50 backdrop-blur-md border-neutral-500 text-white transition-all duration-200 