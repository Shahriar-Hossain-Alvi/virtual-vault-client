import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;