import React from "react";
import { BiRightArrow } from 'react-icons/bi';
const Welcome = () =>{
    
    return(
        <section className="flex min-h-screen min-w-screen
        bg-gradient-to-tl from-yellow-300 via-pink-400 to-blue-300 animate-movingGradient
        shadow-2xl  
        justify-center align-middle flex-col space-y-10
        ">
            <div className="text-center font-bold text-6xl">
                KOCHAM BOBINIEGO
            </div>
            <div className="text-center text-lg">
            Bobini kc.
            </div>
            <BiRightArrow color="white" className="px-3 w-16 h-16 rounded-full self-center bg-black cursor-pointer"></BiRightArrow>
        </section>

    );
}

export default Welcome;