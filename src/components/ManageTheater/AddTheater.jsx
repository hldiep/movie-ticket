import React, { useState } from 'react'

const AddTheater = () => {
    const [rooms, setRooms] = useState([]);
    const [newRoom, setNewRoom] = useState({
        name: "",
        seats: "",
        rows: "",
        columns: "",
        createdAt: new Date().toISOString().split("T")[0]
    })
    const handleChange = (e) => {
        setNewRoom({ ...newRoom, [e.target.name]: e.target.value });
    }
    const handleAddRoom = () => {
        if (!newRoom.name || !newRoom.seats || !newRoom.rows || !newRoom.columns) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        setRooms([...rooms, newRoom]);
        setNewRoom({
            name: "",
            seats: "",
            rows: "",
            columns: "",
            createdAt: new Date().toISOString().split("T")[0],
        });
    }
    return (
        <div className='min-h-screen bg-main'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Thêm rạp chiếu</h1>
                        </div>
                        <form onSubmit={""} className="grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <label className="block text-sm font-semibold mb-2">* Tên rạp chiếu</label>
                                <input type="text" name="name" className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Địa chỉ rạp</label>
                                <input type="text" name="add" className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Địa chỉ map</label>
                                <textarea name="description" className="w-full h-24 focus:outline-blue-500 text-black p-1 rounded-md"></textarea>
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
                    <div className='p-2'>
                        <h2 className="text-xl font-semibold mb-4 text-white">Danh sách phòng chiếu</h2>
                        <div className="overflow-x-auto">
                            <table className="text-white w-full border-collapse border border-gray-700">
                                <thead>
                                    <tr className="bg-gray-800 text-left">
                                        <th className="p-2 border border-gray-700">Tên phòng</th>
                                        <th className="p-2 border border-gray-700">Số ghế</th>
                                        <th className="p-2 border border-gray-700">Số hàng</th>
                                        <th className="p-2 border border-gray-700">Số cột</th>
                                        <th className="p-2 border border-gray-700">Ngày tạo</th>
                                        <th className='p-2 border border-gray-700'>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-700">
                                        <td className="p-2 border border-gray-700">
                                            <input
                                                type="text"
                                                name="name"
                                                value={newRoom.name}
                                                onChange={handleChange}
                                                className="bg-transparent w-full rounded outline-none"
                                                placeholder="Nhập tên phòng"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-700">
                                            <input
                                                type="number"
                                                name="seats"
                                                value={newRoom.seats}
                                                onChange={handleChange}
                                                className="bg-transparent w-full rounded outline-none"
                                                placeholder="Nhập số ghế"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-700">
                                            <input
                                                type="text"
                                                name="rows"
                                                value={newRoom.rows}
                                                onChange={handleChange}
                                                className="bg-transparent w-full rounded outline-none"
                                                placeholder="Nhập số hàng"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-700">
                                            <input
                                                type="number"
                                                name="columns"
                                                value={newRoom.columns}
                                                onChange={handleChange}
                                                className="bg-transparent w-full rounded outline-none"
                                                placeholder="Nhập số cột"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-700">
                                            <input
                                                type="date"
                                                name="createdAt"
                                                value={newRoom.createdAt}
                                                onChange={handleChange}
                                                className="bg-transparent w-full rounded outline-none"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-700">
                                            <button
                                                onClick={handleAddRoom}
                                                className="px-4 py-2 underline text-white hover:text-blue-500"
                                            >
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    {rooms.map((room, index) => (
                                        <tr key={index} className="border border-gray-700">
                                            <td className="p-2 border border-gray-700">{room.name}</td>
                                            <td className="p-2 border border-gray-700">{room.seats}</td>
                                            <td className="p-2 border border-gray-700">{room.rows}</td>
                                            <td className="p-2 border border-gray-700">{room.columns}</td>
                                            <td className="p-2 border border-gray-700">{room.createdAt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTheater