import React from "react";
import { Optimized, Unoptimized } from "./components";

const App: React.FC = () => {
  return (
    <main className="max-w-xl m-auto border border-red flex flex-wrap justify-center items-center p-4  gap-4">
      <Unoptimized />
      <Optimized />
    </main>
  );
};

export default App;
