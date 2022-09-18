import Typewriter from "typewriter-effect";

function Header() {

    return (
        <div className='w-screen h-full bg-black relative flex justify-start min-w-screen min-h-[800px] items-center'>
            <div className="w-screen ml-[60px] h-[300px] z-30 ">
                <div className="relative text-3xl text-green-500 font-bold font-poppins">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hello There")
                                .changeDelay('100')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Welcome")
                                .start();
                        }}
                    />
                </div>
                <div className='text-2xl text-white font-poppins'>
                    <Typewriter onInit={(typewriter) => {
                        typewriter.pauseFor('2500').changeDelay('50').typeString('I am Dhia A Fullstack Developer').start()
                    }} />
                </div>
            </div>
            <img src='images/matrix.gif' alt="my-gif" className="w-screen h-screen z-10 absolute top-0 right-0" />
        </div >
    )
}

export default Header   