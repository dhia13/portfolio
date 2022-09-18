import MySkills from './Components/MySkills'
import About from './Components/About'
function AboutMe({ currentAbout, setCurrentAbout }) {
    return (
        <div className='w-full h-full  bg-black pt-[20px]'>
            <div className='text-white w-full h-[60px] flex justify-center items-center'>
                <div className='flex w-full justify-center items-center gap-4 h-[40px]'>
                    <button onClick={() => setCurrentAbout('about')}>
                        <p className={`${currentAbout === 'about' && 'border-b-4 border-gray-300'} font-poppins`}>About Me</p>
                    </button>
                    <button onClick={() => setCurrentAbout('mySkills')}>
                        <p className={`${currentAbout === 'mySkills' && 'border-b-4 border-gray-300'} font-poppins`}>Developer skills</p>
                    </button>
                </div>
            </div>
            <div>
                {
                    currentAbout === 'about' &&
                    <div className="w-screen h-full">
                        <About />
                    </div>
                }
                {
                    currentAbout === 'mySkills' &&
                    <div className="w-screen h-full z-30">
                        <MySkills />
                    </div>
                }
            </div>
        </div >
    )
}

export default AboutMe