import React from 'react'
import { FaCreditCard, FaMobileAlt, FaGlobe } from "react-icons/fa";
import InfoTicket from './InfoTicket'
import { useNavigate } from 'react-router-dom';
const PaymentMethod = () => {
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
                                <span className='uppercase font-bold text-2xl'>THANH TOÁN</span>
                                <div className='mt-4 space-y-4'>
                                    <button className='w-full flex items-center justify-center border rounded-sm p-4 text-white text-center outline-none bg-gray-700 hover:bg-gray-600'>
                                        <FaMobileAlt className="mr-2" /> Thanh toán qua Momo
                                    </button>
                                    <button className='w-full flex items-center justify-center border rounded-sm p-4 text-white text-center outline-none bg-gray-700 hover:bg-gray-600'>
                                        <FaCreditCard className="mr-2" /> Thanh toán qua thẻ nội địa
                                    </button>
                                    <button className='w-full flex items-center justify-center border rounded-sm p-4 text-white text-center outline-none bg-gray-700 hover:bg-gray-600'>
                                        <FaGlobe className="mr-2" /> Thanh toán qua thẻ quốc tế
                                    </button>
                                </div>
                                <button onClick={() => navigate("/payment-success")}
                                    className='w-1/3 mt-4 border border-yellow-600 font-bold py-2 rounded-lg hover:bg-yellow-600'>
                                    THANH TOÁN
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

export default PaymentMethod