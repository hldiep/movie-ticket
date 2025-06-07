import React, { useState } from 'react'
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';
import { useNavigate } from 'react-router-dom';
const initialReportData = [
    { date: "2025-03-10", ticketType: "2D", sold: 120, revenue: 2400000 },
    { date: "2025-03-10", ticketType: "3D", sold: 80, revenue: 3200000 },
    { date: "2025-03-11", ticketType: "2D", sold: 150, revenue: 3000000 },
    { date: "2025-03-11", ticketType: "IMAX", sold: 50, revenue: 5000000 },
];
const TicketReportManage = () => {
    const navigate = useNavigate();
    const [reportData, setReportData] = useState(initialReportData);
    return (
        <ClippedDrawer>
            <div className="sticky top-16 z-10 bg-white border-b shadow-sm">
                <div className="flex items-center text-sm text-gray-600 space-x-2 px-4 pt-2">
                    <button
                        onClick={() => navigate('/admin')}
                        className="hover:underline text-blue-600"
                    >
                        Dashboard
                    </button>
                    <span>/</span>
                    <span className="text-gray-700 font-medium">Báo cáo số lượng vé</span>
                </div>
                <h2 className="text-xl font-semibold p-4">Báo cáo số lượng vé</h2>

            </div>
            <div className="p-6 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-[calc(100vh-80px)]">
                <div className='container'>
                    <table className="w-full bg-white shadow-md rounded text-black">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-left">
                                <th className='p-2'>Ngày</th>
                                <th className='p-2'>Loại vé</th>
                                <th className='p-2'>Số lượng đã bán</th>
                                <th className='p-2'>Doanh thu (VNĐ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((item, index) => (
                                <tr key={index} className='border-t hover:bg-gray-50'>
                                    <td className='p-2'>{item.date}</td>
                                    <td className='p-2'>{item.ticketType}</td>
                                    <td className='p-2'>{item.sold}</td>
                                    <td className='p-2'>{item.revenue.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ClippedDrawer>

    )
}

export default TicketReportManage