import { RouterProvider } from "react-router-dom";
import { router } from "@/routing/router";
import SkipToMain from "./components/layout/SkipToMain";

function App() {
  return (
    <>
      <SkipToMain />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
