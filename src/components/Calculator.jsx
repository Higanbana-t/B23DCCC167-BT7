import { useState } from 'react';
import Display from './Display';
import Button from './Button';

function Calculator() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'Clear' || value === 'C') {
      setExpression('');
    } else if (value === 'Delete') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        const calcExpression = expression.replace(/x/g, '*');
        const result = new Function('return ' + calcExpression)();
        setExpression(String(result));
      } catch {
        setExpression('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    { label: 'Clear', color: '#4caf50' }, { label: 'Delete', color: '#4caf50' }, { label: '.', color: '#4caf50' }, { label: '/', color: '#4caf50' },
    { label: '7', color: '#4caf50' }, { label: '8', color: '#4caf50' }, { label: '9', color: '#4caf50' }, { label: 'x', color: '#4caf50' },
    { label: '4', color: '#4caf50' }, { label: '5', color: '#4caf50' }, { label: '6', color: '#4caf50' }, { label: '-', color: '#4caf50' },
    { label: '1', color: '#4caf50' }, { label: '2', color: '#4caf50' }, { label: '3', color: '#4caf50' }, { label: '+', color: '#4caf50' },
    { label: '0', color: '#4caf50', isWide: true }, { label: '=', color: '#4caf50' }
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto', border: '1px solid #000' }}>
      <Display value={expression} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px' }}>
        {buttons.map((btn, index) => (
          <div key={index} style={{ gridColumn: btn.isWide ? 'span 2' : 'span 1' }}>
             <Button label={btn.label} color={btn.color} onClick={handleButtonClick} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;