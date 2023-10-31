
const Footer = () => {
  return (
    <div className="bg-[#2E343F]">
      <div className="container mx-auto px-10 text-white mt-20">
        <div className="py-10 flex max-[768px]:block">
          <div className="w-1/2">
            <h2 className="text-4xl max-w-md">
              Connect with us for everything business
            </h2>
            <p className="text-sm text-[#] max-w-md py-5 leading-6">
              Stay up-to-date with the latest news, products, and also
              promotions by following us on social media or subscribing to our
              newsletter.
            </p>
            <ul className="flex gap-3">
              <li>Fb</li>
              <li>In</li>
              <li>Tw</li>
              <li>Ln</li>
            </ul>
          </div>
          <div className=" flex h-12 w-[360px] border border-[#5F6D7E] max-[768px]:mt-8 max-[768px]:w-fit">
            <div className="flex">
              <label className="flex items-center justify-center pl-2 w-16 bg-[#2E343F] max-[768px]:w-10">
                label
              </label>
              <input
                type="text"
                className="bg-[#2E343F] pl-2 text-base font-semibold outline-0 max-[768px]:pl-1 max-[768px]:w-[200px]"
              ></input>
              <input
                type="button"
                value="Submit"
                className="text-white bg-[#2E343F] p-2 pr-4 cursor-pointer max-[768px]:pr-2"
              ></input>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="py-10 flex space-x-[] justify-between max-[768px]:block">
          <p className="text-sm">
            © [Current Year] [Your Company Name]. All Rights Reserved.
          </p>
          <ul className="flex gap-8 text-sm pl-10 max-[768px]:py-6 max-[768px]:px-0">
            <li>Privacy</li>
            <li>Terms&Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
