import logo from "../../assets/images/logo.png"
import Ripples from 'react-ripples'




const AuthenticationChoice = () => {


    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="flex justify-center gap-1 mb-5">
                <img className="w-10" src={logo} alt="logo" />
                <h2 className="font-bold text-3xl">Virtual Vault</h2>
            </div>

            <h3 className="text-xl font-medium font-raleway text-center">Welcome to <span className="font-bold">Virtual Vault</span>. Please Login or Signup to continue</h3>

            <div className="mt-4 space-x-2">
                <Ripples color="#ff0400" className="rounded-3xl">
                    <button className="btn bg-vv-red text-white btn-wide rounded-3xl hover:bg-transparent hover:text-vv-black hover:border-vv-black">Login</button>
                </Ripples>

                <Ripples color="#ff0400" className="rounded-3xl">
                    <button className="btn bg-vv-red text-white btn-wide rounded-3xl hover:bg-transparent hover:text-vv-black hover:border-vv-black">Register</button>
                </Ripples>
            </div>
        </div>
    );
};

export default AuthenticationChoice;