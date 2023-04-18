import Key from './Key/Key'

import styles from './Keypad.module.css'

const Keypad = () => {

    let buttons = [
        {
            value: 7,
            type: 'number'
        },
        {
            value: 8,
            type: 'number'
        },
        {
            value: 9,
            type: 'number'
        },
        {
            value: '+',
            type: 'operator'
        },
        {
            value: '-',
            type: 'operator'
        },
        {
            value: 4,
            type: 'number'
        },
        {
            value: 5,
            type: 'number'
        },
        {
            value: 6,
            type: 'number'
        },
        {
            value: '*',
            type: 'operator'
        },
        {
            value: '/',
            type: 'operator'
        },
        {
            value: 1,
            type: 'number'
        },
        {
            value: 2,
            type: 'number'
        },
        {
            value: 3,
            type: 'number'
        },
        {
            value: 'DEL',
            type: 'action'
        },
        {
            value: 'CE',
            type: 'action'
        },
        {
            value: 0,
            type: 'number'
        },
        {
            value: '00',
            type: 'number'
        },
        {
            value: '.',
            type: 'number'
        },
        {
            value: '=',
            type: 'equal'
        }
    ]

    return ( 
        <div className={styles.keypad}>
            { 
                buttons.map( 
                    (button, index) =>   <Key 
                                            key={index}
                                            value={button.value} 
                                            type={button.type}>
                                        </Key>
                ) 
            }
        </div>
    )
}
 
export default Keypad;