import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { setUser } from '../../Redux/authSlice'
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!formData.email || !formData.password) {
            setError('All fields are required');
            return;
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, formData)
            console.log(data)
            if (data.success === true) {
                setMessage('Signup successful!.');
                setFormData({ name: '', email: '', password: '' });
                dispatch(setUser(data))
                navigate('/')

            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex flex-row-reverse justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div>
                            <h1 className='text-2xl font-bold text-center text-blue-700'>Webtoun</h1>
                        </div>
                        <div className="mt-6 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="mb-6 border-b text-center">
                                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        login with e-mail
                                    </div>
                                </div>
                                {message && <p className="text-blue-700 text-lg font-medium text-center">{message}</p>}
                                {error && <p className="text-red-600 text-lg font-medium text-center">{error}</p>}
                                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">

                                    <input
                                        className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <Link to={'/forget-password'} className='text-blue-700 text-md font-bold pt-10'>Forget Password</Link>
                                    <button
                                        type="submit"
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy={7} r={4} />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">Login</span>
                                    </button>
                                </form>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by Webtoun&nbsp;
                                    <a href="#" className="border-b border-gray-500 border-dotted">Terms of Service</a>
                                    &nbsp;and its&nbsp;
                                    <a href="#" className="border-b border-gray-500 border-dotted">Privacy Policy</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")' }}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage;
