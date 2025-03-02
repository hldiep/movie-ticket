import React from 'react'
import { useState } from "react";
import { Table, Button } from "@/components/ui";
const AdminDashboard = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Avengers: Endgame", showtime: "18:00", ticketsSold: 120 },
        { id: 2, title: "Inception", showtime: "20:30", ticketsSold: 90 },
    ]);

    const handleDelete = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Quản lý Hệ thống Bán Vé Xem Phim</h1>
            <Table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Tên Phim</th>
                        <th className="border border-gray-300 p-2">Suất Chiếu</th>
                        <th className="border border-gray-300 p-2">Vé Đã Bán</th>
                        <th className="border border-gray-300 p-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">{movie.id}</td>
                            <td className="border border-gray-300 p-2">{movie.title}</td>
                            <td className="border border-gray-300 p-2">{movie.showtime}</td>
                            <td className="border border-gray-300 p-2">{movie.ticketsSold}</td>
                            <td className="border border-gray-300 p-2">
                                <Button className="bg-red-500 text-white px-3 py-1" onClick={() => handleDelete(movie.id)}>Xóa</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button className="mt-4 bg-blue-500 text-white px-4 py-2">Thêm Phim Mới</Button>
        </div>
    );
}

export default AdminDashboard