import { Link } from "react-router-dom";
import membershipLogo from "../assets/membership.jpg";
import Carousel from "./Carousel";

const Membership = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-2xl lg:text-4xl">New Arrival</h1>
        <div className="flex justify-between pt-2">
          <p>
            <span className="border-b-2 border-black">JOIN</span> TODAY
          </p>
          <span className="lg:text-4xl text-green-700">
            Unlock Premium Feacture Now
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <div>
            <img className="w-[300px] mx-auto" src={membershipLogo} alt="no-image" />
            <button className="w-full text-gray-700 rounded-full py-2 bg-gradient-to-b from-gray-400 to-gray-300">
              <Link to={"/login"}>JOIN NOW</Link>
            </button>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};
export default Membership;
