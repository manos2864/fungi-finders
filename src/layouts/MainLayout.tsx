import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "@/_components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = () => (
  <>
    <Header />

    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <Outlet />
      </main>
    </Suspense>

    <Footer />
  </>
);

export default MainLayout;
