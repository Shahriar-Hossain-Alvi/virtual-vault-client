import PropTypes from 'prop-types';
import "./SectionTitle.css"

const SectionTitle = ({ title }) => {
    return (
        <div id='section-title' className='mb-16 flex justify-center'>
            <h2 className='text-3xl text-vv-black font-medium pb-2'>{title}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
}

export default SectionTitle;