import { createBrowserRouter } from "react-router-dom";
import landingRoutes from "./routes/landing";
import mushroomGuideRoutes from "./routes/mushroom-guide";

export const router = createBrowserRouter([
  ...landingRoutes,
  ...mushroomGuideRoutes,
]);
