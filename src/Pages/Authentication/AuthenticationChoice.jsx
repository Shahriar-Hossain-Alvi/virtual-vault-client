import { useState } from "react";
import logo from "../../assets/images/logo.png"
import Ripples from 'react-ripples'




const AuthenticationChoice = () => {
    const [selectedOption, setSelectedOption] = useState('');

    console.log(selectedOption);


    return (
        <div className={`flex flex-col justify-center ${selectedOption === "" && "min-h-screen items-center"} 
        
        ${selectedOption !== "" && "mt-5 lg:mt-10 transform -translate-y-1/3 min-h-screen transition-all ease-linear duration-500 items-center"} mx-2`}>
            <div className="flex justify-center gap-1 mb-5">
                <img className="w-10" src={logo} alt="logo" />
                <h2 className="font-bold text-3xl">Virtual Vault</h2>
            </div>

            <h3 className="text-xl font-medium font-raleway text-center">Welcome to <span className="font-bold">Virtual Vault</span>. Please Login or Signup to continue</h3>

            <div className="mt-4 flex flex-col md:flex-row gap-1">
                <Ripples color="#ff0400" className="rounded-3xl">
                    <button onClick={() => setSelectedOption("login")} className="btn bg-vv-red text-white btn-wide rounded-3xl hover:bg-transparent hover:text-vv-black hover:border-vv-black">Login</button>
                </Ripples>

                <Ripples color="#ff0400" className="rounded-3xl">
                    <button onClick={() => setSelectedOption("register")} className="btn bg-vv-red text-white btn-wide rounded-3xl hover:bg-transparent hover:text-vv-black hover:border-vv-black">Register</button>
                </Ripples>
            </div>
        </div>
    );
};

export default AuthenticationChoice;