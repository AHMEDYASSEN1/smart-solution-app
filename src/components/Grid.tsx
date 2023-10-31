import React from "react";

const Grid = () => {

// add the geid system
// edit the lenk of Learn more.

  return (
    <div className="container mx-auto px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl text-[#2E343F]">What We Do</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pt-20">
        <div className=" bg-[#f9f9f9] p-4">
          <h3 className="text-xl text-[#2E343F]">Synergy</h3>
          <p className="text-sm text-[#5F6D7E] leading-6 py-2">
            The interaction of multiple elements in a system to produce an
            effect greater than the sum of their individual effects.
          </p>
          <a className="text-sm underline cursor-pointer">Learn more</a>
        </div>
        <div className=" bg-[#f9f9f9] p-4">
          <h3 className="text-xl text-[#2E343F]">Paradigm shift</h3>
          <p className="text-sm text-[#5F6D7E] leading-6 py-2">
            A fundamental change in approach or underlying assumption that leads to a new way of thinking or operating.
          </p>
          <a className="text-sm underline cursor-pointer">Learn more</a>
        </div>
        <div className=" bg-[#f9f9f9] p-4">
          <h3 className="text-xl text-[#2E343F]">Disruptive innovation</h3>
          <p className="text-sm text-[#5F6D7E] leading-6 py-2">
            A new technology, product, or service that disrupt the existing market and create a new one.
          </p>
          <a className="text-sm underline cursor-pointer">Learn more</a>
        </div>
        <div className=" bg-[#f9f9f9] p-4">
          <h3 className="text-xl text-[#2E343F]">Scalability</h3>
          <p className="text-sm text-[#5F6D7E] leading-6 py-2">
            The ability of business or system to handle an increasing amount of work or growth without sacrificing performance.
          </p>
          <a className="text-sm underline cursor-pointer">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Grid;
