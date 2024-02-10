import { Link } from "react-router-dom";
import logo from "../assets/real-estate-house.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-slate-200 flex justify-between items-center px-4 lg:px-36">
        {/* logo-image*/}
        <Link to={"/"}>
          <img
            className="w-28 lg:w-36 h-20 object-cover cursor-pointer"
            src={logo}
            alt="no-image"
          />
        </Link>
        {/* name */}
        <h1 className="text-sm lg:text-lg font-bold">XYZ SYSTEMS LLP.</h1>
      </div>
    </>
  );
};
export default Navbar;
