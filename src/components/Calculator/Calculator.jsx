import { useState } from "react";

import Display from './Display/Display'
import Keypad from './Keypad/Keypad'

import styles from './Calculator.module.css'

function Calculator() {

    const [displayValue, setdisplayValue] = useState(0);

    return(
        <section className={styles.calculator}>
            <Display value={displayValue}></Display>
            <Keypad></Keypad>
        </section>
    )
}

export default Calculator