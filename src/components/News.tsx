const News = () => {
  return (
    <div className="container mx-auto px-10 py-20">
      <div className="text-center mb-12">
        <h3 className="text-4xl text-[#2E343F]">News and Analysis</h3>
      </div>
      <div className="grid grid-cols-4 gap-4 text-[#2E343F] max-[1027px]:grid-cols-2 max-[1027px]:gap-8 max-[600px]:grid-cols-1 max-[600px]:w-full">
        <div className="max-[600px]:mx-auto">
          <img src="/images/news-items-pic.png"></img>
          <p className="py-4">
            Sales soar: Record-breaking
            <br/>
            profits for company
          </p>
          <a className="text-sm">Learn more</a>
        </div>
        <div className="max-[600px]:mx-auto">
          <img src="/images/news-items-pic-1.png"></img>
          <p className="py-4">
            Sales soar: Record-breaking
            <br />
            profits for company
          </p>
          <a className="text-sm">Learn more</a>
        </div>
        <div className="max-[600px]:mx-auto">
          <img src="/images/news-items-pic-2.png"></img>
          <p className="py-4">
            Sales soar: Record-breaking
            <br />
            profits for company
          </p>
          <a className="text-sm">Leran more</a>
        </div>
        <div className="max-[600px]:mx-auto">
          <img src="/images/news-items-pic-3.png"></img>
          <p className="py-4">
            Sales soar: Record-breaking
            <br />
            profits for company
          </p>
          <a className="text-sm">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default News;
