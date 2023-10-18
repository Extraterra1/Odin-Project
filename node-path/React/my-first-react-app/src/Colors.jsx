import React, { useState } from 'react';
const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

export default function Colors() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCount(count + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor
      }}
    >
      <h1>State changed {count} times</h1>
      {COLORS.map((color) => (
        <button type="button" key={color} onClick={onButtonClick(color)} className={backgroundColor === color ? 'selected' : ''}>
          {color}
        </button>
      ))}
    </div>
  );
}
