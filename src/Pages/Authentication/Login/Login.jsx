import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../assets/images/logo.png"

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onsubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full my-10">
            <div className="relative px-4 py-10 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold font-raleway underline">LOGIN</h1>
                    </div>

                    <form onSubmit={handleSubmit(onsubmit)}>
                        {/* input fields */}
                        <div className="mt-5">
                            {/* email input */}
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="text-sm font-semibold text-gray-400">Email</span>
                                    </div>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email" placeholder="Enter your email" className="input w-full border rounded-lg px-3 py-2 mt-1 mb-1 text-sm bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500" />
                                    {errors?.email && <span className="text-vv-red animate-pulse">This field is required</span>}
                                </label>
                            </div>


                            {/* password input */}
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="text-sm font-semibold text-gray-400">Password</span>
                                    </div>
                                    <input
                                        {...register("password", { required: true })}
                                        type="password" placeholder="Enter your password" className="input w-full border rounded-lg px-3 py-2 mt-1 mb-1 text-sm bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500" />
                                    {errors?.email && <span className="text-vv-red animate-pulse">This field is required</span>}
                                </label>
                            </div>
                        </div>

                        {/* forgot password link */}
                        <div className="text-right mb-4">
                            <a href="#" className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer">Forgot Password?</a>
                        </div>

                        {/* login button */}
                        <button
                            type="submit"
                            className="btn bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-base font-semibold focus:ring-2 ">
                            Log in
                        </button>
                    </form>


                    {/* Social sign in buttons */}
                    <div className="flex justify-center items-center mt-5">
                        <div>
                            {/* Google Sign up */}
                            <button
                                className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            >
                                <FcGoogle className="text-2xl" />
                                <span className="ml-8">Sign in with Google</span>
                            </button>

                            {/* Facebook sign up */}
                            <button
                                className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4"
                            >
                                <FaFacebook className="text-2xl text-blue-600" />
                                <span className="ml-8">Sign in with Facebook</span>
                            </button>
                        </div>
                    </div>

                    {/* Sign Page Link */}
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <a
                            href="#"
                            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                        >or sign up</a>
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;