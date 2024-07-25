/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import MangnifyingGlassLoading from "../../utility/MangnifyingGlassLoading/MangnifyingGlassLoading";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import Countdown from "react-countdown";
import renderer from "../../utility/CountDownTimer/CountDownRerender";

const NewProductAnnounce = () => {

    const axiosPublic = useAxiosPublic();

    const { data: upcomingProduct = [], isLoading, isError, error } = useQuery({
        queryKey: ['upcomingProduct'],
        queryFn: async () => {
            const res = await axiosPublic.get('/upcomingProduct');
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
        <section className="bg-[#f1f1f1] py-11">
            <div className="grid md:grid-cols-2 gap-7 container mx-auto items-center">
                <div>
                    <img src={upcomingProduct?.productImage} alt={`Image of ${upcomingProduct?.productImage}`} />
                </div>


                <div>
                    <h3 className="font-medium text-vv-black text-xl uppercase mb-2">New Product</h3>

                    <h1 className="text-vv-red uppercase font-medium text-4xl mb-8">{upcomingProduct?.productName}</h1>

                    <p className="font-open-sans text-sm text-vv-dark-gray mb-7">{upcomingProduct?.productDescription}</p>


                    <div>
                        <h3 className="text-vv-black font-medium text-xl uppercase">Launch in</h3>


                        <div className="mt-5">
                            <Countdown date={Date.now() + 31536000000} renderer={renderer} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewProductAnnounce;