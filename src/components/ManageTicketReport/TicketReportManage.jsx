import React, { useState } from 'react'
const initialReportData = [
    { date: "2025-03-10", ticketType: "2D", sold: 120, revenue: 2400000 },
    { date: "2025-03-10", ticketType: "3D", sold: 80, revenue: 3200000 },
    { date: "2025-03-11", ticketType: "2D", sold: 150, revenue: 3000000 },
    { date: "2025-03-11", ticketType: "IMAX", sold: 50, revenue: 5000000 },
];
const TicketReportManage = () => {
    const [reportData, setReportData] = useState(initialReportData);
    return (
        <div className='min-h-screen bg-main text-white'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans ">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Báo cáo số lượng vé</h1>
                        </div>
                        <table className='w-full border-collapse border border-gray-700'>
                            <thead>
                                <tr className='bg-gray-800 text-left'>
                                    <th className='p-2 border border-gray-700'>Ngày</th>
                                    <th className='p-2 border border-gray-700'>Loại vé</th>
                                    <th className='p-2 border border-gray-700'>Số lượng đã bán</th>
                                    <th className='p-2 border border-gray-700'>Doanh thu (VNĐ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportData.map((item, index) => (
                                    <tr key={index} className='border border-gray-700'>
                                        <td className='p-2 border border-gray-700'>{item.date}</td>
                                        <td className='p-2 border border-gray-700'>{item.ticketType}</td>
                                        <td className='p-2 border border-gray-700'>{item.sold}</td>
                                        <td className='p-2 border border-gray-700'>{item.revenue.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketReportManage