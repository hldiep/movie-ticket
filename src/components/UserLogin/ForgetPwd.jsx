import React from 'react'

const ForgetPwd = () => {
    return (
        <div>
            <div className="min-h-screen pt-20 bg-main flex justify-center">
                <div className="container w-1/2">
                    <main className="p-8 text-center">
                        <div className='mt-20 text-white'>
                            <span className='uppercase font-bold text-3xl'>QUÊN MẬT KHẨU</span>
                            <div className='border border-yellow-600 mt-8 p-6 rounded-lg shadow-lg'>
                                <p className='flex items-center font-bold justify-center'>
                                    <span>Nhập email để tạo mật khẩu mới</span>
                                </p>
                                <input
                                    type="text"
                                    className="mt-4 w-full p-1 border rounded-md text-gray-900 outline-none"
                                />

                                <button className='mt-6 w-full border border-yellow-600 font-bold py-2 rounded-lg hover:bg-yellow-600'>
                                    GỬI MÃ XÁC MINH
                                </button>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ForgetPwd