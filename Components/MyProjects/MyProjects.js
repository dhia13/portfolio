
function MyProjects({ current }) {
    return (
        <div className={`w-full h-full bg-black`}>
            <div className='flex justify-center items-center w-full h-full flex-col lg:justify-start'>
                {/* project introduction */}
                <div className="w-[1000px] h-[80px] bg-green-200 z-50 mt-4"></div>
                <div className='text-white w-[1100px] flex flex-col justify-canter items-start h-[650px] 
                mx-2 rounded-md mt-10  bg-white z-50 relative'>
                    <img src='./images/matrix.gif' className='w-full h-full rounded-md relative' />
                    <div className="h-[70px] bottom-[10px] w-[150px] absolute z-60 right-[480px] 
                    flex justify-center items-center gap-4">
                        <div className='flex justify-center items-center h-[60px] w-[60px]'>
                            <a href='https://github.com/dhia13' target="_blank">
                                <img src='/images/github.png' alt='github' className='w-[48px] h-[48px] hover:w-[58px] hover:h-[58px]' />
                            </a>
                        </div>
                        <div className='flex justify-center items-center h-[60px] w-[60px]'>
                            <a href='https://github.com/dhia13' target="_blank">
                                <img src='/images/globe.png' alt='github' className='w-[48px] h-[48px] hover:w-[58px] hover:h-[58px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects