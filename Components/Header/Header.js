import { useEffect } from "react";
import Typewriter from "typewriter-effect";

function Header() {
    return (
        <div className='w-screen h-full bg-black relative flex justify-start min-w-screen min-h-[800px] items-center'>
            <div className="w-screen ml-[60px] h-[300px] z-50 ">
                <div className="relative text-4xl text-cyan-500 font-bold font-poppins">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hello There")
                                .changeDelay('60')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Welcome")
                                .start();
                        }}
                    />
                </div>
                <div className='text-4xl text-white font-poppins flex gap-2 mt-4'>
                    <p className='font-bold'>I am a </p>
                    <p className='text-cyan-400 text-4xl font-extrabold'>FullStack</p>
                    <p className='font-bold'>Developer</p>
                </div>
            </div>
        </div >
    )
}

export default Header   