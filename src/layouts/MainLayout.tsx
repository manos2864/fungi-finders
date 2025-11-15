import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const MainLayout = () => (
  <>
    <Header />

    <Suspense fallback={<div>Loading...</div>}>
      <main id="main">
        <Outlet />
      </main>
    </Suspense>

    <Footer />
  </>
);

export default MainLayout;
