import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../redux/features/authSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  return (
    <header className="h-16 bg-white shadow flex justify-between items-center px-6">

      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Logout
      </button>

    </header>
  );
};

export default Header;