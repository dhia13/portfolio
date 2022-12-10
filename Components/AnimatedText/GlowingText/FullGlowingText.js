import BouncyText from "../BouncyText/BouncyText";
import GlowingText from "./GlowingText";
import styles from "./GlowingText.module.css";

function Header() {
  return (
    <div className="w-screen h-screen z-50  absolute">
      <GlowingText text="Hi there" style={styles.text1} />
      <GlowingText text="My name is Dhia Eddine " style={styles.text2} />
      <div className="flex justify center items center">
        <GlowingText text="I'am a" style={styles.text3} />
        <BouncyText text="FULLSTACK" />
        <GlowingText text="developer" style={styles.text4} />
      </div>
    </div>
  );
}

export default Header;
