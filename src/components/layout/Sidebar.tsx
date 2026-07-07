import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdInventory,
  MdPointOfSale,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        Mini ERP
      </h2>

      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
        >
          <MdDashboard size={22} />
          Dashboard
        </NavLink>

        <NavLink
          to="/products"
          className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
        >
          <MdInventory size={22} />
          Products
        </NavLink>

        <NavLink
          to="/sales"
          className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
        >
          <MdPointOfSale size={22} />
          Sales
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;