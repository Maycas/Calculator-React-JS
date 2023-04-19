import { useState } from "react";

import Display from './Display/Display'
import Keypad from './Keypad/Keypad'

import { evaluate } from 'mathjs'

import styles from './Calculator.module.css'

function Calculator() {

    const [displayValue, setDisplayValue] = useState('0');
    const [enabled, setEnabled] = useState(true)

    const isValidNumberKey = (value) => ('1234567890.'.split('').includes(value) || ['00'].includes(value))

    const isValidOperator = (value) => ('+-*/'.split('').includes(value))
    
    const addKeyValue = (value) => {
        if(enabled) {
            let result
            // Remove the zero at the beginning of the display when typing a number
            if(displayValue === '0' && value !=='.' && !isValidOperator(value)) { 
                result = ''
            }else {
                result = displayValue
            }
            result += value
            setDisplayValue(result)
        }  
    }

    const resolve = () => {
        let result

        try{
            result = evaluate(displayValue)

            // Disable calculator if Infinity
            if(result === Infinity) {
                setEnabled(false)
            }
            
            result = String(Number(result)) // remove trailing zeroes and casting back to String
        } catch(error) {
            // Disable calculator if Error
            result = 'ERROR'
            setEnabled(false)
        }   

        setDisplayValue(result)
    }

    const removeLastDisplayCharacter = () => {
        let result = displayValue.substring(0, displayValue.length - 1)
        if(result === '') {
            setDisplayValue('0')
        } else {
            setDisplayValue(result)
        }
    }

    const handleClickOnKey = (keyValue) => {
        if(enabled && keyValue !== 'CE') {
            if(isValidNumberKey(keyValue) || isValidOperator(keyValue)) {
                addKeyValue(keyValue)
            } else if(keyValue == 'DEL') {
                removeLastDisplayCharacter()           
            } else if(keyValue == '=') {
                resolve()
            } else {
                console.error('Not a valid parameter')
            }
        } else if(keyValue === 'CE') {
            // CE will reset the calculator if 
            setDisplayValue('0')
            setEnabled(true) 
        }
    }

    return(
        <section className={styles.root}>
            <Display value={displayValue} onChange={setDisplayValue}></Display>
            <Keypad onClick={handleClickOnKey}></Keypad>
        </section>
    )
}

export default Calculator