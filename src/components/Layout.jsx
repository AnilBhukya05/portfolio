import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CustomCursor from "./CustomCursor";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}