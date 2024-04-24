import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const handleCheckboxChange = (gender) => {
        setInputs({
            ...inputs,
            gender,
        });
    };

    const { loading, signup } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    <span className="text-blue-500 ">
                        Sign Up to Unity Sphere
                    </span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="eg. John Doe"
                            className="w-full input input-bordered h-10"
                            value={inputs.fullName}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    fullName: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="eg. JohnDoe"
                            className="w-full input input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    username: e.target.value,
                                })
                            }
                            autoComplete="new-username"
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    password: e.target.value,
                                })
                            }
                            autoComplete="new-password"
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Confirm password"
                            className="w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    confirmPassword: e.target.value,
                                })
                            }
                            autoComplete="new-password"
                        />
                    </div>

                    <GenderCheckBox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={inputs.gender}
                    />

                    <Link
                        to={"/login"}
                        className="text-sm hover:underline hover:text-blue-600"
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            className="btn btn-block btn-sm mt-3 border border-slate-700"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
