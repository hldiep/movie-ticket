import React, { useState } from 'react'
import SeatMatrix from './SeatMatrix';
import { useNavigate } from 'react-router-dom';
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';

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
                    <button
                        onClick={() => navigate('/quan-ly-rap')}
                        className="hover:underline text-blue-600"
                    >
                        Quản lý rạp
                    </button>
                    <span>/</span>
                    <span className="text-gray-700 font-medium">Thêm rạp</span>
                </div>
                <h2 className="text-xl font-semibold p-4">Thêm rạp</h2>
            </div>
            <div className='min-h-screen bg-gray-50'>
                <div className='container'>
                    <div className="p-6 font-sans text-black">

                        <form className="grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <label className="block text-sm font-semibold mb-2">* Tên rạp chiếu</label>
                                <input type="text" name="name" value={theater.name} onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Địa chỉ rạp</label>
                                <input type="text" name="address" value={theater.address} onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Địa chỉ map</label>
                                <textarea name="description" value={theater.description} onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"></textarea>
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

                    <div className='p-4'>
                        <div className='flex justify-between items-center text-center mb-4'>
                            <h2 className="text-xl font-semibold mb-4">Danh sách phòng chiếu</h2>
                            <button
                                onClick={() => navigate('/quan-ly-rap/them-rap/them-phong')}
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
                                Thêm phòng chiếu
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full bg-white shadow-md rounded text-black">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700 text-left">
                                        <th className="p-2 border">Tên phòng</th>
                                        <th className="p-2 border">Ngày tạo</th>
                                        <th className='p-2 border'>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map((room, index) => (
                                        <tr key={index} className="border-t hover:bg-gray-50">
                                            <td className="p-2 border ">{room.name}</td>
                                            <td className="p-2 border ">{room.createdAt}</td>
                                            <td className="p-2 border ">
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
                    <div className='flex justify-center mt-6'>
                        <button
                            onClick={handleSaveTheater}
                            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md'>
                            Thêm rạp
                        </button>
                    </div>
                </div>

            </div >
        </ClippedDrawer >
    )
}

export default AddTheater
