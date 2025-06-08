import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';

const AddMovie = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        sub: "",
        image: "",
        nation: "",
        duration: "",
        description: "",
        content: "",
        trailer: "",
        typeFilm: "",
        status: "ACTIVE",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting: ", formData);
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
                        onClick={() => navigate('/quan-ly-phim')}
                        className="hover:underline text-blue-600"
                    >
                        Quản lý phim
                    </button>
                    <span>/</span>
                    <span className="text-gray-700 font-medium">Thêm mới</span>
                </div>
                <h2 className="text-xl font-semibold p-4">Thêm phim mới</h2>
            </div>
            <div className='min-h-screen bg-gray-50'>
                <div className='container'>

                    <div className="p-6 font-sans text-black">

                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                            {/* Cột 1 */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">* Tên phim</label>
                                <input type="text" name="name" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Link poster</label>
                                <input type="text" name="image" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">* Trailer</label>
                                <input type="text" name="trailer" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">* Mô tả</label>
                                <textarea name="description" onChange={handleChange}
                                    className="h-24 text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"></textarea>

                                <label className="block text-sm font-semibold mt-3 mb-2">Thể loại</label>
                                <input type="text" name="typeFilm" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Đạo diễn, diễn viên</label>
                                <input type="text" name="content" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                            </div>

                            {/* Cột 2 */}
                            <div>

                                <label className="block text-sm font-semibold mb-2">* Hình thức chiếu</label>
                                <input type="text" name="sub" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">* Độ tuổi xem phim</label>
                                <input type="text" name="age" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Thời lượng phim (phút)</label>
                                <input type="number" name="duration" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Trạng thái</label>
                                <select name="status" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none">
                                    <option value="Nhập">Nhập</option>
                                    <option value="ACTIVE">Đang chiếu</option>
                                    <option value="COMMING_SOON">Sắp chiếu</option>
                                </select>

                                <label className="block text-sm font-semibold mt-3 mb-2">Quốc gia</label>
                                <input type="text" name="nation" onChange={handleChange}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />
                            </div>

                            <div >
                                <button type="submit" className="text-white bg-blue-500 p-2 hover:bg-blue-700 rounded-lg">Tạo phim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ClippedDrawer>

    )
}
export default AddMovie