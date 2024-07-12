import { MagnifyingGlass } from 'react-loader-spinner';

const MangnifyingGlassLoading = () => {
    return (
        <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper mx-auto"
            glassColor="#c0efff"
            color="#e15b64"
        />
    );
};

export default MangnifyingGlassLoading;