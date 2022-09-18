
function MyProjects() {
    return (
        <div className="w-full h-full bg-black">
            <div className='flex justify-center items-center w-full h-full flex-col'>
                {/* project introduction */}
                <div className='text-white w-[350px] flex flex-col justify-canter items-start h-[300px] 
                mx-2 rounded-md mt-2'>
                    <div className="flex w-full justify-center items-center text-center">
                        <h1 className='text-3xl text-white mt-4 mx-2 font-poppins'>Hermes Library Project</h1>
                    </div>
                    <p className='mx-2 mt-2 text-center font-poppins'>Project Description Project Description Project Description Project Description
                    </p>
                    <p className='font-poppins mx-2 mt-1 text-center w-full'>ProjectLink.com</p>
                    <p className='font-poppins mx-2 mt-1 text-center w-full'>ProjectRepo.github</p>
                </div>
                <div className='w-[300px] ml-[20px] h-[200px] bg-red-300 rounded-md'>
                </div>
            </div>
        </div>
    )
}

export default MyProjects