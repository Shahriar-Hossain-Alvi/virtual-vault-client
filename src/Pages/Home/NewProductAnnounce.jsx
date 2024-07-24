/* eslint-disable react/no-unescaped-entities */
import newProductImage from "../../assets/images/ms-surface-pro.png"

const NewProductAnnounce = () => {
    return (
        <section className="bg-[#f1f1f1] py-11">
            <div className="grid md:grid-cols-2 gap-7 container mx-auto items-center">
                <div>
                    <img src={newProductImage} alt={`Image of ${newProductImage}`} />
                </div>


                <div>
                    <h3 className="font-medium text-vv-black text-xl uppercase mb-2">New Product</h3>

                    <h1 className="text-vv-red uppercase font-medium text-4xl mb-8">Microsoft Surface Pro</h1>

                    <p className="font-open-sans text-sm text-vv-dark-gray mb-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hasived not only five centuries, with the release of Letraset sheets.</p>


                    <div>
                        <h3 className="text-vv-black font-medium text-xl uppercase">Launch in</h3>


                        <div className="space-x-8 mt-5">
                            <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray">364 Days</button>
                            
                            <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray">23 Hours</button>
                            
                            <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray">58 Mins</button>
                            
                            <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray">53 Sec</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewProductAnnounce;