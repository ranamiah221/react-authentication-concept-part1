import { NavLink } from "react-router-dom";
import logo from "../../assets/firebase-1.svg";
const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Firebase Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FireBase
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <ul className="flex gap-4 text-base font-medium">
              <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-base font-medium underline text-green-500"
                      : ""
                  } to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-base font-medium underline text-green-500"
                      : ""
                  } to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-base">
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-base font-medium underline text-green-500"
                      : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
