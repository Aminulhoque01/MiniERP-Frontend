import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const DashboardLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Header />

        <main className="p-6">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;