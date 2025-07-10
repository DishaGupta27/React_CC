
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState(10); // default target
  const intervalRef = useRef(null);

  const playSound = () => {
    const audio = new Audio("https://www.soundjay.com/buttons/beep-07.wav");
    audio.play();
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (seconds === target) {
      playSound(); // Or use: console.log("Target reached!");
      setRunning(false);
      clearInterval(intervalRef.current);
    }
  }, [seconds, target]);

  const handleStart = () => {
    if (!running) setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setSeconds(0);
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>React Stopwatch</h2>
      <p>Elapsed Time: {seconds} sec</p>

      <div style={{ margin: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop} style={{ marginLeft: "10px" }}>
          Stop
        </button>
        <button onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>
          Set Target Time (sec):{" "}
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
