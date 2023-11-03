import React, { memo, useState } from "react";

const Profile: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleCounterIncrease = () => {
    setCounter(counter + 1);
  };

  console.log("Unoptimized Profile Rendered");
  return (
    <div className="border border-red">
      <p className="color-white">{counter} Optimized Profile</p>
      <button className="color-white" onClick={handleCounterIncrease}>
        Increate Profile Counter Optimized
      </button>
    </div>
  );
};
export default memo(Profile);
