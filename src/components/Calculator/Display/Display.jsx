import styles from './Display.module.css'

const Display = ({ value, onChange }) => {

    const isValidKey = (value) => (['1234567890.'.split('').includes(value)] || ['Enter', 'Backspace'].includes(value))

    const handleKeyPressed = (event) => {
        if(isValidKey(event.key)) {
            console.log(event.target.value)
            if(onChange) {
                onChange(event.target.value)
            }
        }
    }

    return (
        <input className={styles.root} type="text" value={value} onKeyDown={handleKeyPressed}/>
    )
}

export default Display;