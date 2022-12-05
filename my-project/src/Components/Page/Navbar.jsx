import { Link } from "react-router-dom";

export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "Men", to: "men" },
    { title: "Women", to: "women" },
    { title: "New Arrivals", to: "newarrivals" },
    { title: "Help", to: "help" },
  ];

  return (
    <div className="bg-[#24a3b5] shadow-lg">
      <div className="container mx-auto">
        <div className="sm:flex justify-center">
          {/* Logo */}
          <Link to="/" className="text-[#AECFC1] text-3xl font-bold p-3">
            LOGO
          </Link>

          {/* Menu Items */}

          <ul className="flex-1 text-white sm:self-center text-xl font-medium border-t sm:border-none">
            <li className="sm:inline-block">
              {nav.map((e) => (
                <Link
                  key={e.title}
                  to={e.to}
                  className="p-5 hover:bg-white hover:text-blue-600/100"
                >
                  {e.title}
                </Link>
              ))}
            </li>
          </ul>

          <ul className="flex flex-row-reverse flex-1 text-white sm:self-center text-xl font-medium border-t sm:border-none">
            <li className="sm:inline-block">
              <Link
                to="/cart"
                className="p-5 hover:bg-white hover:text-blue-600/100"
              >
                Cart
              </Link>
            </li>

            <li className="sm:inline-block">
              <Link
                to="singup"
                className="p-5 hover:bg-white hover:text-blue-600/100"
              >
                SignUp
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link
                to="/login"
                className="p-5 hover:bg-white hover:text-blue-600/100"
              >
                LogIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
