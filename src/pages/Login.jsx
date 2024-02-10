import { FaAngleDown } from "react-icons/fa";
import bgimage from "../assets/celeb.png";

const Login = () => {
  return (
    <>
      <div className="w-full p-4 lg:p-20 flex flex-col-reverse lg:flex-row max-w-screen-xl mx-auto justify-between">
        <div className="flex-1 lg:p-4">
          <h1 className="text-xl lg:text-4xl text-blue-400 font-bold">
            Unlock Exclusive Benefits
          </h1>
          <form className="w-full">
            <div className="py-6">
              <span>PHONE NUMBER</span>
              <div className="flex flex-col lg:flex-row gap-4 mt-4">
                <div className="relative">
                  <input
                    className="w-full lg:w-64 border border-black rounded-full px-3 py-1 mb-2 lg:mb-0 lg:mr-2"
                    type="text"
                    placeholder="+91 india"
                  />
                  <FaAngleDown className="absolute right-4 top-2 cursor-pointer" size={23}/>
                </div>
                <input
                  className="w-full lg:w-64 border border-black rounded-full px-3 py-1"
                  type="text"
                  placeholder="85434333"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span>NAME</span>
              <input
                className="w-full border border-black rounded-full px-3 py-1"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <span>EMAIL [OPTIONAL]</span>
              <input
                className="w-full border border-black rounded-full px-3 py-1"
                type="email"
              />
            </div>
            <div className="mt-10">
              <button className="w-full bg-blue-400 text-white px-10 py-2 rounded-full">
                CONTINUE
              </button>
            </div>
            <div className="mt-3">
              <p>Get ready to receive a secret code [OTP] on your phone.</p>
            </div>
          </form>
        </div>
        <div className=" flex-1 mt-6 lg:mt-0">
          <img className="h-full object-cover" src={bgimage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
