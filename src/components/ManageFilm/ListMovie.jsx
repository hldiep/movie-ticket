import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';

const ListMovie = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [filterStatus, setFilterStatus] = useState('Công khai');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    useEffect(() => {
        fetchMoviesByStatus(filterStatus);
    });
    const fetchMoviesByStatus = async (status) => {
        try {
            const response = await axios.get(`http://localhost:8080/film/all`);
            setMovies(response.data.data || []);
        } catch (error) {
            console.error('Lỗi tải danh sách film: ', error);
        }
    }
    const sortMovies = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        const sortedMovies = [...movies].sort((a, b) => {
            if (key === "schedule") {
                const dateA = new Date(a.schedule.split("-").reverse().join("-"));
                const dateB = new Date(b.schedule.split("-").reverse().join("-"));
                return direction === 'asc' ? dateA - dateB : dateB - dateA;
            } else {
                return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
            }
        });
        setMovies(sortedMovies);
        setSortConfig({ key, direction });
    }

    return (
        <ClippedDrawer>
            <div className="sticky top-16 z-10 bg-white border-b shadow-sm">
                <div className="flex items-center text-sm text-gray-600 space-x-2 px-4 pt-2">
                    <button onClick={() => navigate('/admin')} className="hover:underline text-blue-600">
                        Dashboard
                    </button>
                    <span>/</span>
                    <span className="text-gray-700 font-medium">Quản lý phim</span>
                </div>
                <div className='flex justify-between text-center items-center'>
                    <h2 className="text-xl font-semibold p-4">Quản lý phim</h2>
                    <div className='space-x-4'>
                        <NavLink to="/quan-ly-phim/them-phim"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                            Thêm phim
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="p-6 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-[calc(100vh-80px)]">
                <div className='container'>

                    <div className="mb-4 text-right">
                        <select className="border text-black px-4 py-2 rounded outline-none"
                            value={filterStatus}
                            onChange={(e) => {
                                setFilterStatus(e.target.value);
                                setCurrentPage(1); // reset về trang 1 khi lọc
                            }}>
                            <option value="Công khai">Đang chiếu</option>
                            <option value="Sắp chiếu">Sắp chiếu</option>
                            <option value="Ngừng chiếu">Ngừng chiếu</option>
                        </select>
                    </div>
                    {/* <div className="mb-4 text-right">
                            <select className="bg-gray-700 text-white px-4 py-2 rounded outline-none justify-end items-end" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="">Lọc theo trạng thái</option>
                                <option value="Đang chiếu">Đang chiếu</option>
                                <option value="Sắp chiếu">Sắp chiếu</option>
                                <option value="Ngừng chiếu">Ngừng chiếu</option>
                            </select>
                        </div> */}
                    <table className="w-full bg-white shadow-md rounded text-black">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-left">
                                <th className="p-2">Tên phim</th>
                                <th className="p-2" onClick={() => sortMovies('year')}>
                                    Năm phát hành {sortConfig.key === 'year' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                </th>
                                <th className="p-2">Thể loại</th>
                                <th className="p-2" onClick={() => sortMovies('schedule')}>
                                    Lịch chiếu {sortConfig.key === 'schedule' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                </th>
                                <th className="p-2">Trạng thái</th>
                                <th className="p-2 ">Ngày tạo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie) => (
                                <tr key={movie.id} className="border-t hover:bg-gray-50">
                                    <td onClick={() => navigate('/quan-ly-phim/chi-tiet-phim')}
                                        className="p-2">{movie.name}</td>
                                    <td className="p-2 ">{movie.year}</td>
                                    <td className="p-2">{movie.genres}</td>
                                    <td className="text-red-600 p-20">{movie.schedule}</td>
                                    <td className="text-green-600 p-2 ">{movie.status}</td>
                                    <td>{movie.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ClippedDrawer>
    )
}

export default ListMovie