function Navbar({ setCurrent, current }) {
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
          } px-4`}
        >{`< Kizaru />`}</p>
      </button>
      {/* Navigation */}
      <div className="h-full flex justify-center items-center mr-4 z-50">
        <button
          onClick={() => setCurrent("aboutMe")}
          className="h-full flex justify-center items-center px-4 z-50"
        >
          <p
            className={`${
              current === "aboutMe" ? "text-[#4dba87]" : "text-[#475569]"
            }`}
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
            }`}
          >
            {`< Projects />`}
          </p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
