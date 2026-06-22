import { useEffect, useState } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [hasToBeWorking, setHasToBeWorking] = useState(true);
  const onClickButton = () => {
    setHasToBeWorking((prev) => !prev)
  }

  useEffect(() => {
    if (hasToBeWorking === false) {
        return;
    }
    // 부수효과 
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      // 클린업
      console.log("timer component id deleted.")
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h1>경과 시간: {seconds}</h1>
      <button onClick={onClickButton}>
        {hasToBeWorking ? "Stoped" : "Restart"}
      </button>
    </div>
  );
};

export default TimerComponent;
