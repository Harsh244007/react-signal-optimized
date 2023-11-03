import React, { useState } from "react";
import Profile from "./profile";
import About from "./about";

const Optimized: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleCounterIncrease = () => {
    setCounter(counter + 1);
  };
  console.log("Optimized Rendered");
  return (
    <div>
      <p>this is a Optimized component</p>
      <p>{counter} from Optimized</p>
      <button onClick={handleCounterIncrease}>Increase Optimized counter</button>
      <Profile />
      <About />
    </div>
  );
};
export default Optimized;
