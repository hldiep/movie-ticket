import React from 'react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
const Home = () => {
    const revenueData = [
        { month: "10/2024", revenue: 0 },
        { month: "11/2024", revenue: 0 },
        { month: "12/2024", revenue: 0 },
        { month: "1/2025", revenue: 90000000 },
        { month: "2/2025", revenue: 1826000 },
    ];
    const topArticles = [
        { name: "Nụ hôn bạc tỷ", views: 25 },
        { name: "Bộ tứ báo thủ", views: 15 },
        { name: "Đèn âm hồn", views: 10 },
        { name: "Nhóc quậy", views: 10 },
        { name: "Quỷ nhập tràng", views: 10 },
    ];

    const moviesRevenue = [
        { name: "Bộ tứ báo thủ", ticketsSold: 5, revenue: "1,066,000" },
        { name: "Cái Giá Của Hạnh Phúc", ticketsSold: 4, revenue: "760,000" },
    ]
    const cinemasRevenue = [
        { name: "Cinestar Hai Bà Trưng", ticketsSold: 9, revenue: "1,826,000" },
    ];
    return (
        <div className='min-h-screen bg-main'>
            <div className='container'>
                <div className='ml-[220px]  flex-1 p-10'>
                    <div>
                        <div className='grid grid-cols-4 gap-4 mb-6'>
                            <div className="p-4 border-l-4 border-yellow-600 bg-white rounded-md shadow">
                                <p className="text-sm">Doanh thu trong ngày (14/2/2025)</p>
                                <p className="text-xl font-bold">760,000</p>
                            </div>
                            <div className="p-4 border-l-4 border-red-600 bg-white rounded-md shadow">
                                <p className="text-sm">Khách hàng mới (T2/2025)</p>
                                <p className="text-xl font-bold">5</p>
                            </div>
                            <div className="p-4 border-l-4 border-green-600 bg-white rounded-md shadow">
                                <p className="text-sm">Tổng vé bán ra (T2/2025)</p>
                                <p className="text-xl font-bold">9</p>
                            </div>
                            <div className="p-4 border-l-4 border-orange-600 bg-white rounded-md shadow">
                                <p className="text-sm">Tổng doanh thu (T2/2025)</p>
                                <p className="text-xl font-bold">1,826,000</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='bg-white p-4 rounded-lg shadow'>
                                <h3 className='text-lg font-semibold mb-4'>Top bài viết được xem nhiều nhất</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={topArticles}>
                                        <XAxis dataKey="name" hide />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="views" fill="#3b82f6" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='bg-white p-4 rounded-lg shadow'>
                                <h3 className='text-lg font-semibold mb-4'>Doanh thu theo tháng</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={revenueData} margin={{ left: 50, right: 20 }}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="revenue" stroke="#ef4444" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold">Doanh thu theo phim</h3>
                                    <a href="#" className="text-blue-500 text-sm">Xem tất cả</a>
                                </div>
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left p-2">Tên phim</th>
                                            <th className="p-2">Tổng vé bán ra</th>
                                            <th className="p-2">Tổng doanh thu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {moviesRevenue.map((movie, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="p-2 text-blue-600 cursor-pointer">{movie.name}</td>
                                                <td className="p-2 text-center">{movie.ticketsSold}</td>
                                                <td className="p-2 text-center">{movie.revenue}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Pagination */}
                                <div className="flex justify-center mt-3 items-center">
                                    <button className="border p-1 px-3 rounded-md">&lt;</button>
                                    <span className="mx-3">1</span>
                                    <button className="border p-1 px-3 rounded-md">&gt;</button>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold">Doanh thu theo rạp</h3>
                                    <a href="#" className="text-blue-500 text-sm">Xem tất cả</a>
                                </div>
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left p-2">Rạp chiếu</th>
                                            <th className="p-2">Tổng vé bán ra</th>
                                            <th className="p-2">Tổng doanh thu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cinemasRevenue.map((cinema, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="p-2 text-blue-600 cursor-pointer">{cinema.name}</td>
                                                <td className="p-2 text-center">{cinema.ticketsSold}</td>
                                                <td className="p-2 text-center">{cinema.revenue}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Pagination */}
                                <div className="flex justify-center mt-3 items-center">
                                    <button className="border p-1 px-3 rounded-md">&lt;</button>
                                    <span className="mx-3">1</span>
                                    <button className="border p-1 px-3 rounded-md">&gt;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home