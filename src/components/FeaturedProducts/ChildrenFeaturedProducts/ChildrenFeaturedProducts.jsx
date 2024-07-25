import { useQuery } from '@tanstack/react-query';
import MangnifyingGlassLoading from '../../../utility/MangnifyingGlassLoading/MangnifyingGlassLoading';
import FeaturedProductCard from '../../../utility/FeaturedProductCard/FeaturedProductCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const ChildrenFeaturedProducts = () => {

    const axiosPublic = useAxiosPublic();

    const { data: ChildrenFeaturedProducts = [], isLoading, isError, error } = useQuery({
        queryKey: ['ChildrenFeaturedProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/childrenFeaturedProducts');
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
                ChildrenFeaturedProducts?.map(singleFeaturedProducts =>
                    <FeaturedProductCard
                    key={singleFeaturedProducts._id}
                    singleFeaturedProducts={singleFeaturedProducts}
                ></FeaturedProductCard>)
            }
        </div>
    );
};

export default ChildrenFeaturedProducts;