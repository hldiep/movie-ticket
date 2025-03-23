import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
const initialMovies = [
    { id: 1, name: "Furiosa: Câu Chuyện Từ Max Điên", year: 2024, genres: "Hành động, Gay cấn, Khoa học - Viễn tưởng", schedule: "17-05-2024", status: "Công khai", createdAt: "13-04-2024" },
    { id: 2, name: "Lật Mặt 7: Một Điều Ước", year: 2024, genres: "Hài, Gia đình, Tình cảm", schedule: "26-04-2024", status: "Công khai", createdAt: "13-04-2024" },
    { id: 3, name: "Mickey 17", year: 2025, genres: "Chính kịch, Phiêu lưu, Khoa học - Viễn tưởng", schedule: "28-02-2025", status: "Công khai", createdAt: "13-04-2024" },
    { id: 4, name: "Godzilla x Kong: Đế Chế Mới", year: 2024, genres: "Hành động, Khoa học - Viễn tưởng", schedule: "29-03-2024", status: "Công khai", createdAt: "12-03-2024" },
    { id: 5, name: "Kung Fu Panda 4", year: 2024, genres: "Hoạt hình, Hành động", schedule: "08-03-2024", status: "Công khai", createdAt: "01-03-2024" },
    { id: 6, name: "Deadpool & Wolverine", year: 2024, genres: "Hành động, Hài", schedule: "26-07-2024", status: "Sắp chiếu", createdAt: "20-02-2024" },
    { id: 7, name: "Inside Out 2", year: 2024, genres: "Hoạt hình, Gia đình", schedule: "14-06-2024", status: "Sắp chiếu", createdAt: "01-04-2024" },
    { id: 8, name: "The Marvels", year: 2023, genres: "Hành động, Khoa học - Viễn tưởng", schedule: "10-11-2023", status: "Ngừng chiếu", createdAt: "10-10-2023" },
    { id: 9, name: "Avatar: Dòng Chảy Của Nước", year: 2022, genres: "Phiêu lưu, Khoa học - Viễn tưởng", schedule: "16-12-2022", status: "Ngừng chiếu", createdAt: "10-12-2022" },
    { id: 10, name: "Fast & Furious 10", year: 2023, genres: "Hành động", schedule: "19-05-2023", status: "Ngừng chiếu", createdAt: "01-05-2023" },
    { id: 11, name: "John Wick 4", year: 2023, genres: "Hành động", schedule: "24-03-2023", status: "Ngừng chiếu", createdAt: "15-03-2023" },
];
const ListMovie = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState(initialMovies);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;
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

    const totalPages = Math.ceil(movies.length / moviesPerPage);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    return (
        <div className='min-h-screen bg-main text-white'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Quản lý phim</h1>
                            <NavLink to="/them-phim"
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                                Thêm phim
                            </NavLink>
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
                                <tr className="bg-gray-800 text-left text-white">
                                    <th className="p-2 border border-gray-700">Tên phim</th>
                                    <th className="p-2 border border-gray-700 cursor-pointer" onClick={() => sortMovies('year')}>
                                        Năm phát hành {sortConfig.key === 'year' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                    </th>
                                    <th className="p-2 border border-gray-700">Thể loại</th>
                                    <th className="p-2 border border-gray-700 cursor-pointer" onClick={() => sortMovies('schedule')}>
                                        Lịch chiếu {sortConfig.key === 'schedule' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                    </th>
                                    <th className="p-2 border border-gray-700">Trạng thái</th>
                                    <th className="p-2 border border-gray-700">Ngày tạo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentMovies.map((movie) => (
                                    <tr key={movie.id} className="border border-gray-700">
                                        <td onClick={() => navigate('/chi-tiet-phim')}
                                            className="p-2 border border-gray-700">{movie.name}</td>
                                        <td className="p-2 border border-gray-700">{movie.year}</td>
                                        <td className="p-2 border border-gray-700">{movie.genres}</td>
                                        <td className="text-red-600 p-2 border border-gray-700">{movie.schedule}</td>
                                        <td className="text-green-600 p-2 border border-gray-700">{movie.status}</td>
                                        <td>{movie.createdAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-center mt-3 items-center">
                            <button
                                className="border p-1 px-3 rounded-md mx-1"
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                &lt;
                            </button>
                            <span className="mx-3">{currentPage} / {totalPages}</span>
                            <button
                                className="border p-1 px-3 rounded-md mx-1"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListMovie