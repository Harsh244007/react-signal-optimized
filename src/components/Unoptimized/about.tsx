import React, { useState } from "react";

const About: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleCounterIncrease = () => {
    setCounter(counter + 1);
  };

  console.log("Unoptimized About Rendered");
  return (
    <div className="border border-red">
      <p className="color-white">{counter} Unoptmized About</p>
      <button className="color-white" onClick={handleCounterIncrease}>
        Increate About Counter Unoptimized
      </button>
    </div>
  );
};
export default About;
