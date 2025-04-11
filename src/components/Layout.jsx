import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
    </div>
  );
}
