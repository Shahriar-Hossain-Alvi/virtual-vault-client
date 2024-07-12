import MangnifyingGlassLoading from "../MangnifyingGlassLoading/MangnifyingGlassLoading";
import PropTypes from 'prop-types';

const AllFeaturedProducts = ({ isLoading, error, isError }) => {

    if (isLoading) return <MangnifyingGlassLoading></MangnifyingGlassLoading>

    if (isError) {
        console.error(error.message);
        return <div className="text-center">
            <p className="font-semibold text-xl ">
                <span className="text-vv-red font-bold">Error:</span> {error.message}
            </p>
        </div>
    }


    return (
        <div>
            <h2>All featured products</h2>
        </div>
    );
};

AllFeaturedProducts.propTypes = {
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    error: PropTypes.object,
}

export default AllFeaturedProducts;