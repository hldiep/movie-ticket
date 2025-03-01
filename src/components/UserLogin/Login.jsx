import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen pt-20 bg-main flex justify-center">
            <div className="container w-1/2">
                <main className="p-8 text-center">
                    <div className='mt-20 text-white'>
                        <span className='uppercase font-bold text-3xl'>đăng nhập</span>
                        <div className='border border-yellow-600 mt-8 p-6 rounded-lg shadow-lg'>
                            <p className='flex items-center'>
                                <span>Tài khoản, email hoặc số điện thoại</span>
                            </p>
                            <input
                                type="text"
                                className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                            />
                            <p className='flex items-center mt-4'>
                                <span>Mật khẩu</span>
                            </p>
                            <div className='relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />
                                <button
                                    type="button"
                                    className="text-black items-center absolute inset-y-0 right-3 mt-4 flex"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className='text-right mt-4 italic'>
                                <Link to="/forgetPwd" className="text-yellow-600">Quên mật khẩu?</Link>
                            </div>
                            <button className='mt-6 w-full border border-yellow-600 font-bold py-2 rounded-lg hover:bg-yellow-600'>
                                ĐĂNG NHẬP
                            </button>
                            <div className='flex justify-center mt-4'>
                                <p className='italic'>Bạn chưa có tài khoản? Đăng ký </p>
                                <Link to="/register" className='ml-1 italic text-yellow-600'>tại đây</Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Login