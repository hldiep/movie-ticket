import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SeatMatrix from './SeatMatrix';
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';
import { getBranchId } from '../../util/branchApi';

const TheaterDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [branch, setBranch] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);
    const [editingRoomId, setEditingRoomId] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showSeatMatrix, setShowSeatMatrix] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBranch((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const toggleEdit = () => {
        if (isEditing) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
        setIsEditing(!isEditing);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBranchId(id);
                setBranch(data);
                setError(null);
            } catch (err) {
                console.error("Lỗi khi lấy dữ liệu:", err);
                setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
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
                                    value={branch.nameBranch}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                />

                                <label className="block text-sm font-semibold mt-3 mb-2">Địa chỉ rạp</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={branch.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                />

                                {/* <label className="block text-sm font-semibold mt-3 mb-2">Địa chỉ map</label>
                                <textarea
                                    name="map"
                                    value={branch.map}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="text-sm h-24 outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                ></textarea> */}
                            </div>

                            {/* <div className="mt-4">
                                <iframe
                                    src={branch.map}
                                    className="w-full h-64 border-0 rounded shadow"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div> */}
                        </form>

                        <div className='p-2'>
                            <h2 className="text-xl font-semibold mb-4 mt-4 text-black">Danh sách phòng chiếu</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-700">
                                    <thead>
                                        <tr className="bg-gray-800 text-left text-white">
                                            <th className="p-2 border border-gray-700">Tên phòng</th>
                                            <th className="p-2 border border-gray-700">Số ghế</th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                        {branch.map((room) => (
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
                                    </tbody> */}
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
                {showSeatMatrix && (
                    <SeatMatrix onClose={() => setShowSeatMatrix(false)} />
                )}
            </div>
        </ClippedDrawer >

    );
};

export default TheaterDetail;
