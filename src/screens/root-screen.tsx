import { useState } from "react";
import TimerComponent from "../components/timer-component";
import AuthScreen from "./auth-screen";
import { MemoScreen } from "./memo-screen";

const RootScreen = () => {
  const [me] = useState(null);
  const [showTimer, setShowTimer] = useState(true);

  const onClickToggleTimerButton = () => {
    setShowTimer((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onClickToggleTimerButton}>
        {showTimer ? "타이머 숨기기" : "타이머 보이기"}
      </button>
      {showTimer ? <TimerComponent /> : null}
      {me === null ? <AuthScreen /> : <MemoScreen />}
    </div>
  );
};

export default RootScreen;
