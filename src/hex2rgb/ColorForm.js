import { useState } from 'react';

function hexToRgbChanger(hexValue) {
  const arr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
  let result = {
    message: "ОШИБКА!",
    color: "#ff2200",
  };
  if (arr) {
    const [hex, r, g, b] = arr.map(c => parseInt(c, 16));
    result = {
      message: `rgb(${r}, ${g}, ${b})`,
      color: hexValue,
    };
  }
  document.getElementById('root').closest('body').style.backgroundColor = result.color;
  return result.message;
}

function ColorForm() {
  const maxLength = 7;
  const [value, setValue] = useState('#FFFFFF');
  const handleChange = ({target}) => {
    const value = target.value;
    setValue(value);
  }
  return (
    <div className="form">
      <input type="text" defaultValue={value} onChange={evt => handleChange(evt)} maxLength={maxLength} />
      <div className="for__input">
        {value.length === maxLength && hexToRgbChanger(value)}
      </div>
    </div>
  );
}

export default ColorForm;
