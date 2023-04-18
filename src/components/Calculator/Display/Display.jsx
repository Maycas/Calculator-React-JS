import styles from './Display.module.css'

const Display = ({ value }) => (
    <input className={styles.display} type="text" value={value}/>
)

export default Display;