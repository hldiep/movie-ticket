import React, { useState } from 'react'
import SeatMatrix from './SeatMatrix';
import { useNavigate } from 'react-router-dom';

const AddTheater = () => {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [theater, setTheater] = useState({
        name: "",
        address: "",
        description: "",
        createdAt: new Date().toISOString().split("T")[0],
    });

    const [showSeatMatrix, setShowSeatMatrix] = useState(false);

    const handleChange = (e) => {
        setTheater({ ...theater, [e.target.name]: e.target.value });
    }

    const handleSaveTheater = () => {
        if (!theater.name || !theater.address || !theater.description) {
            alert("Vui lòng nhập đầy đủ thông tin rạp chiếu!");
            return;
        }
        if (rooms.length === 0) {
            alert("Vui lòng thêm ít nhất 1 phòng chiếu!");
            return;
        }

        const dataToSave = {
            ...theater,
            rooms: rooms,
        };

        console.log("Dữ liệu rạp chiếu cần lưu:", dataToSave);
        alert("Đã lưu rạp chiếu thành công!");

        // Sau này có API thì gọi axios.post("/api/theaters", dataToSave)

        // Reset form nếu cần
        setTheater({
            name: "",
            address: "",
            description: "",
            createdAt: new Date().toISOString().split("T")[0],
        });
        setRooms([]);
    }

    return (
        <div className='min-h-screen bg-main'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className='ml-6 mb-4'>
                        <button onClick={() => navigate("/quan-ly-rap")} className='border border-blue-700 p-1 px-2 text-white rounded-lg hover:bg-blue-700'>Quay lại</button>
                    </div>
                    <div className="p-6 font-sans text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Thêm rạp chiếu</h1>
                        </div>
                        <form className="grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <label className="block text-sm font-semibold mb-2">* Tên rạp chiếu</label>
                                <input type="text" name="name" value={theater.name} onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Địa chỉ rạp</label>
                                <input type="text" name="address" value={theater.address} onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Địa chỉ map</label>
                                <textarea name="description" value={theater.description} onChange={handleChange} className="w-full h-24 focus:outline-blue-500 text-black p-1 rounded-md"></textarea>
                            </div>
                            <div className="mt-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421742.84767122753!2d106.30172548130687!3d10.866440928006462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edfe2a3180b%3A0x3986871d90d9086b!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbg!5e0!3m2!1svi!2s!4v1742461586467!5m2!1svi!2s"
                                    className="w-full h-64 border-0 rounded shadow"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </form>
                    </div>

                    {/* Phòng chiếu */}
                    <div className='p-2'>
                        <div className='flex justify-between items-center text-center mb-4'>
                            <h2 className="text-xl font-semibold mb-4 text-white">Danh sách phòng chiếu</h2>
                            <button
                                onClick={() => setShowSeatMatrix(true)}
                                className="py-2 border border-blue-700 px-2 rounded-md text-white hover:text-blue-500">
                                Thêm phòng chiếu
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="text-white w-full border-collapse border border-gray-700">
                                <thead>
                                    <tr className="bg-gray-800 text-left">
                                        <th className="p-2 border border-gray-700">Tên phòng</th>
                                        <th className="p-2 border border-gray-700">Ngày tạo</th>
                                        <th className='p-2 border border-gray-700'>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map((room, index) => (
                                        <tr key={index} className="border border-gray-700">
                                            <td className="p-2 border border-gray-700">{room.name}</td>
                                            <td className="p-2 border border-gray-700">{room.createdAt}</td>
                                            <td className="p-2 border border-gray-700">
                                                <button
                                                    onClick={() => alert(`Sơ đồ ghế: ${JSON.stringify(room.seats)}`)}
                                                    className="py-2 underline text-white hover:text-blue-500">
                                                    Xem sơ đồ ghế
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>

                    {/* Nút lưu toàn bộ rạp */}
                    <div className='flex justify-center mt-6'>
                        <button
                            onClick={handleSaveTheater}
                            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md'>
                            Lưu rạp chiếu
                        </button>
                    </div>
                </div>

                {/* Popup thêm phòng chiếu */}
                {showSeatMatrix && (
                    <SeatMatrix
                        onClose={() => setShowSeatMatrix(false)}
                        onSaveRoom={(newRoom) => {
                            setRooms([...rooms, newRoom]);
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default AddTheater
