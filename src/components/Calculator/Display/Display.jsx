import styles from './Display.module.css'

const Display = ({ value }) => (
    <input className={styles.root} type="text" value={value}/>
)

export default Display;