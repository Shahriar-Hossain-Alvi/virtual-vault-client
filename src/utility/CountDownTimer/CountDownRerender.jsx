// Custom renderer for the countdown
const renderer = ({ days, hours, minutes, seconds, completed }) => {

    if (completed) {
        return <span>The product is now launched!</span>;
    } else {
        return (
            <div className="space-x-8">
                <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray hover:bg-transparent hover:border-vv-dark-gray no-animation">
                    <span>{days}</span>
                    <span>Days</span>
                </button>

                <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray hover:bg-transparent hover:border-vv-dark-gray no-animation">
                    <span>{hours}</span>
                    <span>Hours</span>
                </button>


                <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray hover:bg-transparent hover:border-vv-dark-gray no-animation">
                    <span>{minutes}</span>
                    <span>Mins</span>
                </button>

                <button className="btn border border-vv-dark-gray rounded-none btn-lg w-20 font-medium text-xl text-vv-dark-gray hover:bg-transparent hover:border-vv-dark-gray no-animation">
                    <span>{seconds}</span>
                    <span>Sec</span>
                </button>
            </div>
        );
    }
};

export default renderer;