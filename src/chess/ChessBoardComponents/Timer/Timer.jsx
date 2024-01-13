import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>

      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
    </div>
  );
}
export function OneMinutes() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180); // 1 minute timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export function OneMinutePlusOne() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180); // 1 minute timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export function ThreeMinutes() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180); // 3 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export function FiveMinutes() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export function TenMinutes() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export function FifteenMinutes() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 900); // 15 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export function thirtyMinutes() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800); // 30 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}