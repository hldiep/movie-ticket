import React from 'react'
import { useNavigate } from 'react-router-dom';
import InfoTicket from './InfoTicket';

const Payment = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="min-h-screen pt-20 bg-main flex justify-center">
                <div className="container">
                    <div className='text-white mt-20 p-3 mb-20'>
                        <div className='mt-4 text-center'>
                            <span className='uppercase font-bold text-3xl '>TRANG THANH TOÁN</span><br />
                        </div>
                        <div className='flex justify-around space-x-4'>
                            <div className='mt-8 p-6 rounded-lg shadow-lg w-1/2'>
                                <span className='uppercase font-bold text-2xl'>THÔNG TIN KHÁCH HÀNG</span>
                                <p className='flex items-center mt-4'>
                                    <span>Họ tên</span>
                                </p>
                                <input
                                    type="text"
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
                                    <span>Email</span>
                                </p>
                                <input
                                    type="text"
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />
                                <div className="mt-6">
                                    <input type="checkbox" className="mr-2" /> Đảm bảo mua vé đúng số tuổi quy định
                                    <br />
                                    <input type="checkbox" className="mr-2" /> Đồng ý với <a href="#" className="text-yellow-400">điều khoản của chúng tôi</a>
                                </div>
                                <button onClick={() => navigate("/continue-payment")}
                                    className='w-1/3 mt-6 border border-yellow-600 font-bold py-2 rounded-lg hover:bg-yellow-600'>
                                    TIẾP TỤC
                                </button>
                            </div>
                            <div className='border border-yellow-600 bg-blue-950 mt-8 p-6 rounded-lg shadow-lg w-1/2'>
                                <InfoTicket />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment