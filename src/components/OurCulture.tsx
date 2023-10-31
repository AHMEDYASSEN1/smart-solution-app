
const OurCulture = () => {
  return (
    <div className="container mx-auto px-8 py-20">
      <div className="flex px-4 items-center">
        <div className="w-1/2 max-[768px]:w-full max-[768px]:text-center">
          <h3 className="text-4xl text-[#2E343F]">Innovating Culture</h3>
          <p className="text-sm text-[#2E343F] max-w-sm py-8 max-[768px]:max-w-full">
            We need to build a culture of innovation to stay ahead of the curve.
            By fostering a culture of creativity and experimentation, we can
            encourage our teams to think outside the box and come up with new
            and exciting ideas. We should reward risk-taking and celebrate
            failures as learning opportunities that can help us improve and
            innovate.
          </p>
          <button className="py-2 px-4 bg-[#2E343F] text-white rounded-full">
            View more
          </button>
        </div>
        <div className="w-1/2 pl-2 lg:h-[37rem] md:h-[25rem] max-[768px]:hidden">
          <img className=" w-full h-full" src="../../public/images/generic-content-pic.png"></img>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
