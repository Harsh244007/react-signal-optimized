import { lazy } from "react";

const Unoptimized = lazy(() => import("./Unoptimized/Unoptimized"));

const Optimized = lazy(() => import("./Optimized/Optimized"));

export { Unoptimized,Optimized };
