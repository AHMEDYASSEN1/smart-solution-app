import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const SignUp = () => {
  return (
    <div className="container mx-auto px-8 py-[4rem] bg-[#fcfcfc]">
      <div className="max-w-xl m-auto mb-10">
        <h2 className="text-center text-[#2E343F] text-4xl">Welcome . We exist to make entrepreneurship easier</h2>
      </div>
      <div>
        <form className=" text-center max-w-sm m-auto">
        <div>
            <label className="flex items-start text-[14px] text-[#2E343F]">Name</label>
            <input className=" mt-2 w-full text-[16px] text-[#7f7f7f] border-[1px] rounded-sm py-2 px-2 outline-none" placeholder="Enter your name" type="text"></input>
          </div>
          <div className="py-4">
            <label className="flex items-start text-[14px] text-[#2E343F]">Email</label>
            <input className=" mt-2 w-full text-[16px] text-[#7f7f7f] border-[1px] rounded-md py-2 px-2 outline-none" placeholder="Enter your email address" type="text"></input>
          </div>
          <div className="mb-4">
            <label className="flex items-start text-[14px] text-[#2E343F]">Password</label>
            <input className=" mt-2 w-full text-[16px] text-[#7f7f7f] border-[1px] rounded-md py-2 px-2 outline-none" placeholder="Enter your email password" type="password"></input>
          </div>
          <button className="block w-full cursor-pointer bg-[#0070f4] border-[#0070f4] hover:bg-[#0060ce] text-white text-[16px] py-2 rounded-md border-2 mb-2">Sign up</button>
          <p className="text-[15px] text-[#58606d]">
            By creating an account, you agree to the{" "}
            <a className=" underline underline-offset-1 cursor-pointer">terms & conditions</a>, and our <a className=" underline underline-offset-1 cursor-pointer">privacy policy</a>
            .
          </p>
          <i className="text-[#58606d]">Or</i>
          <button className="flex justify-center cursor-pointer my-1 w-full bg-[#191919] border-[#191919] hover:bg-[#242424] text-white text-[16px] py-2 rounded-md border-2 mb-2">
          <span className="text-[22px] pr-4"><AiFillGithub/></span>
            Continue with Github
          </button>
          <button className="flex justify-center cursor-pointer w-full bg-[#e53e3e] border-[#e53e3e] hover:bg-[#e14949] text-white text-[16px] py-2 rounded-md border-2 mb-2">
          <span className="text-[22px] pr-4"><BiLogoGoogle/></span>
            Continue with coogle
          </button>
          <div>
            Do not you have an account?<Link className="text-[#0070f4]" to={"/signup"}> Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
