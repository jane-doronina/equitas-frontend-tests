import { useEffect, useState } from "react";

import styles from "./counter.module.css";

const Counter = ({number}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;  // setting the duration of the animation in milliseconds
    const speed = duration / number;
    const timer = setInterval(() => {  // increment the count gradually using setInterval
      if (count <= number) {
        setCount((prevValue => prevValue + 1))  // incrementing the count using the previous value
      } else {
        clearInterval(timer);  // clearing the interval timer when the limit is reached
      }
    }, speed);

    return () => {
      clearInterval(timer);  // clean up when the component unmounts
    };
  })

  return (
    <div className={styles.counterWrapper}>
      <span className={styles.counter}>{count}</span> launches
    </div>
  )
}

export default Counter
