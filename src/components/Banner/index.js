import { Container } from "@mui/material";

import styles from "./banner.module.css";
import Counter from "../Counter";


const Banner = ({total}) => {
  return (
    <header className={styles.bannerBg}>
      <div className={styles.verticalLine}></div>
      <Container fixed className={styles.bannerContainer}>
        <div>
          <h3 className={styles.subHeading}>Home assignment for Equitas by Zhanna Doronina</h3>
          <h1 className={styles.mainHeading}>Successful SpaceX launches</h1>
          <div className={styles.horizontalLine}>
            <div className={styles.circle}></div>
          </div>
          <Counter number={total}/>
        </div>
      </Container>
    </header>
  )
}

export default Banner
