import styles from "./HeroText.module.css";
import HeroBtn from "../HeroBtn/HeroBtn";

const HeroTexts = () => {
  return (
    <div className={styles.content}>

        <h1>AIR BUD RETURNS</h1>

       <h3>
            Anything is possible
        </h3>
        <p>
          Only in theaters 01.22.27
        </p>

        <HeroBtn/>

    </div>
  );
};

export default HeroTexts;