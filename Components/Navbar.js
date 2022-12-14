import { useEffect, useState } from "react";

function Navbar({ setCurrent, current }) {
  const [indecator, setIndecator] = useState(true);

  useEffect(() => {
    const pingAndFade = () => {
      if (indecator === true)
        setTimeout(() => {
          setIndecator(false);
        }, 10000);
    };
    pingAndFade();
  }, [indecator]);

  return (
    <nav className="w-full h-[80px] flex justify-between items-center font-bold text-2xl font-roboto">
      {/* Logo */}
      <button
        onClick={() => setCurrent("header")}
        className="flex justify-center items-center px-2 ml-2 h-full z-50"
      >
        <p
          className={` ${
            current === "header" ? "text-[#4dba87]" : "text-[#475569]"
          } px-4 hover:text-[#03f490] text-base xl:2xl:lg:text-2xl md:text-xl sm:text-lg`}
        >{`< Kizaru />`}</p>
      </button>
      {/* Navigation */}
      {indecator && (
        <div
          className={`z-50 text-sm font-pressStart text-white cursor-pointer drop-shadow-glow sm:hidden`}
        >
          Use Keyboard to navigate Easier
        </div>
      )}
      <div className="h-full flex justify-center items-center mr-4 z-50">
        <button
          onClick={() => setCurrent("aboutMe")}
          className="h-full flex justify-center items-center px-4 z-50"
        >
          <p
            className={`${
              current === "aboutMe" ? "text-[#4dba87]" : "text-[#475569]"
            } hover:text-[#03f490] text-base xl:2xl:lg:text-2xl md:text-xl sm:text-lg`}
          >
            {`< About />`}
          </p>
        </button>
        <button
          onClick={() => setCurrent("myProjects")}
          className="h-full flex justify-center items-center px-4 z-50"
        >
          <p
            className={`${
              current === "myProjects" ? "text-[#4dba87]" : "text-[#475569]"
            } hover:text-[#03f490] text-base xl:2xl:lg:text-2xl md:text-xl sm:text-lg`}
          >
            {`< Projects />`}
          </p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
