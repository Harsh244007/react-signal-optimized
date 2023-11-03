import React, { memo, useState } from "react";

const About: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleCounterIncrease = () => {
    setCounter(counter + 1);
  };

  console.log("Optimized About Rendered");
  return (
    <div className="border border-red">
      <p className="color-white">{counter} Optimized About</p>
      <button className="color-white" onClick={handleCounterIncrease}>
        Increate About Counter Optimized
      </button>
    </div>
  );
};
export default memo(About);
