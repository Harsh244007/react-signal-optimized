import React, { useState } from "react";

const Profile: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleCounterIncrease = () => {
    setCounter(counter + 1);
  };

  console.log("Unoptimized Profile Rendered");
  return (
    <div className="border border-red flex flex-col gap-2 p-2">
      <p className="color-white">{counter} Unoptmized Profile</p>
      <button className="color-white" onClick={handleCounterIncrease}>
        Increate Profile Counter Unoptimized
      </button>
    </div>
  );
};
export default Profile;
