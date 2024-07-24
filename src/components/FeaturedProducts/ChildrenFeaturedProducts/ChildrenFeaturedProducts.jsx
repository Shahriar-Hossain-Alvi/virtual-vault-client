import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MangnifyingGlassLoading from '../../../utility/MangnifyingGlassLoading/MangnifyingGlassLoading';
import FeaturedProductCard from '../../../utility/FeaturedProductCard/FeaturedProductCard';

const ChildrenFeaturedProducts = () => {

    // TODO: use axiosPublic when internet available and create a api route for Men Products

    // const axiosPublic = useAxiosPublic();

    const { data: ChildrenFeaturedProducts = [], isLoading, isError, error } = useQuery({
        queryKey: ['ChildrenFeaturedProducts'],
        queryFn: async () => {
            // const res = await axiosPublic.get(');
            const res = await axios.get('./fakeData.json');
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

    // TODO: do the conditioning in the server side
    return (
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {
                ChildrenFeaturedProducts?.map(singleFeaturedProducts =>
                    singleFeaturedProducts.category === 'children' &&
                    <FeaturedProductCard
                    key={singleFeaturedProducts._id}
                    singleFeaturedProducts={singleFeaturedProducts}
                ></FeaturedProductCard>)
            }
        </div>
    );
};

export default ChildrenFeaturedProducts;