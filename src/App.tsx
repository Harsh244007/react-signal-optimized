import React from "react";
import { Optimized, Unoptimized } from "./components";

const App: React.FC = () => {
  return (
    <main className="max-w-2xl m-auto border border-red flex flex-wrap justify-center items-center  gap-4 ">
      <Unoptimized />
      <Optimized />
    </main>
  );
};

export default App;
