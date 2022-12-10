const PageIndicator = ({ setValue, value }) => {
  return (
    <div className="w-[24px] absolute top-1/2 left-[6px] flex justify-center items-center flex-col z-50">
      <div
        className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
        onClick={() => setValue("header")}
      >
        <img
          src={
            value === "header"
              ? "/images/circle-full.png"
              : "/images/circle-empty.png"
          }
          alt="circle"
          className="w-[16px] h-[16px]"
        />
      </div>
      <div
        className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
        onClick={() => setValue("aboutMe")}
      >
        <img
          src={
            value === "aboutMe"
              ? "/images/circle-full.png"
              : "/images/circle-empty.png"
          }
          alt="circle"
          className="w-[16px] h-[16px]"
        />
      </div>
      <div
        className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
        onClick={() => setValue("myProjects")}
      >
        <img
          src={
            value === "myProjects"
              ? "/images/circle-full.png"
              : "/images/circle-empty.png"
          }
          alt="circle"
          className="w-[16px] h-[16px]"
        />
      </div>
    </div>
  );
};

export default PageIndicator;
