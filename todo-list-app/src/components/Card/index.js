import React from 'react';
import './style.css';

function Card(props) {
  const {text, onDelete, checked, onChange} = props;

  return (
    <div className="Card">
      <div>{text}</div>
      <input type='checkbox' checked={checked} onChange={(event => {
        onChange(event.target.checked);
      })} />
      <button onClick={() => {
        onDelete();
      }}>X</button>
    </div>
  );
}

export default Card;
