import { lazy } from "react";

import MainLayout from "@/layouts/MainLayout";
import paths from "../paths";
const MushroomGuide = lazy(() => import("@/pages/mushroom-guide"));

const mushroomGuideRoutes = [
  {
    element: <MainLayout />,
    children: [{ path: paths.mushroom_guide, element: <MushroomGuide /> }],
  },
];

export default mushroomGuideRoutes;
