import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto">
        <div className="sm:hidden">
            {/* Mobile Navbar */}
          <div className="justify-self-start">
                <button className="text-2xl">
                    <RxHamburgerMenu />
                </button>
          </div>
          {/* Logo */}

            <div className="justify-self-center font-bold text-xl">
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>

            {/* Sign In / Sign Up */}

            <div className="flex gap-1 justify-self-end">
            <button className="btn mr-2 rounded-3xl border-none text-sm">
              Sign In
            </button>
            <button className="btn rounded-3xl border-none text-white bg-[#D91B7E] text-sm">
              Sign Up
            </button>
          </div>
        </div>


        <div className="flex flex-3 justify-between items-center py-4">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <ul className="flex justify-center items-center gap-3">
            <li className="text-[#DB2777] font-semibold">
              <a href="#">Home</a>
            </li>
            <li className="font-medium text-[#475569]">
              <a href="#">Technologies</a>
            </li>
            <li className="font-medium text-[#475569]">
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="font-medium text-[#475569]">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <button className="btn mr-2 rounded-3xl border-none">
              Sign In
            </button>
            <button className="btn rounded-3xl border-none text-white bg-[#D91B7E]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#F1F5F9]"></div>
    </div>
  );
};

export default Navbar;
