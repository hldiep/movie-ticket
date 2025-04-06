import React, { useEffect, useState } from 'react';

const mockTheater = {
    name: "CGV Vincom",
    address: "Vincom Center, Hà Nội",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421742.84767122753!2d106.30172548130687!3d10.866440928006462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edfe2a3180b%3A0x3986871d90d9086b!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbg!5e0!3m2!1svi!2s!4v1742461586467!5m2!1svi!2s",
};

const initialRooms = [
    { id: 1, name: "Phòng A", seats: 100, rows: 10, columns: 10, createdAt: "2025-03-23" },
    { id: 2, name: "Phòng B", seats: 80, rows: 8, columns: 10, createdAt: "2025-03-23" },
    { id: 3, name: "Phòng C", seats: 120, rows: 12, columns: 10, createdAt: "2025-03-23" },
    { id: 4, name: "Phòng D", seats: 90, rows: 9, columns: 10, createdAt: "2025-03-23" }
];

const TheaterDetail = () => {
    const [formData, setFormData] = useState(mockTheater);
    const [rooms, setRooms] = useState(initialRooms);
    const [isEditing, setIsEditing] = useState(false);
    const [editingRoomId, setEditingRoomId] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [pendingEditId, setPendingEditId] = useState(null);

    useEffect(() => {
        setFormData(mockTheater);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRoomChange = (e, id) => {
        const { name, value } = e.target;
        setRooms((prevRooms) =>
            prevRooms.map((room) =>
                room.id === id ? { ...room, [name]: value } : room
            )
        );
    };

    const toggleEdit = () => {
        if (isEditing) {
            // Lưu logic ở đây nếu cần
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000); // ẩn sau 3 giây
        }
        setIsEditing(!isEditing);
    };

    const toggleRoomEdit = (id) => {
        if (editingRoomId === id) {
            // Lưu dòng đang chỉnh sửa
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
            setEditingRoomId(null);
        } else if (editingRoomId !== null && editingRoomId !== id) {
            setPendingEditId(id);        // Lưu ID mới muốn chuyển tới
            setShowConfirmModal(true);   // Hiện modal xác nhận
        } else {
            setEditingRoomId(id); // Bình thường, không có dòng nào đang sửa
        }
    };
    const handleConfirmSave = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setEditingRoomId(pendingEditId);
        setPendingEditId(null);
        setShowConfirmModal(false);
    };

    const handleDiscardChanges = () => {
        setEditingRoomId(pendingEditId); // Bỏ qua dòng đang sửa và chuyển luôn
        setPendingEditId(null);
        setShowConfirmModal(false);
    };

    const handleCancelModal = () => {
        setPendingEditId(null);
        setShowConfirmModal(false);
    };
    return (
        <div className='min-h-screen bg-main text-white'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Chi tiết rạp</h1>
                            <button
                                onClick={toggleEdit}
                                className={`px-4 py-2 rounded-md ${isEditing ? "bg-green-500 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-700"} text-white`}
                            >
                                {isEditing ? "Lưu" : "Chỉnh sửa"}
                            </button>
                        </div>
                        <form className="grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Tên rạp chiếu</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full text-black p-1 rounded-md ${!isEditing ? "bg-gray-300 cursor-not-allowed" : "focus:outline-blue-500"}`}
                                />

                                <label className="block text-sm font-semibold mt-3 mb-2">Địa chỉ rạp</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full text-black p-1 rounded-md ${!isEditing ? "bg-gray-300 cursor-not-allowed" : "focus:outline-blue-500"}`}
                                />

                                <label className="block text-sm font-semibold mt-3 mb-2">Địa chỉ map</label>
                                <textarea
                                    name="map"
                                    value={formData.map}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full h-24 text-black p-1 rounded-md ${!isEditing ? "bg-gray-300 cursor-not-allowed" : "focus:outline-blue-500"}`}
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <iframe
                                    src={formData.map}
                                    className="w-full h-64 border-0 rounded shadow"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </form>

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
                                        {rooms.map((room) => (
                                            <tr
                                                key={room.id}
                                                className={`border border-gray-700 transition-colors duration-300 ${editingRoomId === room.id ? "bg-gray-700/50" : "bg-transparent hover:bg-gray-700/20"}`}
                                            >
                                                <td className="p-2 border border-gray-700">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={room.name}
                                                        onChange={(e) => handleRoomChange(e, room.id)}
                                                        disabled={editingRoomId !== room.id}
                                                        className={`w-full bg-transparent text-white p-1 rounded-md outline-none ${editingRoomId !== room.id ? "cursor-not-allowed" : ""}`}
                                                    />
                                                </td>
                                                <td className="p-2 border border-gray-700">
                                                    <input
                                                        type="number"
                                                        name="seats"
                                                        value={room.seats}
                                                        onChange={(e) => handleRoomChange(e, room.id)}
                                                        disabled={editingRoomId !== room.id}
                                                        className={`w-full bg-transparent text-white p-1 rounded-md outline-none ${editingRoomId !== room.id ? "cursor-not-allowed" : ""}`}
                                                    />
                                                </td>
                                                <td className="p-2 border border-gray-700">
                                                    <input
                                                        type="number"
                                                        name="rows"
                                                        value={room.rows}
                                                        onChange={(e) => handleRoomChange(e, room.id)}
                                                        disabled={editingRoomId !== room.id}
                                                        className={`w-full bg-transparent text-white p-1 rounded-md outline-none ${editingRoomId !== room.id ? "cursor-not-allowed" : ""}`}
                                                    />
                                                </td>
                                                <td className="p-2 border border-gray-700">
                                                    <input
                                                        type="number"
                                                        name="columns"
                                                        value={room.columns}
                                                        onChange={(e) => handleRoomChange(e, room.id)}
                                                        disabled={editingRoomId !== room.id}
                                                        className={`w-full bg-transparent text-white p-1 rounded-md outline-none ${editingRoomId !== room.id ? "cursor-not-allowed" : ""}`}
                                                    />
                                                </td>
                                                <td className="p-2 border border-gray-700">{room.createdAt}</td>
                                                <td className="p-2 border border-gray-700">
                                                    <button onClick={() => toggleRoomEdit(room.id)} className="px-4 py-2 underline text-white hover:text-blue-500">
                                                        {editingRoomId === room.id ? "Lưu" : "Sửa"}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {showSuccess && (
                <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-500">
                    Lưu thành công!
                </div>
            )}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-lg font-semibold mb-4">Bạn có muốn lưu thay đổi?</h2>
                        <p className="mb-4">Bạn đang chỉnh sửa một phòng khác. Bạn có muốn lưu trước khi chuyển?</p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={handleConfirmSave}
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Lưu
                            </button>
                            <button
                                onClick={handleDiscardChanges}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                            >
                                Không lưu
                            </button>
                            <button
                                onClick={handleCancelModal}
                                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TheaterDetail;
