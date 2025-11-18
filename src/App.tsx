import { useRef } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routing/router";
import SkipToMain from "./components/layout/SkipToMain";
import { useResizeClass } from "./hooks/useResizeClass";

function App() {
  const parentRef = useRef<HTMLDivElement>(null);

  useResizeClass<HTMLDivElement | null>(parentRef, "resizing");

  return (
    <div ref={parentRef}>
      <SkipToMain />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
