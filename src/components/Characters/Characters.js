import React from 'react';

export default function Characters({
  head }) {
  return (
    <div>
      <div className ="character">
        <img className="head" src = { `./${head}-cage.png`}></img>
      </div>
    </div>
  );
}