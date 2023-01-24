import Image from "next/image";
function MyProjects() {
  return (
    <div className="w-full h-full bg-green-300 z-50">
      <h1 className="text-xl font-pressStart text-white z-50">
        Projucts/Products
      </h1>
      <div className="m-auto bg-red-300 h-[70%] w-[90%] flex flex-wrap mt-[50px] justify-center items-center overflow-x-hidden">
        <div
          className={`w-[350px] h-[350px] bg-events bg-cover bg-center rounded-md flex justify-center items-start relative m-10 z-50`}
        >
          <div className="flex items-center justify-center z-60 my-4 cursor-pointer">
            <h1 className="font-pressStart font-normal text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
              Events Room
            </h1>
          </div>
          <div className="flex absolute bottom-10 right-[50%] translate-x-[50%] gap-4">
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
          className={`w-[350px] h-[350px] border-white border bg-black bg-cover bg-center rounded-md flex justify-center items-start m-10 z-50 relative `}
        >
          <div className="absolute top-0 z-20">
            <Image
              src="/images/livraison.png"
              alt="qcs"
              width={175}
              height={350}
            />
          </div>
          <div className="flex items-center justify-center z-60 my-4">
            <h1 className="font-pressStart font-normal z-30 text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
              Livraison
            </h1>
          </div>
          <div className="absolute bottom-10 right-[50%] z-30">
            <a
              target="_blank"
              href="https://www.youtube.com/shorts/C4U96h6lUsU"
              className="w-[32px] h-[32px] translate-x-[50%] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
            >
              <img src="./images/youtube.png" className="w-[32px] h-[32px]" />
            </a>
          </div>
        </div>
        <div
          className={`w-[350px] h-[350px] border-white border bg-black bg-cover bg-center rounded-md flex justify-center items-start m-10 z-50 relative `}
        >
          <div className="absolute top-0 z-20">
            <Image src="/images/Qcs.png" alt="qcs" width={175} height={350} />
          </div>
          <div className="flex items-center justify-center z-60 my-4">
            <h1 className="font-pressStart font-normal z-30 text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
              Qct (Quiz App)
            </h1>
          </div>
          <div className="absolute bottom-10 right-[50%] z-30">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=yoSjq8MNB3E&ab"
              className="w-[32px] h-[32px] translate-x-[50%] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
            >
              <img src="./images/youtube.png" className="w-[32px] h-[32px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
