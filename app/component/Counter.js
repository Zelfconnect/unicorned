"use client"

import { useState } from "react"

function Counter(props) {
    const [count, setCount] = useState(0)
    return <div className="border-2 border-cyan-400 bg-black text-white p-6 m-4 flex flex-col items-center gap-4 shadow-lg shadow-cyan-500/50">
        <h2 className="text-2xl font-mono font-bold text-yellow-400 uppercase tracking-widest">{props.title}</h2>
        <div className="flex items-center gap-6">
            <button 
                onClick={() => setCount(count - 1)} 
                className="btn btn-active btn-error"
            >
                -
            </button>
            <span className="text-4xl font-mono font-bold text-lime-400">{count}</span>
            <button 
                onClick={() => setCount(count + 1)} 
                className="btn btn-active btn-success"
            >
                +
            </button>
        </div>
    </div>
}

export default Counter;
