import styles from './Display.module.css'

const Display = ({ value, onChange }) => {

    const handleKeyPressed = (event) => {
        if(onChange) {
            onChange(event.key)
        }
    }

    return (
        <input className={styles.root} type="text" value={value} onKeyDown={handleKeyPressed} readOnly/>
    )
}

export default Display;