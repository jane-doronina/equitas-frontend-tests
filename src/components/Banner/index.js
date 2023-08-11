import { Container } from "@mui/material";

import styles from "./banner.module.css";
import Counter from "../Counter";


const Banner = ({total}) => {
  return (
    <header className={styles.bannerBg}>
    {/* This style is reused in other components and defined outside of css module */}
      <div className="verticalLine"></div>
      <Container fixed className={styles.bannerContainer}>
        <div>
          <h3 className={styles.subHeading}>Home assignment for Equitas by Zhanna Doronina</h3>
          <h1 className={styles.mainHeading}>Successful SpaceX launches</h1>
          {/* This styles are reused in other components and defined outside of css module */}
          <div className="horizontalLine">
            <div className="circle"></div>
          </div>
          <Counter number={total}/>
        </div>
      </Container>
    </header>
  )
}

export default Banner
