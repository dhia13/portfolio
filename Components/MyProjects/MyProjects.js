import SingleProject from "./SingleProject";

function MyProjects({ current }) {
  const projectsData = [
    {
      title: "EventsRoom",
      gitRepo: "https://github.com/dhia13/NextEvents",
      discription: "",
      liveLink: "https://next-events-pi.vercel.app/",
      picture: "events",
    },
    {
      title: "Hermes",
      gitRepo: "https://github.com/dhia13/hermesLib",
      discription: "library managment app",
      liveLink: "",
      picture: "soon",
    },
    {
      title: "Healthier",
      gitRepo: "https://github.com/dhia13/healthier",
      discription: "Doctors app",
      liveLink: "",
      picture: "healthier",
    },
    {
      title: "InstaClone",
      gitRepo: "https://github.com/dhia13/instagram-Clone",
      discription: "",
      liveLink: "",
      picture: "soon",
    },
  ];
  return (
    <div className="w-full h-full bg-green-300 z-50">
      <h1 className="text-3xl font-pressStart text-white">Projucts/Products</h1>
      <div className="m-auto bg-red-300 h-[70%] w-[90%] flex flex-wrap mt-[50px] justify-center items-center">
        <div
          className={`w-[350px] h-[250px] bg-events bg-cover bg-center rounded-md flex justify-center items-start relative m-10 z-50`}
        >
          <div className="flex items-center justify-center z-60 my-10 cursor-pointer">
            <h1 className="font-pressStart font-normal text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
              Events Room
            </h1>
          </div>
          <div className="flex absolute bottom-4 right-[130px] gap-4">
            <a
              target="_blank"
              href="https://github.com/dhia13/NextEvents"
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
            >
              <img src="./images/github.png" className="w-[32px] h-[32px]" />
            </a>
            <a
              target="_blank"
              href="https://next-events-pi.vercel.app/"
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
            >
              <img src="./images/globe.png" className="w-[32px] h-[32px]" />
            </a>
          </div>
        </div>
        <div
          className={`w-[350px] h-[250px] bg-soon bg-cover bg-center rounded-md flex justify-center items-start relative m-10 z-50`}
        >
          <div className="flex items-center justify-center z-60 my-10 cursor-pointer">
            <h1 className="font-pressStart font-normal text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
              Hermes
            </h1>
          </div>
          <div className="flex absolute bottom-4 right-[130px] gap-4">
            <a
              target="_blank"
              href="https://github.com/dhia13/hermesLib"
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
            >
              <img src="./images/github.png" className="w-[32px] h-[32px]" />
            </a>
            <a
              target="_blank"
              href=""
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glowflex justify-center items-center cursor-not-allowed"
            >
              <img src="./images/globe.png" className="w-[32px] h-[32px]" />
            </a>
          </div>
        </div>
        <div
          className={`w-[350px] h-[250px] bg-healthier bg-cover bg-center rounded-md flex justify-center items-start relative m-10 z-50`}
        >
          <div className="flex items-center justify-center z-60 my-10 cursor-pointer">
            <h1 className="font-pressStart font-normal text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
              Healthier
            </h1>
          </div>
          <div className="flex absolute bottom-4 right-[130px] gap-4">
            <a
              target="_blank"
              href="https://github.com/dhia13/healthier"
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
            >
              <img src="./images/github.png" className="w-[32px] h-[32px]" />
            </a>
            <a
              target="_blank"
              href=""
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-not-allowed flex justify-center items-center "
              disabled
            >
              <img src="./images/globe.png" className="w-[32px] h-[32px]" />
            </a>
          </div>
        </div>
        <div
          className={`w-[350px] h-[250px] bg-soon bg-cover bg-center rounded-md flex justify-center items-start relative m-10 z-50`}
        >
          <div className="flex items-center justify-center z-60 my-10 cursor-pointer">
            <h1 className="font-pressStart font-normal text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
              InstaClone
            </h1>
          </div>
          <div className="flex absolute bottom-4 right-[130px] gap-4">
            <a
              target="_blank"
              href="https://github.com/dhia13/instagram-Clone"
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
            >
              <img src="./images/github.png" className="w-[32px] h-[32px]" />
            </a>
            <a
              target="_blank"
              href=""
              className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow flex justify-center items-center cursor-not-allowed"
            >
              <img src="./images/globe.png" className="w-[32px] h-[32px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
