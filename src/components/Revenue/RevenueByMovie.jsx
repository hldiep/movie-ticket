import React, { useState } from 'react'
import { useTable } from 'react-table';
import { Legend, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const RevenueByMovie = () => {
    const [data, setData] = useState([
        { name: "SUGA Tour", tickets: 32, revenue: 8677300 },
        { name: "Kung Fu Panda 4", tickets: 11, revenue: 4282000 },
        { name: "Quỷ Cái", tickets: 26, revenue: 7791000 },
        { name: "Quật Mộ Tử Thù", tickets: 8, revenue: 2671000 },
        { name: "Monkey Man", tickets: 23, revenue: 8118000 },
    ]);
    const columns = [
        { Header: "Tên phim", accessor: "name" },
        { Header: "Tổng vé bán ra", accessor: "tickets" },
        { Header: "Tổng doanh thu", accessor: "revenue" },
    ];
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div>
            <div className='min-h-screen bg-main'>
                <div className='container'>
                    <div className='ml-[220px] flex-1 p-10'>
                        <div className="p-6 font-sans text-white">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold">Doanh thu theo phim</h1>
                                <button className='bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600'>
                                    Xuất báo cáo
                                </button>
                            </div>
                            <div className='flex space-x-4 mb-4'>
                                <input type="date" className='border p-2 rounded text-black outline-none' />
                                <input type="date" className='border p-2 rounded text-black outline-none' />
                                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>Load dữ liệu</button>
                            </div>
                            <div className='grid grid-cols-2 gap-4 text-black'>
                                <div className='bg-gray-100 p-4 rounded-lg'>
                                    <h3 className='text-lg font-semibold mb-2'>Số vé bán ra theo phim</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={data} margin={{ left: 20, right: 20 }}>
                                            <XAxis dataKey="name"></XAxis>
                                            <YAxis></YAxis>
                                            <Tooltip></Tooltip>
                                            <Legend></Legend>
                                            <Bar dataKey="tickets" fill="#60A5FA" name="Số vé bán ra"></Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className='bg-gray-100 p-4 rounded-lg'>
                                    <h3 className='text-lg font-semibold mb-2'>Doanh thu theo phim</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={data} margin={{ left: 50, right: 20 }}>
                                            <XAxis dataKey="name"></XAxis>
                                            <YAxis></YAxis>
                                            <Tooltip></Tooltip>
                                            <Legend></Legend>
                                            <Bar dataKey="revenue" fill="#F87171" name="Doanh thu"></Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                            <div className="mt-6">
                                <table {...getTableProps()} className="w-full border-collapse border border-gray-700">
                                    <thead>
                                        {headerGroups.map(headerGroup => (
                                            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-600">
                                                {headerGroup.headers.map(column => (
                                                    <th {...column.getHeaderProps()} className="border border-gray-700 p-2 text-left">{column.render("Header")}</th>
                                                ))}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody {...getTableBodyProps()}>
                                        {rows.map(row => {
                                            prepareRow(row);
                                            return (
                                                <tr {...row.getRowProps()} className="hover:bg-gray-800">
                                                    {row.cells.map(cell => (
                                                        <td {...cell.getCellProps()} className="border border-gray-700 p-2">{cell.render("Cell")}</td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueByMovie