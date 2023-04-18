import classNames from 'classnames'
import styles from './Key.module.css'

const Key = ({value, type}) => {

    const keyClass = classNames({
        [styles.main]: true,
        [styles.number]: type === 'number',
        [styles.operator]: type === 'operator',
        [styles.action]: type === 'action',
        [styles.equal]: type === 'equal'
    })

    return (
        <button className={keyClass}>{value}</button>
    )
}

export default Key