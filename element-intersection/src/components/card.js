import React from 'react';
import './card.css';

function Card(props) {
  const {id, text, description, url, observable} = props;

  return (
    <div id={observable ? 'observable' :id} className="Card">
      <div>{text}</div>
      <img alt={text} src={url} />
      <div>{description}</div>
    </div>
  );
}

export default Card;
