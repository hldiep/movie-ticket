import React from 'react'
import NavAccount from '../UserLogin/NavAccount'

const PurchaseHistory = () => {
    return (
        <div>
            <div className='container flex pt-32'>
                <NavAccount />
                <div className='container'>
                    <div className='ml-[220px] p-10'>
                        <h2 className='text-2xl font-bold'>LỊCH SỬ MUA HÀNG</h2>
                        <div>
                            <table className="w-full mt-6 border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 p-2">Mã đơn</th>
                                        <th className="border border-gray-300 p-2">Hoạt động</th>
                                        <th className="border border-gray-300 p-2">Chi nhánh</th>
                                        <th className="border border-gray-300 p-2">Ngày</th>
                                        <th className="border border-gray-300 p-2">Tổng cộng</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseHistory