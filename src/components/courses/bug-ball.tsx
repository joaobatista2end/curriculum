import { motion } from "framer-motion";
import { Bug, BugOff } from "lucide-react";
import { useState } from "react";

export interface BugBallProps {
    index: number;
}
export function BugBall (props: BugBallProps) {
    const [state, setState] = useState<boolean>(false)
    
    return (<motion.div 
        className='w-8 cursor-crosshair h-8 flex items-center justify-center rounded-full z-0 absolute' initial={{ bottom: `${Math.random() * 100}%` , left: `${Math.random() * 100}%`, opacity: 0 }} 
        animate={ !state ? { 
            bottom: ['20%', '50%', '30%', '70%', '80%', '10%'], 
            opacity: [0, 0, 1, 0, 1],
            scale: [1, 2, 1, 1.2, 1],
            rotate: ['-120deg', '180deg', '360deg'] 
        } : { opacity: 0, filter: 'blur(10px)'}} 
        transition={!state ? { repeat: Infinity, duration: 10, delay: props.index * 0.4} : { repeat: 0, duration: 2, delay: 1 }}
        onClick={() => setState(!state)}
        >
            { !state ? <Bug className='h-8 text-zinc-500'/> : <BugOff className='h-8 text-lime-500'/> } 
        </motion.div>
    )
}