import React, { useState } from "react";
import ClippedDrawer from "../Dashboard/DashboardLayoutBasic";
import { useNavigate } from "react-router-dom";

const initialCinemas = [
    { id: 1, name: "CGV Vincom" },
    { id: 2, name: "Lotte Mart" }
];

const initialShowTimes = {
    1: [
        { id: 1, movie: "Nhà Gia Tiên", room: "Phòng 1", timeStart: "7:00 AM", timeEnd: "9:00 AM", date: "2025-03-12", status: "Đang hoạt động" },
        { id: 2, movie: "Bố Già", room: "Phòng 2", timeStart: "9:30 AM", timeEnd: "11:30 AM", date: "2025-03-12", status: "Đang hoạt động" },
    ],
    2: [
        { id: 1, movie: "Mắt Biếc", room: "Phòng 1", timeStart: "8:00 AM", timeEnd: "10:00 AM", date: "2025-03-12", status: "Sắp chiếu" },
    ]
};

const Showtime = () => {
    const navigate = useNavigate();
    const [cinemas] = useState(initialCinemas);
    const [selectedCinema, setSelectedCinema] = useState(null);
    const [showTimes, setShowTimes] = useState(initialShowTimes);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);
    const [message, setMessage] = useState("");
    const [filterStatus, setFilterStatus] = useState("");

    const [showTimeData, setShowTimeData] = useState({
        movie: "", room: "", timeStart: "", timeEnd: "", date: "", status: ""
    });

    const handleCinemaSelect = (cinema) => {
        setSelectedCinema(cinema);
        setFilterStatus("");
        setShowForm(false);
        setEditing(null);
        setShowTimeData({ movie: "", room: "", timeStart: "", timeEnd: "", date: "", status: "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShowTimeData({ ...showTimeData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedCinema) return;

        const updatedShowTimes = { ...showTimes };
        if (!updatedShowTimes[selectedCinema.id]) updatedShowTimes[selectedCinema.id] = [];

        if (editing) {
            updatedShowTimes[selectedCinema.id] = updatedShowTimes[selectedCinema.id].map(item =>
                item.id === editing ? { ...showTimeData, id: editing } : item
            );
            setMessage("Cập nhật thông tin thành công!");
        } else {
            const newId = updatedShowTimes[selectedCinema.id].length > 0
                ? Math.max(...updatedShowTimes[selectedCinema.id].map(item => item.id)) + 1
                : 1;
            updatedShowTimes[selectedCinema.id].push({ ...showTimeData, id: newId });
            setMessage("Thêm thành công!");
        }

        setShowTimes(updatedShowTimes);
        setShowTimeData({ movie: "", room: "", timeStart: "", timeEnd: "", date: "", status: "" });
        setEditing(null);
        setShowForm(false);

        setTimeout(() => setMessage(""), 3000);
    };

    const handleEdit = (showtime) => {
        setShowTimeData(showtime);
        setEditing(showtime.id);
        setShowForm(true);
    };

    const currentShowtimes = selectedCinema ? (showTimes[selectedCinema.id] || []) : [];
    const filteredShowtimes = filterStatus
        ? currentShowtimes.filter(st => st.status === filterStatus)
        : currentShowtimes;

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
                    <span className="text-gray-700 font-medium">Quản lý suất chiếu</span>
                </div>
                <h2 className="text-xl font-semibold p-4">Quản lý suất chiếu</h2>

            </div>
            <div className="p-6 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-[calc(100vh-80px)]">
                <div className='container'>

                    {!selectedCinema ? (
                        <>
                            <h1 className="text-lg font-bold mb-6">Chọn rạp chiếu để quản lý</h1>
                            <div className="grid grid-cols-2 gap-6">
                                {cinemas.map(cinema => (
                                    <button key={cinema.id} onClick={() => handleCinemaSelect(cinema)}
                                        className="bg-gray-200 hover:bg-gray-300 p-6 rounded text-xl font-semibold">
                                        {cinema.name}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold">{selectedCinema.name}</h1>
                                <div className="flex items-center gap-4">
                                    <select
                                        className="bg-blue-500 text-white px-4 py-2 rounded outline-none"
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                    >
                                        <option value="">Lọc theo trạng thái</option>
                                        <option value="Đang hoạt động">Đang hoạt động</option>
                                        <option value="Sắp chiếu">Sắp chiếu</option>
                                        <option value="Đã chiếu">Đã chiếu</option>
                                    </select>
                                    <button onClick={() => {
                                        setShowForm(!showForm);
                                        setEditing(null);
                                        setShowTimeData({ movie: "", room: "", timeStart: "", timeEnd: "", date: "", status: "" });
                                    }} className="bg-green-600 px-4 py-2 rounded">
                                        {showForm ? "Đóng" : "Thêm lịch chiếu"}
                                    </button>
                                    <button onClick={() => setSelectedCinema(null)} className="bg-red-600 px-4 py-2 rounded">
                                        Quay lại chọn rạp
                                    </button>
                                </div>
                            </div>

                            {message && <div className="text-green-400 font-semibold mb-4">{message}</div>}

                            {showForm && (
                                <form onSubmit={handleSubmit} className="bg-gray-200 text-black p-4 rounded mb-6">
                                    <h2 className="text-lg font-semibold mb-2">{editing ? "Chỉnh sửa lịch chiếu" : "Nhập thông tin lịch chiếu"}</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" name="room" value={showTimeData.room} onChange={handleInputChange} placeholder="Tên phòng" className="p-2 border rounded border-blue-700 outline-none" required />
                                        <input type="text" name="movie" value={showTimeData.movie} onChange={handleInputChange} placeholder="Tên phim" className="p-2 border rounded border-blue-700 outline-none" required />
                                        <input type="date" name="date" value={showTimeData.date} onChange={handleInputChange} placeholder="Ngày chiếu" className="p-2 border rounded border-blue-700 outline-none" required />
                                        <input type="text" name="timeStart" value={showTimeData.timeStart} onChange={handleInputChange} placeholder="Thời gian bắt đầu" className="p-2 border rounded border-blue-700 outline-none" required />
                                        <input type="text" name="timeEnd" value={showTimeData.timeEnd} onChange={handleInputChange} placeholder="Thời gian kết thúc" className="p-2 border rounded border-blue-700 outline-none" required />
                                        <select name="status" value={showTimeData.status} onChange={handleInputChange} className="p-2 border rounded border-blue-700 outline-none" required>
                                            <option value="">Chọn trạng thái</option>
                                            <option value="Đang hoạt động">Đang hoạt động</option>
                                            <option value="Sắp chiếu">Sắp chiếu</option>
                                            <option value="Đã chiếu">Đã chiếu</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="mt-4 bg-blue-600 px-4 py-2 rounded text-white">
                                        {editing ? "Cập nhật" : "Thêm"}
                                    </button>
                                </form>
                            )}

                            <div className="space-y-3">
                                <table className="w-full bg-white shadow-md rounded text-black">
                                    <thead>
                                        <tr className="bg-gray-100 text-gray-700 text-left">
                                            <th className="p-2">Tên phòng</th>
                                            <th className="p-2">Tên phim</th>
                                            <th className="p-2">Thời gian chiếu</th>
                                            <th className="p-2">Trạng thái</th>
                                            <th className="p-2">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredShowtimes.map((showtime) => (
                                            <tr key={showtime.id} className="border-t hover:bg-gray-50">
                                                <td className="p-2">{showtime.room}</td>
                                                <td className="p-2">{showtime.movie}</td>
                                                <td className="p-2">{showtime.timeStart} - {showtime.timeEnd} - Ngày: {showtime.date}</td>
                                                <td className="p-2">{showtime.status}</td>
                                                <td className="p-2">
                                                    <div className="flex justify-center items-center gap-4">
                                                        <button onClick={() => handleEdit(showtime)} className="text-yellow-400">Sửa</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </ClippedDrawer>

    );
};

export default Showtime;
