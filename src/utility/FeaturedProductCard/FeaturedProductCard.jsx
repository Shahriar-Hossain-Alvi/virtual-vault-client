import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import '@smastrom/react-rating/style.css'
import { FaBasketShopping, FaHeart, FaShuffle } from 'react-icons/fa6';

const FeaturedProductCard = ({ singleFeaturedProducts }) => {

    const { productName, productPrice, productRating, productImage } = singleFeaturedProducts;

    console.log(singleFeaturedProducts);

    return (
        <div className="group overflow-hidden">
            <div className="relative">
                <figure>
                    <img
                        className="h-80 w-full"
                        src={productImage}
                        alt="Shoes" />
                </figure>

                <div className="w-0 group-hover:w-20 h-full bg-black absolute right-0 top-0 opacity-70 transition-all ease-in-out duration-300 flex flex-col justify-center">

                    <ul className='hidden group-hover:flex flex-col items-center gap-7 list-none'>

                        <li className='w-12 h-12 rounded-full border border-white flex justify-center items-center btn bg-transparent hover:bg-vv-red hover:border-vv-red'>
                            <FaHeart className='text-white text-xl' />
                        </li>

                        <li className='w-12 h-12 rounded-full border border-white flex justify-center items-center btn bg-transparent hover:bg-vv-red hover:border-vv-red'>
                            <FaShuffle className='text-white text-xl' />
                        </li>

                        <li className='w-12 h-12 rounded-full border border-white flex justify-center items-center btn bg-transparent hover:bg-vv-red hover:border-vv-red'>
                            <FaBasketShopping className='text-white' />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="">
                <div className="flex justify-between">
                    <h2 className="">{productName}</h2>
                    <p>${productPrice}</p>
                </div>

                <div>
                    <div>
                        <Rating className='max-w-24 text-vv-red'
                            // style={{ maxWidth: 180,  border:0 }}
                            value={productRating}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

FeaturedProductCard.propTypes = {
    singleFeaturedProducts: PropTypes.object,
}

export default FeaturedProductCard;