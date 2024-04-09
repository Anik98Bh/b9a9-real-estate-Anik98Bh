

const Banner = () => {

    return (

        <div>
            <div className=" card-body rounded-xl mb-4 bg-[#D5F5E3] text-center">
                <h1 className="text-4xl font-semibold text-center"><span className="font-extrabold text-5xl">Welcome</span> to the best tools, <br /> support, and data in land realty.</h1>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QH9GMbM/Agricultural-land.jpg" className="w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/dBk2Qhq/ranches.jpg"
                        className="w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/fqxdzFg/Farm.jpg"
                        className="w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9WpdCtQ/Vineyard.jpg"
                        className=" w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;