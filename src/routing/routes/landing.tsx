import { lazy } from "react";

import MainLayout from "@/layouts/MainLayout";
import paths from "../paths";
const LandingPage = lazy(() => import("@/pages/landing"));

const landingRoutes = [
  {
    element: <MainLayout />,
    children: [{ path: paths.landing, element: <LandingPage /> }],
  },
];

export default landingRoutes;
