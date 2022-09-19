import SingleSkill from "./SingleSkill"

function MySkills() {
    const skills = [
        {
            img: 'images/css3.png',
            title: 'CSS3'
        },
        {
            img: 'images/html.png',
            title: 'HTML5'
        },
        {
            img: 'images/js.png',
            title: 'JavaScript'
        },
        {
            img: 'images/react.png',
            title: 'React'
        },
        {
            img: 'images/redux.png',
            title: 'Redux'
        },
        {
            img: 'images/nextjs.png',
            title: 'NextJs'
        },
        {
            img: 'images/tailwind.png',
            title: 'TailWind'
        },
        {
            img: 'images/api.png',
            title: 'Apis'
        },
        {
            img: 'images/git.png',
            title: 'Git'
        },
        {
            img: 'images/express.png',
            title: 'Express'
        },
        {
            img: 'images/typescript.png',
            title: 'TypeScript'
        },
        {
            img: 'images/node.png',
            title: 'Node'
        }
    ]
    return (
        <div className='flex justify-center items-center w-full h-full  flex-col'>
            <div className="h-[500px] flex justify-center items-center flex-wrap w-[250px] overflow-scroll
            sm:w-[500px] md:w-[500px] lg:w-[800px] mt-[80px] lg:overflow-hidden">
                {
                    skills.map(skill => <div className="w-[200px] h-[60px] my-1">
                        <SingleSkill title={skill.title} img={skill.img} />
                    </div>)
                }
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="text-white mt-2 font-poppins">And much more</p>
            </div>
        </div >
    )
}

export default MySkills
