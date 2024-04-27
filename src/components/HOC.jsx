import React, { useState, useCallback } from "react";

const HOC = (Component) => {
  const NewComponent = (props) => {
    const minutes = props.minute ? props.minute : 0;
    const [timer, setTimer] = useState({ minute: minutes, seconds: 0 });
    const [timerIntervalId, setTimerIntervalId] = useState(null);
    const [isDisable, setIsDisable] = useState({
      start: false,
      pause: true,
      reset: true,
    });
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

    const handlePause = () => {
      clearInterval(timerIntervalId);
      setIsDisable({
        start: !isDisable.start,
        pause: !isDisable.pause,
        reset: !isDisable.reset,
      });
    };
    const handleReset = () => {
      setTimer({ minute: 0, seconds: 0 });
      clearInterval(timerIntervalId);
      setIsDisable({
        ...isDisable,
        reset: !isDisable.reset,
      });
    };
    return (
      <Component
        timer={timer}
        setTimer={setTimer}
        timerIntervalId={timerIntervalId}
        setTimerIntervalId={setTimerIntervalId}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
        handleStarts={handleStarts}
        handlePause={handlePause}
        handleReset={handleReset}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default HOC;
