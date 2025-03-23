import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        englishName: "",
        trailer: "",
        description: "",
        genres: "",
        directors: "",
        actors: "",
        graphics: "",
        subtitles: "",
        ageRating: "",
        releaseDate: "",
        releaseYear: "",
        duration: "",
        status: "Nhập",
        country: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting: ", formData);
    };
    return (
        <div className='min-h-screen bg-main'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Thêm phim</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                            {/* Cột 1 */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">* Tên phim</label>
                                <input type="text" name="name" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">* Tên phim (tiếng Anh)</label>
                                <input type="text" name="englishName" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />
                                <label className="block text-sm font-semibold mt-3 mb-2">* Link poster</label>
                                <input type="text" name="poster" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">* Trailer</label>
                                <input type="text" name="trailer" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">* Mô tả</label>
                                <textarea name="description" onChange={handleChange} className="w-full h-24 focus:outline-blue-500 text-black p-1 rounded-md"></textarea>

                                <label className="block text-sm font-semibold mt-3 mb-2">Thể loại</label>
                                <input type="text" name="genres" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Đạo diễn</label>
                                <input type="text" name="directors" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Diễn viên</label>
                                <input type="text" name="actors" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />
                            </div>

                            {/* Cột 2 */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">* Hình thức chiếu</label>
                                <select name="graphics" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md">
                                    <option value="">Chọn hình thức</option>
                                    <option value="2D">2D</option>
                                    <option value="3D">3D</option>
                                </select>

                                <label className="block text-sm font-semibold mt-3 mb-2">* Hình thức dịch</label>
                                <select name="subtitles" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md">
                                    <option value="">Chọn hình thức</option>
                                    <option value="Sub">Phụ đề</option>
                                    <option value="Dub">Lồng tiếng</option>
                                </select>

                                <label className="block text-sm font-semibold mt-3 mb-2">* Độ tuổi xem phim</label>
                                <select name="ageRating" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md">
                                    <option value="">Chọn độ tuổi</option>
                                    <option value="P">P - Mọi lứa tuổi</option>
                                    <option value="C13">C13 - Trên 13 tuổi</option>
                                    <option value="C16">C16 - Trên 16 tuổi</option>
                                    <option value="C18">C18 - Trên 18 tuổi</option>
                                </select>

                                <label className="block text-sm font-semibold mt-3 mb-2">Ngày chiếu</label>
                                <input type="date" name="releaseDate" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">* Năm phát hành</label>
                                <input type="number" name="releaseYear" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Thời lượng phim (phút)</label>
                                <input type="number" name="duration" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Trạng thái</label>
                                <select name="status" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md">
                                    <option value="Nhập">Nhập</option>
                                    <option value="Đang chiếu">Đang chiếu</option>
                                    <option value="Sắp chiếu">Sắp chiếu</option>
                                </select>

                                <label className="block text-sm font-semibold mt-3 mb-2">Quốc gia</label>
                                <input type="text" name="country" onChange={handleChange} className="w-full focus:outline-blue-500 text-black p-1 rounded-md" />
                            </div>

                            <div >
                                <button type="submit" className=" bg-blue-500 p-2 hover:bg-blue-700 rounded-lg">Tạo phim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddMovie