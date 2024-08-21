import React from 'react';
import "./DressCard.css"

function DressCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default DressCard;
