import React, { useState } from "react";
import Profile from "./profile";
import About from './about';

const Unoptimized: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleCounterIncrease = () => {
    setCounter(counter + 1);
  };
  console.log("Unoptimized Rendered");
  return (
    <div>
      <p>this is a unoptimized component</p>
      <p>{counter} from unoptimized</p>
      <button onClick={handleCounterIncrease}>Increase unoptimized counter</button>
      <Profile />
      <About/>
    </div>
  );
};
export default Unoptimized;
