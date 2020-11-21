import React, { useEffect, useState } from 'react';

function getTime() {
  const date = new Date();
  return {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: date.getHours() > 0 && date.getHours() < 13 ? 'AM' : 'PM'
  };
}

function prefixZero(number) {
  return number < 10 ? `0${number}` : number;
}

export default function Clock(props) {
  const [time, setTime] = useState(getTime());

  const updateTime = () => setTime(getTime());

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000); 
    return function clearTimer() {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span>
      {`${prefixZero(time.hour)}:${prefixZero(time.minutes)}:${prefixZero(time.seconds)} ${time.ampm}`}
    </span>
  );
}
