import React, { useState } from 'react'

const Showtime = () => {
    const [showForm, setShowForm] = useState(false);
    const [editShowtime, setEditShowtime] = useState(null);
    const [showTimes, setShowTimes] = useState([
        { id: 1, movie: "Nhà Gia Tiên", timeStart: "2025-03-12", timeEnd: "2025-04-12" },
        { id: 2, movie: "Bố Già", timeStart: "2025-03-12", timeEnd: "2025-04-12" },
        { id: 3, movie: "Mắt Biếc", timeStart: "2025-03-12", timeEnd: "2025-04-12" },
        { id: 4, movie: "Gái Già Lắm Chiêu", timeStart: "2025-03-12", timeEnd: "2025-04-12" },
        { id: 5, movie: "Em và Trịnh", timeStart: "2025-03-12", timeEnd: "2025-04-12" },
        { id: 6, movie: "Thanh Sói", timeStart: "2025-03-12", timeEnd: "2025-04-12" }
    ]);
    const [newShowtime, setNewShowtime] = useState({ movie: '', timeStart: '', timeEnd: '', status: 'Sắp chiếu' });
    const [successMessage, setSuccessMessage] = useState('');
    const getStatus = (timeStart, timeEnd) => {
        const today = new Date().toISOString().split('T')[0];
        if (today < timeStart) return "Sắp chiếu";
        if (today >= timeStart && today <= timeEnd) return "Đang chiếu";
        return "Ngưng chiếu";
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editShowtime) {
            setShowTimes(showTimes.map(show => show.id === editShowtime.id ? { ...editShowtime } : show));
        } else {
            setShowTimes([...showTimes, { ...newShowtime, id: showTimes.length + 1 }]);
        }
        setShowForm(false);
        setSuccessMessage(editShowtime ? 'Lịch chiếu đã được cập nhật!' : 'Lịch chiếu đã được tạo thành công!');
        setTimeout(() => setSuccessMessage(''), 3000);
        setEditShowtime(null);
    };

    return (
        <div className='min-h-screen bg-main text-white'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Quản lý lịch chiếu</h1>
                            <button onClick={() => setShowForm(true)}
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition-transform duration-300 transform hover:scale-105">
                                Tạo lịch chiếu
                            </button>
                        </div>
                        {successMessage && (
                            <div className='fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg'>
                                {successMessage}
                            </div>
                        )}
                        <table className="w-full border-collapse border border-gray-700">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="p-2 border border-gray-700">Phim chiếu</th>
                                    <th className="p-2 border border-gray-700">Thời gian chiếu</th>
                                    <th className="p-2 border border-gray-700">Phân loại</th>
                                    <th className="p-2 border border-gray-700"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {showTimes.map((movie) => (
                                    <tr key={movie.id} className="border border-gray-700">
                                        <td className="p-2 border border-gray-700">{movie.movie}</td>
                                        <td className="p-2 border border-gray-700">{movie.timeStart} - {movie.timeEnd}</td>
                                        <td className="p-2 border border-gray-700">{getStatus(movie.timeStart, movie.timeEnd)}</td>
                                        <td className="p-2 border border-gray-700 text-center">
                                            <button className="px-4 py-2 underline text-white hover:text-blue-500"
                                                onClick={() => { setEditShowtime(movie); setShowForm(true); }}>
                                                Sửa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {showForm && (
                    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
                        <div className='bg-gray-800 p-8 rounded-lg w-1/3 text-black'>
                            <h2 className='text-2xl font-bold mb-4 text-white'>{editShowtime ? 'Chỉnh sửa lịch chiếu' : 'Tạo lịch chiếu'}</h2>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder='Tên phim' className='block mb-3 p-2 w-full outline-none' required
                                    value={editShowtime ? editShowtime.movie : newShowtime.movie}
                                    onChange={(e) => editShowtime ? setEditShowtime({ ...editShowtime, movie: e.target.value }) : setNewShowtime({ ...newShowtime, movie: e.target.value })} />
                                <input type='date' className='block mb-3 p-2 w-full outline-none' required
                                    value={editShowtime ? editShowtime.timeStart : newShowtime.timeStart}
                                    onChange={(e) => editShowtime ? setEditShowtime({ ...editShowtime, timeStart: e.target.value }) : setNewShowtime({ ...newShowtime, timeStart: e.target.value })} />
                                <input type='date' className='block mb-3 p-2 w-full outline-none' required
                                    value={editShowtime ? editShowtime.timeEnd : newShowtime.timeEnd}
                                    onChange={(e) => editShowtime ? setEditShowtime({ ...editShowtime, timeEnd: e.target.value }) : setNewShowtime({ ...newShowtime, timeEnd: e.target.value })} />
                                <button type='submit' className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white mt-2 w-full'>Xác nhận</button>
                                <button type='button' onClick={() => setShowForm(false)} className='mt-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white w-full'>Hủy</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Showtime