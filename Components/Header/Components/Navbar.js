function Navbar({ setCurrent, current }) {
    return (
        <div className='w-full h-full bg-black'>
            <div className='w-full h-full flex justify-between items-center'>
                {/* Logo */}
                <div className='flex justify-center items-center px-2 ml-2 h-full'>
                    <button onClick={() => setCurrent('header')}>
                        <p className={`text-sm font-semibold ${current === 'header' ? 'text-yellow-200' : 'text-white'}`}>DevOps</p>
                    </button>
                </div>
                {/* Navigation */}
                <div className='h-full flex justify-center items-center mr-4'>
                    <div className=' h-full flex justify-center items-center px-4'>
                        <button onClick={() => setCurrent('aboutMe')}>
                            <p className={`text-sm font-medium ${current === 'aboutMe' ? 'text-yellow-200' : 'text-white'} `}>About</p>
                        </button>
                    </div>
                    <div className='h-full flex justify-center items-center px-4'>
                        <button onClick={() => setCurrent('myProjects')}>
                            <p className={`text-sm md:text-lg font-medium ${current === 'myProjects' ? 'text-yellow-200' : 'text-white'}`}>Projects</p>
                        </button>
                    </div>
                    <div className='h-full flex justify-center items-center px-4'>
                        <button onClick={() => setCurrent('contact')}>
                            <p className={`text-sm font-medium ${current === 'contact' ? 'text-yellow-200' : 'text-white'}`}>Contact</p>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar