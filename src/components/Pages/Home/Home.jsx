import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>

            <button className="btn btn-lg bg-[#ff0400] text-white">clock</button>
        </div>
    );
};

export default Home;