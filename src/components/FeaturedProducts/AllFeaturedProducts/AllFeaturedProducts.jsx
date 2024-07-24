import { useQuery } from "@tanstack/react-query";
import MangnifyingGlassLoading from "../../../utility/MangnifyingGlassLoading/MangnifyingGlassLoading";
import PropTypes from 'prop-types';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FeaturedProductCard from "../../../utility/FeaturedProductCard/FeaturedProductCard";

const AllFeaturedProducts = () => {

    const axiosPublic = useAxiosPublic();

    const { data: allFeaturedProducts = [], isLoading, isError, error } = useQuery({
        queryKey: ['AllFeaturedProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allFeaturedProducts');
            return res.data;
        },
    });


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
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {
                allFeaturedProducts?.map(singleFeaturedProducts => <FeaturedProductCard 
                    key={singleFeaturedProducts._id} 
                    singleFeaturedProducts={singleFeaturedProducts}
                    ></FeaturedProductCard>)
            }
        </div>
    );
};

AllFeaturedProducts.propTypes = {
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    error: PropTypes.object,
}

export default AllFeaturedProducts;