import styles from './card.module.css'
import { MdHourglassTop } from "react-icons/md";


const Card = ({ title, val, description }) => {
  return (
    <div className={styles.container}>
        <MdHourglassTop size={40}/>
        <div className={styles.texts}>
            <span className={styles.title}> {title} </span>
            <span className={styles.val}> {val} </span>
            <span className={styles.descr}> {description} </span>
        </div>
    </div>
  )
}

export default Card