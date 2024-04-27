import { useCallback, useState } from "react";
import Button from "./Button";
import HOC from "./HOC";

const Counter = ({
  timer,
  setTimer,
  timeIntervalId,
  setTimerIntervalId,
  isDisable,
  setIsDisable,
  handlePause,
  handleReset,
}) => {
  const handleStarts = useCallback(() => {
    let intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer.seconds === 60) {
          return { minute: prevTimer.minute + 1, seconds: 0 };
        } else {
          return { ...prevTimer, seconds: prevTimer.seconds + 1 };
        }
      });
    }, 1000);
    setTimerIntervalId(intervalId);
    setIsDisable({
      ...isDisable,
      start: !isDisable.start,
      pause: !isDisable.pause,
    });
    return () => clearInterval(intervalId);
  }, [setTimer]);

  if (timer.minute === 60) clearInterval(timeIntervalId);

  const { minute, seconds } = timer;
  const { start, pause, reset } = isDisable;
  return (
    <div className='text-center flex flex-col justify-center text-yellow-800 w-full h-3/6  mt-10    max-w-2xl bg-gray-200'>
      <h2 className='text-4xl font-bold pb-6'> Timer </h2>
      <h2 className='text-4xl font-bold pb-2'>
        {minute <= 9 ? `0${minute}` : `${minute}`} :{" "}
        {seconds <= 9 ? `0${seconds}` : `${seconds}`}
      </h2>
      <h2 className='text-xl font-bold pb-10'>Minute : Second</h2>
      <div className='flex gap-2 justify-center'>
        <Button disable={start} text={"Start"} handleClick={handleStarts} />
        <Button disable={pause} text={"Pause"} handleClick={handlePause} />
        <Button disable={reset} text={"Reset"} handleClick={handleReset} />
      </div>
    </div>
  );
};
export default HOC(Counter);
