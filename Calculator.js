import React, { useState } from 'react';
import './Calculator.css'; // Import CSS
import { evaluate } from 'mathjs'; // Import mathjs


function Calculator() {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                // Ham tinh toan
                setDisplay(evaluate(display)); 
            } 
            catch {
                setDisplay('Error');
            }
        } else if (value === 'C') {
            setDisplay(''); // Xóa màn hình
        } else if (value === 'D') {
            setDisplay(display.slice(0, -1))
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-display">{display}</div>
            <div className="calculator-keys">
                <button className="calculator-key" onClick={() => handleClick('1')}>1</button>
                <button className="calculator-key" onClick={() => handleClick('2')}>2</button>
                <button className="calculator-key" onClick={() => handleClick('3')}>3</button>
                <button className="calculator-key" onClick={() => handleClick('+')}>+</button>

                <button className="calculator-key" onClick={() => handleClick('4')}>4</button>
                <button className="calculator-key" onClick={() => handleClick('5')}>5</button>
                <button className="calculator-key" onClick={() => handleClick('6')}>6</button>
                <button className="calculator-key" onClick={() => handleClick('-')}>-</button>

                <button className="calculator-key" onClick={() => handleClick('7')}>7</button>
                <button className="calculator-key" onClick={() => handleClick('8')}>8</button>
                <button className="calculator-key" onClick={() => handleClick('9')}>9</button>
                <button className="calculator-key" onClick={() => handleClick('*')}>*</button>

                <button className="calculator-key" onClick={() => handleClick('C')}>C</button>
                <button className="calculator-key" onClick={() => handleClick('D')}>D</button>
                <button className="calculator-key" onClick={() => handleClick('0')}>0</button>
                <button className="calculator-key" onClick={() => handleClick('=')}>=</button>
                <button className="calculator-key" onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;
// Hàm Cộng
export function addOperation(a, b) {
  return a + b;
}

export function subtractOperation(a, b) {
  return a - b;
}

// Hàm Nhân
export function multiplyOperation(a, b) {
  return a * b;
}

// Hàm Chia
export function divideOperation(a, b) {
  if (b === 0) {
      return 'Lỗi: Không thể chia cho 0!';
  }
  return a / b;
}
