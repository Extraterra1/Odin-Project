import { useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(0);
  setTimeout(() => {
    setTime((time) => time + 1);
  }, 1000);
  return <h1>{time}</h1>;
}
