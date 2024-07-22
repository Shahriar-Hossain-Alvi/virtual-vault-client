import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../utility/SectionTitle/SectionTitle';
import AllFeaturedProducts from '../../components/FeaturedProducts/AllFeaturedProducts/AllFeaturedProducts';
import MenFeaturedProducts from '../../components/FeaturedProducts/MenFeaturedProducts/MenFeaturedProducts';
import WomenFeaturedProducts from '../../components/FeaturedProducts/WomenFeaturedProducts/WomenFeaturedProducts';
import ChildrenFeaturedProducts from '../../components/FeaturedProducts/ChildrenFeaturedProducts/ChildrenFeaturedProducts';
import AccessoriesFeaturedProducts from '../../components/FeaturedProducts/AccessoriesFeaturedProducts/AccessoriesFeaturedProducts';


const FeaturedProducts = () => {


    return (
        <div className="mb-24">
            <SectionTitle title={'Featured Products'}></SectionTitle>

            <div>
                <Tabs>
                    <TabList className='max-w-96 mx-auto flex text-vv-dark-gray font-medium cursor-pointer mb-8'>

                        <Tab className="border-l border-vv-dark-gray px-5" selectedClassName="text-vv-red">All</Tab>

                        <Tab className="border-x border-vv-dark-gray px-5" selectedClassName="text-vv-red">Men</Tab>

                        <Tab className="px-5" selectedClassName="text-vv-red">Women</Tab>

                        <Tab className="border-x border-vv-dark-gray px-5" selectedClassName="text-vv-red">Children</Tab>

                        <Tab className="border-r border-vv-dark-gray px-5" selectedClassName="text-vv-red">Accessories</Tab>
                    </TabList>


                    <TabPanel>
                        <AllFeaturedProducts />
                    </TabPanel>
                    <TabPanel>
                        <MenFeaturedProducts />
                    </TabPanel>
                    <TabPanel>
                        <WomenFeaturedProducts />
                    </TabPanel>
                    <TabPanel>
                        <ChildrenFeaturedProducts />
                    </TabPanel>
                    <TabPanel>
                        <AccessoriesFeaturedProducts />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default FeaturedProducts;