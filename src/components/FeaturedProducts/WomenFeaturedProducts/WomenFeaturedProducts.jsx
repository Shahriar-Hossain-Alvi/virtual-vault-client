import { useQuery } from "@tanstack/react-query";
import MangnifyingGlassLoading from "../../../utility/MangnifyingGlassLoading/MangnifyingGlassLoading";
import FeaturedProductCard from "../../../utility/FeaturedProductCard/FeaturedProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const WomenFeaturedProducts = () => {

     // TODO: use axiosPublic when internet available and create a api route for Men Products

    const axiosPublic = useAxiosPublic();

    const { data: WomenFeaturedProducts = [], isLoading, isError, error } = useQuery({
        queryKey: ['WomenFeaturedProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/womenFeaturedProducts');
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
                WomenFeaturedProducts?.map(singleFeaturedProducts =>
                    <FeaturedProductCard
                    key={singleFeaturedProducts._id}
                    singleFeaturedProducts={singleFeaturedProducts}
                ></FeaturedProductCard>)
            }
        </div>
    );
};

export default WomenFeaturedProducts;