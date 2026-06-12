import {React,useState} from 'react'

const Card = ({item,deletePass,editPass}) => {
    const [passVisi, setPassVisi] = useState('password')
    const show = ()=>{
        passVisi==="text"?setPassVisi("password"):setPassVisi("text")
    }
    const generateDot = (prop)=>{
        return '•'.repeat(prop.length)
    }
    return (
        <div className="row flex flex-col gap-4">
            <div className="group flex justify-between items-center bg-neutral-950/30 hover:bg-neutral-950/50 border border-white/5 hover:border-white/10 transition-all duration-200 p-4 rounded-xl gap-4" >
                <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="webs">
                        <span className='text-xs text-neutral-500 block mb-1'>URL</span>
                        <span className='text-white'>{item.url}</span>
                    </div>
                    <div className="webs">
                        <span className='text-xs text-neutral-500 block mb-1'>Username</span>
                        <span className='text-white'>{item.username}</span>
                    </div>
                    <div className="webs">
                        <span className='text-xs text-neutral-500 block mb-1'>Password</span>
                        <div className='flex items-center gap-2'>
                            <span className='text-white tracking-widest'>{passVisi==='password'?generateDot(item.password):item.password}</span>
                            <span onClick={()=>show()} className='cursor-pointer opacity-70 hover:opacity-100 transition-opacity flex items-center'>
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
                    <button onClick={()=>editPass(item.id)}>
                        <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#e5e5e5,secondary:#e5e5e5"
                            style={{ width: "24px", height: "24px" }}>
                        </lord-icon>
                    </button>
                    <button onClick={()=>deletePass(item.id)}>
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
    )
}

export default Card
