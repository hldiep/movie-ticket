import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeatMatrix from './SeatMatrix';
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';

const mockTheater = {
    name: "CGV Vincom",
    address: "Vincom Center, Hà Nội",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421742.84767122753!2d106.30172548130687!3d10.866440928006462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edfe2a3180b%3A0x3986871d90d9086b!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbg!5e0!3m2!1svi!2s!4v1742461586467!5m2!1svi!2s",
};

const initialRooms = [
    { id: 1, name: "Phòng A", createdAt: "2025-03-23" },
    { id: 2, name: "Phòng B", createdAt: "2025-03-23" },
    { id: 3, name: "Phòng C", createdAt: "2025-03-23" },
    { id: 4, name: "Phòng D", createdAt: "2025-03-23" }
];

const TheaterDetail = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(mockTheater);
    const [rooms, setRooms] = useState(initialRooms);
    const [isEditing, setIsEditing] = useState(false);
    const [editingRoomId, setEditingRoomId] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [pendingEditId, setPendingEditId] = useState(null);

    const [showSeatMatrix, setShowSeatMatrix] = useState(false);
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
                    <span className="text-gray-700 font-medium">Chi tiết rạp</span>
                </div>
                <h2 className="text-xl font-semibold p-4">Chi tiết rạp</h2>
            </div>
            <div className='min-h-screen bg-gray-50'>
                <div className='container'>

                    <div className="p-6 font-sans text-black">
                        <div className="flex justify-between items-center mb-4">
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
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                />

                                <label className="block text-sm font-semibold mt-3 mb-2">Địa chỉ rạp</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                />

                                <label className="block text-sm font-semibold mt-3 mb-2">Địa chỉ map</label>
                                <textarea
                                    name="map"
                                    value={formData.map}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="text-sm h-24 outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
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
                            <h2 className="text-xl font-semibold mb-4 mt-4 text-black">Danh sách phòng chiếu</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-700">
                                    <thead>
                                        <tr className="bg-gray-800 text-left text-white">
                                            <th className="p-2 border border-gray-700">Tên phòng</th>
                                            <th className="p-2 border border-gray-700">Ngày tạo</th>
                                            <th className='p-2 border border-gray-700'>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rooms.map((room) => (
                                            <React.Fragment key={room.id}>
                                                <tr
                                                    className={`border border-gray-700 transition-colors duration-300 ${editingRoomId === room.id ? "bg-gray-700/50" : "bg-transparent hover:bg-gray-700/20"
                                                        }`}
                                                >
                                                    <td className="p-2 border border-gray-700">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={room.name}
                                                            onChange={(e) => handleRoomChange(e, room.id)}
                                                            disabled={editingRoomId !== room.id}
                                                            className={`w-[150px] bg-transparent p-1 rounded-md outline-none ${editingRoomId !== room.id ? "cursor-not-allowed" : ""
                                                                }`}
                                                        />
                                                    </td>
                                                    <td className="p-2 border border-gray-700">{room.createdAt}</td>
                                                    <td className="p-2 border border-gray-700">
                                                        <button onClick={() => navigate('/quan-ly-rap/chi-tiet-rap/phong')}>
                                                            Chỉnh sơ đồ ghế
                                                        </button>
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                {showSuccess && (
                    <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-500">
                        Lưu thành công!
                    </div>
                )}
                {/* {showConfirmModal && (
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
            )} */}
                {showSeatMatrix && (
                    <SeatMatrix onClose={() => setShowSeatMatrix(false)} />
                )}
            </div>
        </ClippedDrawer >

    );
};

export default TheaterDetail;
