import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(0);
  //   setTimeout(() => {
  //     setTime((time) => time + 1);
  //   }, 1000);

  useEffect(() => {
    const clock = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return <h1>{time} seconds have passed</h1>;
}
