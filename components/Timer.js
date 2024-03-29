import React, { useEffect, useState } from 'react';

function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={timeLeft[interval]}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div className='timer'>
      {/* <h1>[EVENT] {year} Countdown</h1> */}
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Timer;
