function About() {
  return (
    <div>
      <div className="flex justify-center items-start w-screen h-full z-60 lg:mt-[100px]">
        <div className="w-full flex justify-center items-center h-[600px]">
          <div
            className="flex  lg:items-start  xl:items-start 2xl:items-start flex-col flex-wrap  my-auto p-[20px] lg:w-[1000px] sm:w-[800px]
              gap-2 z-50 bg-black text-white justify-center m-[40px] rounded-md"
          >
            <h1 className="text-3xl text-bold font-poppins text-center lg:text-5xl">
              Greetings
            </h1>
            <p className="text-bold text-2xl font-poppins lg:text-3xl">
              My Name is Sahhar Dhia eddine.
            </p>
            <p className="text-md lg:font-poppins lg:text-2xl font-roboto">
              I am a fullstack developer and a programmer with over 3 years
              experience, I have mastered the mern-stack and software
              engineering, Leveled-up every skill that is required to make
              website apps from scratch, Capable of solving complex problems and
              debug other developers code, I'm a fast learner ready to dive into
              other frameworks, I create develop websites/webApps that are fast
              and optimized with silk clean code according to best practices and
              pipelines. I'm a trilingual speaker efficient at Arabic, English
              and French which will help you communicate and reach wider
              audience, I'm fast and accurate with great hunger for knowledge
              and adventure.
            </p>
            <p className=" text-xl font-poppins lg:text-3xl">
              Don't hesitate to contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
