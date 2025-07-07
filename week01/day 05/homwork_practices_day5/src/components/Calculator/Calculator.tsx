
import React from 'react';
import styles from './Calculator.module.css';

export default function Calculator() {
    const [expression, setExpression] = React.useState('');
    const [result, setResult] = React.useState('');

    const handleClick = (value: string) => {
        if (value === 'C') {
            setExpression('');
            setResult('');
            return;
        }

        if (value === '=') {
            try {

                const replaced = expression.replace(/\u00f7/g, '/').replace(/\u00d7/g, '*');
                const evalResult = eval(replaced);
                setResult(evalResult === Infinity ? 'Error rồi' : evalResult.toString());
            } catch {
                setResult('Error rồi ');
            }
            return;
        }

        // Prevent double decimal
        const lastChar = expression.charAt(expression.length - 1);
        if (value === '.' && lastChar === '.') return;

        setExpression(prev => prev + value);
    };

    const buttons = [
        '7', '8', '9', '÷',
        '4', '5', '6', '×',
        '1', '2', '3', '-',
        '0', '.', 'C', '+',
    ];

    return (
        <div className={styles.calculatorBox}>
            <div className={styles.screen}>
                <div>{expression || '0'}</div>
                <div className={styles.result}>{result}</div>
            </div>

            <div className={styles.buttonGrid}>
                {buttons.map((btn, i) => (
                    <button
                        key={i}
                        className={
                            btn === 'C' ? styles.clearBtn :
                                ['+', '-', '×', '÷'].includes(btn) ? styles.operatorBtn : styles.normalBtn
                        }
                        onClick={() => handleClick(btn)}>
                        {btn}
                    </button>
                ))}
                <button className={styles.equalBtn} onClick={() => handleClick('=')}>=</button>
            </div>
        </div>
    );
}
