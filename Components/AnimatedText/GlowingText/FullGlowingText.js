import BouncyText from "../BouncyText/BouncyText";
import GlowingText from "./GlowingText";
import styles from "./GlowingText.module.css";

function Header() {
  return (
    <div
      className="w-screen h-screen z-50  absolut flex
    justify-center flex-col mx-[40px] gap-4"
    >
      <p
        className="text-2xl text-white
         font-roboto whitespace-nowrap font-bold
         hover:drop-shadow-glow cursor-pointer xl:2xl:lg:text-6xl md:text-5xl sm:text-4xl"
      >
        Hi there
      </p>
      <p
        className="text-2xl hover:drop-shadow-glow cursor-pointer text-white font-roboto whitespace-nowrap font-bold
      xl:2xl:lg:text-6xl md:text-5xl sm:text-4xl"
      >
        My Name is Sahhar Dhia Eddine
      </p>
      <div className="flex justify center items center gap-2">
        <p
          text="Hi there"
          className="text-2xl hover:drop-shadow-glow cursor-pointer text-white font-roboto whitespace-nowrap font-bold
          xl:2xl:lg:text-6xl md:text-5xl sm:text-4xl"
        >
          I am A
        </p>
        <BouncyText text="FULSTACK" />
        <p
          text="Hi there"
          className="text-2xl hover:drop-shadow-glow cursor-pointer text-white font-roboto whitespace-nowrap font-bold
          xl:2xl:lg:text-6xl md:text-5xl sm:text-4xl"
        >
          Developer
        </p>
      </div>
    </div>
  );
}

export default Header;
