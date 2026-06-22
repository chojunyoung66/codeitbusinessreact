import { useState } from "react";

const CounterScreen = () => {
  const [number, setNumber] = useState(0);

  const onClickButton = () => {
    setNumber((prev) => prev + 1);
  };

  const onClickResetButton = () => {
    setNumber(() => 0);
  };

  return (
    <div>
      <h1>덧셈 카운터</h1>
      <h1>{number}</h1>
      <button onClick={onClickButton}>누르면 1 증가합니다.</button>
      <button onClick={onClickResetButton}>누르면 리셋됩니다.</button>
    </div>
  );
};

export default CounterScreen;
