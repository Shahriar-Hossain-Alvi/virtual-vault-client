/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import bannerImage from "../../../assets/images/banner/page-1-banner.jpg"
import bannerImage2 from "../../../assets/images/banner/home-2-banner-2.jpg"
import bannerImage3 from "../../../assets/images/banner/ms-surface-pro.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"
import Ripples from "react-ripples"
import { MdLocalShipping } from "react-icons/md";
import { HiLifebuoy } from "react-icons/hi2";
import { FaRegMoneyBillAlt } from "react-icons/fa";



const Banner = () => {
    //settings for react slick carousal
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
    };


    return (
        <div className="mb-14">
            {/* carousal */}
            <div className="slider-container">
                <Slider {...settings}>
                    {/* banner 1 */}
                    <div className="relative h-[450px] md:h-[580px]">
                        <div className="absolute w-full z-30 h-[450px] md:h-[580px]">
                            <img className="w-full h-[450px] md:h-[580px]" src={bannerImage} alt="banner image" />
                        </div>

                        <div className="absolute top-0 h-[450px] md:h-[580px] w-full z-40 flex items-center bg-[#00000067]">
                            <div className="ml-5 md:ml-24 lg:ml-44 w-full md:max-w-xl">
                                <h1 className="mb-3 text-5xl md:text-7xl font-bold text-vv-red">2024</h1>
                                <h1 className="mb-5 text-3xl md:text-5xl text-white font-light uppercase">Trendy Design (Men)</h1>
                                <p className="mb-5 text-[#f1f1f1]">
                                    Discover the pinnacle of fashion with our 2020 Trendy Design collection! Each piece is meticulously crafted to bring you the latest styles and timeless elegance. Whether you're looking to make a statement or simply elevate your everyday look, our collection offers the perfect blend of comfort, quality, and sophistication. Explore now and redefine your wardrobe with trend-setting designs that stand out from the crowd.
                                </p>
                                <Ripples>
                                    <button className="btn uppercase rounded-sm bg-vv-red border-vv-red hover:border-[#f7dbda] hover:bg-transparent transition-all ease-in-out duration-500 text-[#f7dbda]">View More</button>
                                </Ripples>
                            </div>
                        </div>
                    </div>

                    {/* banner 2 */}
                    <div className="relative h-[450px] md:h-[580px]">
                        <div className="absolute w-full z-30 h-[450px] md:h-[580px]">
                            <img className="w-full h-[450px] md:h-[580px]" src={bannerImage2} alt="banner image" />
                        </div>

                        <div className="absolute top-0 h-[450px] md:h-[580px] w-full z-40 flex items-center bg-[#00000067]">
                            <div className="ml-5 md:ml-24 lg:ml-44 w-full md:max-w-xl">
                                <h1 className="mb-3 text-5xl md:text-7xl font-bold text-vv-red">2024</h1>
                                <h1 className="mb-5 text-3xl md:text-5xl text-white font-light uppercase">Trendy Design (Women)</h1>
                                <p className="mb-5 text-[#f1f1f1]">
                                    Discover the pinnacle of fashion with our 2020 Trendy Design collection! Each piece is meticulously crafted to bring you the latest styles and timeless elegance. Whether you're looking to make a statement or simply elevate your everyday look, our collection offers the perfect blend of comfort, quality, and sophistication. Explore now and redefine your wardrobe with trend-setting designs that stand out from the crowd.
                                </p>
                                <Ripples>
                                    <button className="btn uppercase rounded-sm bg-vv-red border-vv-red hover:border-[#f7dbda] hover:bg-transparent transition-all ease-in-out duration-500 text-[#f7dbda]">View More</button>
                                </Ripples>
                            </div>
                        </div>
                    </div>


                    {/* banner 3 */}
                    <div className="relative h-[450px] md:h-[580px]">
                        <div className="absolute w-full z-30 h-[450px] md:h-[580px]">
                            <img className="w-full h-[450px] md:h-[580px]" src={bannerImage3} alt="banner image" />
                        </div>

                        <div className="absolute top-0 h-[450px] md:h-[580px] w-full z-40 flex items-center bg-[#00000067]">
                            <div className="ml-5 md:ml-24 lg:ml-44 w-full md:max-w-xl">
                                <h1 className="mb-3 text-5xl md:text-7xl font-bold text-vv-red">2024</h1>
                                <h1 className="mb-5 text-3xl md:text-5xl text-white font-light uppercase">Trendy Gadgets</h1>
                                <p className="mb-5 text-[#f1f1f1]">
                                    Discover the pinnacle of fashion with our 2020 Trendy Design collection! Each piece is meticulously crafted to bring you the latest styles and timeless elegance. Whether you're looking to make a statement or simply elevate your everyday look, our collection offers the perfect blend of comfort, quality, and sophistication. Explore now and redefine your wardrobe with trend-setting designs that stand out from the crowd.
                                </p>
                                <Ripples>
                                    <button className="btn uppercase rounded-sm bg-vv-red border-vv-red hover:border-[#f7dbda] hover:bg-transparent transition-all ease-in-out duration-500 text-[#f7dbda]">View More</button>
                                </Ripples>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>


            {/* about */}
            <div className="text-vv-dark-gray grid md:grid-cols-3 text-center bg-[#f1f1f1] -mt-2">
                <div className="px-6 py-8 group">
                    <div className="flex justify-center mb-7 gap-3">
                        <MdLocalShipping className="text-3xl group-hover:text-vv-red transition-all ease-linear duration-300" />
                        <h2 className="text-2xl group-hover:text-vv-red transition-all ease-linear duration-300">Free Shipping</h2>
                    </div>

                    <p>Get your favorites with ease! We offer free shipping for buying from verified sellers, so you can enjoy seamless shopping and hassle-free delivery.</p>
                </div>

                <div className="border-y md:border-x px-6 py-8 group">
                    <div className="flex justify-center mb-7 gap-3">
                        <HiLifebuoy className="text-3xl group-hover:text-vv-red transition-all ease-linear duration-300" />
                        <h2 className="text-2xl group-hover:text-vv-red transition-all ease-linear duration-300">24/7 Support</h2>
                    </div>

                    <p>With our 24/7 support, you can count on expert assistance whenever you need it. We're committed to being there for you, around the clock</p>
                </div>

                <div className="px-6 py-8 group">
                    <div className="flex justify-center mb-7 gap-3">
                        <FaRegMoneyBillAlt className="text-3xl group-hover:text-vv-red transition-all ease-linear duration-300" />
                        <h2 className="text-2xl group-hover:text-vv-red transition-all ease-linear duration-300">Cashback</h2>
                    </div>

                    <p>Unlock amazing savings with our exclusive cashback offers! Shop your favorite products and get a portion of your money back on every purchase. It's our way of saying thank you for being a valued customer!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;