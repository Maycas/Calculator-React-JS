import classNames from 'classnames'
import styles from './Key.module.css'

const Key = ({value, type, onClick}) => {

    const handleClick = () => {
        onClick(value)
    }
 
    const keyClass = classNames({
        [styles.root]: true,
        [styles.number]: type === 'number',
        [styles.operator]: type === 'operator',
        [styles.action]: type === 'action',
        [styles.equal]: type === 'equal'
    })

    return (
        <button className={keyClass} onClick={handleClick}>
            {value}
        </button>
    )
}

export default Key