import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../utility/SectionTitle/SectionTitle';
import AllFeaturedProducts from '../../components/FeaturedProducts/AllFeaturedProducts/AllFeaturedProducts';


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
                        <AllFeaturedProducts></AllFeaturedProducts>
                    </TabPanel>
                    <TabPanel>
                        <h2>Men</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Women</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Children</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Accessories</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default FeaturedProducts;