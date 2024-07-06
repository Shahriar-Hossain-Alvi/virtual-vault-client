/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import bannerImage from "../../../assets/images/banner/page-1-banner.jpg"
import bannerImage2 from "../../../assets/images/banner/home-2-banner-2.jpg"
import bannerImage3 from "../../../assets/images/banner/ms-surface-pro.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"



const Banner = () => {
    //settings for react slick carousal
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/* banner 1 */}
                <div className="relative h-[580px]">
                    <div className="absolute w-full z-30 h-[580px]">
                        <img className="w-full h-[580px]" src={bannerImage} alt="banner image" />
                    </div>

                    <div className="absolute top-0 h-[580px] w-full z-40 flex items-center bg-[#00000067]">
                        <div className="ml-5 md:ml-24 lg:ml-44 w-full md:max-w-xl">
                            <h1 className="mb-3 text-5xl md:text-7xl font-bold text-vv-red">2024</h1>
                            <h1 className="mb-5 text-3xl md:text-5xl text-white font-extralight">Trendy Design (Men)</h1>
                            <p className="mb-5 text-[#f1f1f1]">
                                Discover the pinnacle of fashion with our 2020 Trendy Design collection! Each piece is meticulously crafted to bring you the latest styles and timeless elegance. Whether you're looking to make a statement or simply elevate your everyday look, our collection offers the perfect blend of comfort, quality, and sophistication. Explore now and redefine your wardrobe with trend-setting designs that stand out from the crowd.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                {/* banner 2 */}
                <div className="relative h-[580px]">
                    <div className="absolute w-full z-30 h-[580px]">
                        <img className="w-full h-[580px]" src={bannerImage2} alt="banner image" />
                    </div>

                    <div className="absolute top-0 h-[580px] w-full z-40 flex items-center bg-[#00000067]">
                        <div className="ml-5 md:ml-24 lg:ml-44 w-full md:max-w-xl">
                            <h1 className="mb-3 text-5xl md:text-7xl font-bold text-vv-red">2024</h1>
                            <h1 className="mb-5 text-3xl md:text-5xl text-white font-extralight">Trendy Design (Women)</h1>
                            <p className="mb-5 text-[#f1f1f1]">
                                Discover the pinnacle of fashion with our 2020 Trendy Design collection! Each piece is meticulously crafted to bring you the latest styles and timeless elegance. Whether you're looking to make a statement or simply elevate your everyday look, our collection offers the perfect blend of comfort, quality, and sophistication. Explore now and redefine your wardrobe with trend-setting designs that stand out from the crowd.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>


                {/* banner 3 */}
                <div className="relative h-[580px]">
                    <div className="absolute w-full z-30 h-[580px]">
                        <img className="w-full h-[580px]" src={bannerImage3} alt="banner image" />
                    </div>

                    <div className="absolute top-0 h-[580px] w-full z-40 flex items-center bg-[#00000067]">
                        <div className="ml-5 md:ml-24 lg:ml-44 w-full md:max-w-xl">
                            <h1 className="mb-3 text-5xl md:text-7xl font-bold text-vv-red">2024</h1>
                            <h1 className="mb-5 text-3xl md:text-5xl text-white font-extralight">Trendy Gadgets</h1>
                            <p className="mb-5 text-[#f1f1f1]">
                                Discover the pinnacle of fashion with our 2020 Trendy Design collection! Each piece is meticulously crafted to bring you the latest styles and timeless elegance. Whether you're looking to make a statement or simply elevate your everyday look, our collection offers the perfect blend of comfort, quality, and sophistication. Explore now and redefine your wardrobe with trend-setting designs that stand out from the crowd.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;