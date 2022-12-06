import Link from "next/link"

const ContactFloters = () => {
    return (
        <div className='absolute z-50 w-[50px] top-1/3 right-0 opacity-70 hover:opacity-100 bg-black rounded-tl-md rounded-bl-md cursor-pointer flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center h-[50px] w-[50px]'>
                <a href='https://www.linkedin.com/in/sahhar-dhia-eddine-b9a45824b/' target="_blank">
                    <img src='/images/linkedin.png' alt='linkedin' className='w-[28px] h-[28px] hover:w-[36px] hover:h-[36px]' />
                </a>
            </div>
            <div className='flex justify-center items-center h-[50px] w-[50px]'>
                <a href='https://github.com/dhia13' target="_blank">
                    <img src='/images/github.png' alt='github' className='w-[28px] h-[28px] hover:w-[36px] hover:h-[36px]' />
                </a>
            </div>
            <div className='flex justify-center items-center h-[50px] w-[50px]'>
                <a href='https://t.me/+213794064884' target="_blank">
                    <img src='/images/telegramContact.png' alt='github' className='w-[28px] h-[28px] hover:w-[36px] hover:h-[36px]' />
                </a>
            </div>
            <div className='flex justify-center items-center h-[50px] w-[50px]'>
                <a href='http://m.me/sahhar13' target="_blank">
                    <img src='/images/facebookContact.png' alt='github' className='w-[28px] h-[28px] hover:w-[36px] hover:h-[36px]' />
                </a>
            </div>
        </div>)
}

export default ContactFloters