import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { Link } from "react-router-dom";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);
    return (
        <div>
            <div className="min-h-screen pt-20 bg-main flex justify-center">
                <div className="container w-1/2">
                    <main className="p-8 text-center">
                        <div className='mt-20 text-white'>
                            <span className='uppercase font-bold text-3xl'>Đăng ký</span>
                            <div className='border border-yellow-600 mt-8 p-6 rounded-lg shadow-lg'>
                                <p className='flex items-center'>
                                    <span>Họ và tên</span>
                                </p>
                                <input
                                    type="text"
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />
                                <p className='flex items-center mt-4'>
                                    <span>Ngày sinh</span>
                                </p>
                                <input
                                    type="date"
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />
                                <p className='flex items-center mt-4'>
                                    <span>Số điện thoại</span>
                                </p>
                                <input
                                    type="text"
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />
                                <p className='flex items-center mt-4'>
                                    <span>Tên đăng nhập</span>
                                </p>
                                <input
                                    type="text"
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />
                                <p className='flex items-center mt-4'>
                                    <span>Email</span>
                                </p>
                                <input
                                    type="text"
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />
                                <p className='flex items-center mt-4'>
                                    <span>CCCD/CMND</span>
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
                                <p className='flex items-center mt-4'>
                                    <span>Xác thực mật khẩu</span>
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
                                <div className="mt-6 text-left">
                                    <button
                                        type="button"
                                        onClick={() => setShowPolicy(!showPolicy)}
                                        className="text-yellow-600 italic"
                                    >
                                        Xem chính sách bảo mật
                                    </button>
                                </div>
                                {showPolicy && (
                                    <div className="mt-4 p-4 border border-gray-400 bg-gray-100 text-black text-sm rounded">
                                        <h3 className="font-bold">Chính sách bảo mật</h3>
                                        <p>
                                            Lưu ý: Khách hàng dưới 16 tuổi chỉ được đồng ý sau khi có sự đồng ý của cha mẹ
                                            hoặc người giám hộ hợp pháp...
                                        </p>
                                    </div>
                                )}
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="agreePolicy"
                                        checked={agreePolicy}
                                        onChange={() => setAgreePolicy(!agreePolicy)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="agreePolicy" className="text-sm">
                                        Tôi đồng ý với <span className="font-bold">chính sách bảo mật</span>
                                    </label>
                                </div>
                                <button className={`mt-6 w-full font-bold py-2 rounded-lg ${agreePolicy ? "border border-yellow-600 hover:bg-yellow-600" : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                    disabled={!agreePolicy}>
                                    ĐĂNG KÝ
                                </button>
                                <div className='flex justify-center mt-4'>
                                    <p className='italic'>Bạn đã có tài khoản? Đăng nhập </p>
                                    <Link to="/login" className='ml-1 italic text-yellow-600'>tại đây</Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Register