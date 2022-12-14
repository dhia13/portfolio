import MySkills from "./Components/MySkills";
import About from "./Components/About";
function AboutMe({ currentAbout, setCurrentAbout }) {
  return (
    <div className={`w-full h-full pt-[20px]`}>
      <div className="text-white w-full h-[60px] flex justify-center items-center mt-[40px]">
        <div className="flex w-full justify-center items-center gap-10 h-[40px] z-50">
          <button onClick={() => setCurrentAbout("about")}>
            <p
              className={`${
                currentAbout === "about" && "border-b-4 border-gray-300"
              } font-pressStart`}
            >
              AboutMe
            </p>
          </button>
          <button onClick={() => setCurrentAbout("mySkills")}>
            <p
              className={`${
                currentAbout === "mySkills" && "border-b-4 border-gray-300"
              } font-pressStart`}
            >
              Skills
            </p>
          </button>
        </div>
      </div>
      <div>
        {currentAbout === "about" && (
          <div className="w-screen h-full">
            <About />
          </div>
        )}
        {currentAbout === "mySkills" && (
          <div className="w-screen h-full">
            <MySkills />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
