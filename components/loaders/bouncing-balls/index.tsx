import styles from './styles.module.css'

export default function BouncingBalls() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.shadow}></div>
            <div className={styles.shadow}></div>
            <div className={styles.shadow}></div>
        </div>
    )
}