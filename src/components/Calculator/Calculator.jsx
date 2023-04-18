import { useState } from "react";

import Display from './Display/Display'
import Keypad from './Keypad/Keypad'

import { evaluate } from 'mathjs'

import styles from './Calculator.module.css'

function Calculator() {

    const [displayValue, setDisplayValue] = useState('0');

    const isValidNumberKey = (value) => ('1234567890'.split('').includes(value) || ['.', '00'].includes(value))

    const isValidOperator = (value) => ('+-*/'.split('').includes(value))

    const cleanLeadingAndTrailingZeroes = (value) => {
        const operands = value.match(/[-+*/]|[0-9.]+/g)
        
        return operands.reduce((accumulator, operand) => {
            if(!isNaN(Number(operand))) {
                // Clean leading and trailing zeroes if the operand is a number
                operand = String(Number(operand))
            }
            accumulator += operand
            return accumulator
        }, '') 
    }
    
    const addKeyValue = (value) => {
        let result = displayValue + value
        result = cleanLeadingAndTrailingZeroes(result)
        setDisplayValue(result)
    }

    const isInt =(n) => {
        return n % 1 === 0;
     }

    const resolve = () => {
        let result = evaluate(displayValue)
        // If integer, remove decimal zeroes
        if(isInt(result)) {
            result = '' + result
        } else {
            result = '' + result.toFixed(4)
        }
        setDisplayValue(result)
    }

    const clearDisplay = () => {
        let result = displayValue.substring(0, displayValue.length - 1)
        if(result === '') {
            setDisplayValue('0')
        } else {
            setDisplayValue(result)
        }
    }

    const handleClickOnKey = (keyValue) => {
        if(isValidNumberKey(keyValue) || isValidOperator(keyValue)) {
            addKeyValue(keyValue)
        } else if(keyValue == 'CE') {
            setDisplayValue('0')
        } else if(keyValue == 'DEL') {
            clearDisplay()
        } else if(keyValue == '=') {
            resolve()
        } else {
            console.error('Not a valid parameter')
        }        
    }

    return(
        <section className={styles.root}>
            <Display value={displayValue}></Display>
            <Keypad onClick={handleClickOnKey}></Keypad>
        </section>
    )
}

export default Calculator