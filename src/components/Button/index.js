import styles from "./button.module.css";

const Button = ({url, text, icon}) => {
  return (
    <a href={url} className={styles.buttonOutline} target="_blank" rel="noreferrer">
      {text}
      {icon ? icon : ""}
    </a>
  )
}

export default Button
