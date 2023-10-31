import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const calssVal = showMenu ? "block" : "hidden";

  const Navigate = useNavigate();

  return (
    <section className="container mx-auto px-8 max-[768px]:relative">
      <div className="flex justify-between items-center p-4 h-auto">
        <Link to="/">
          <div className="flex justify-center align-middle items-center cursor-pointer">
            <img src="/adsense.png" className="h-4 pr-2"></img>
            <h3 className="text-[#2E343F]">Smart Solution</h3>
          </div>
        </Link>
        <div className="min-[768px]:hidden text-2xl">
          <FiMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
        <div
          className={`max-[768px]:${calssVal} max-[768px]:absolute max-[768px]:top-[4rem] max-[768px]:right-[3rem] z-50`}
        >
          <ul className="flex list-none text-[#2E343F] max-[768px]:flex-col max-[768px]:p-4 max-[768px]:gap-[0.7rem] max-[768px]:bg-[#f9f9f9] max-[768px]:rounded-md max-[768px]:shadow-md">
            <li className="mr-4 p-1 transition-all duration-100 max-[768px]: text-lg max-[768px]:hover:bg-[#ededed] max-[768px]:w-full max-[768px]:rounded-md cursor-pointer hover:text-[#0070f4]">
              Home
            </li>
            <li className="mr-4 p-1 transition-all duration-100 max-[768px]: text-lg max-[768px]:hover:bg-[#ededed] max-[768px]:w-full max-[768px]:rounded-md cursor-pointer hover:text-[#0070f4]">
              Story
            </li>
            <li className="mr-4 p-1 transition-all duration-100 max-[768px]: text-lg max-[768px]:hover:bg-[#ededed] max-[768px]:w-full max-[768px]:rounded-md cursor-pointer hover:text-[#0070f4]">
              Team
            </li>
            <li className="mr-4 p-1 transition-all duration-100 max-[768px]: text-lg max-[768px]:hover:bg-[#ededed] max-[768px]:w-full max-[768px]:rounded-md cursor-pointer hover:text-[#0070f4]">
              Careers
            </li>
            <li className="p-1 transition-all duration-100 max-[768px]: text-lg max-[768px]:hover:bg-[#ededed] max-[768px]:w-full max-[768px]:rounded-md cursor-pointer hover:text-[#0070f4]">
              Talent
            </li>
          </ul>
        </div>
        <div className="text-[#2E343F] max-[768px]:hidden">
          <button
            onClick={() => {
              Navigate("/login");
            }}
            className="mr-4 p-2 rounded-lg"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              Navigate("/signup");
            }}
            className="px-4 py-2 rounded-lg border border-[#2E343F] hover:bg-[#2E343F] hover:text-white transition-all"
          >
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
