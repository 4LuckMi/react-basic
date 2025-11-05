import styles from "./Card.module.css"

export default function Card({variant = 'primary', size = 'big'}){
const CardCless = `${styles.wrapper} ${styles[variant]} ${styles[size]}`

    return <div className={CardCless}>Card With Mcss Module</div>
}