import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 justify-between items-center px-10 py-4">
      {/*links */}
      <div className="flex justify-center flex-1">
        <div className="flex flex-wrap gap-2 lg:gap-4">
          <Link to="/">Home</Link>
          <Link to="/">Dashboard</Link>
          <Link to="/">Products</Link>
          <Link to="/">Transactions</Link>
          <Link to="/">Journal</Link>
        </div>
      </div>
      {/* user icons */}
      <div className="flex-col cursor-pointer">
        <FaUser className="mx-auto" size={25} />
        <span className="text-sm">Joseph Lazar</span>
      </div>
    </div>
  );
};

export default Header;
