import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';
const mockMovie = {
    id: 1,
    name: "Furiosa: Câu Chuyện Từ Max Điên",
    englishName: "Furiosa: A Mad Max Saga",
    poster: "https://upload.wikimedia.org/wikipedia/vi/thumb/6/6e/FURIOSA.jpg/330px-FURIOSA.jpg",
    trailer: "https://www.youtube.com/watch?v=vPwSfR_O9Jo",
    description: "Một câu chuyện hậu tận thế về Furiosa trong thế giới Max Điên.",
    genres: "Hành động, Khoa học viễn tưởng",
    directors: "Đạo diễn: George Miller, Diễn viên: Anya Taylor-Joy, Chris Hemsworth",
    graphics: "3D",
    subtitles: "Lồng tiếng",
    ageRating: "C16",
    releaseDate: "2024-05-17",
    releaseYear: "2024",
    duration: "120",
    status: "Sắp chiếu",
    country: "Mỹ",
};
const MovieDetail = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(mockMovie);
    const [isEditing, setIsEditing] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        setFormData(mockMovie);
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Dữ liệu đã lưu: ", formData);
    //     setIsEditing(false);
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dữ liệu đã lưu: ", formData);
        setIsEditing(false);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000); // Ẩn sau 3s
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
                    <span className="text-gray-700 font-medium">Chi tiết phim</span>
                </div>
                <h2 className="text-xl font-semibold p-4">Chi tiết phim</h2>
            </div>
            <div className='min-h-screen bg-gray-50'>
                <div className='container'>

                    <div className="p-6 font-sans text-black">
                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 text-sm">
                            {/* Cột 1 */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Tên phim</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Tên phim (tiếng Anh)</label>
                                <input type="text" name="englishName" value={formData.englishName} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Link poster</label>
                                <input type="text" name="poster" value={formData.poster} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Trailer</label>
                                <input type="text" name="trailer" value={formData.trailer} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Mô tả</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"></textarea>

                                <label className="block text-sm font-semibold mt-3 mb-2">Thể loại</label>
                                <input type="text" name="genres" value={formData.genres} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Đạo diễn, diễn viên</label>
                                <input type="text" name="directors" value={formData.directors} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                            </div>

                            {/* Cột 2 */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Hình thức chiếu</label>
                                <select
                                    name="graphics"
                                    value={formData.graphics}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                >
                                    <option value="">Chọn hình thức chiếu</option>
                                    <option value="2D">2D</option>
                                    <option value="3D">3D</option>
                                </select>
                                <label className="block text-sm font-semibold mt-3 mb-2">Hình thức dịch</label>
                                <select
                                    name="subtitles"
                                    value={formData.subtitles}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                >
                                    <option value="">Chọn hình thức dịch</option>
                                    <option value="Phụ đề">Phụ đề</option>
                                    <option value="Lồng tiếng">Lồng tiếng</option>
                                </select>

                                <label className="block text-sm font-semibold mt-3 mb-2">Độ tuổi xem phim</label>
                                <input type="text" name="ageRating" value={formData.ageRating} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Ngày chiếu</label>
                                <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Năm phát hành</label>
                                <input type="number" name="releaseYear" value={formData.releaseYear} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Thời lượng phim (phút)</label>
                                <input type="number" name="duration" value={formData.duration} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                <label className="block text-sm font-semibold mt-3 mb-2">Trạng thái</label>
                                <select name="status" value={formData.status} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none">
                                    <option value="Nhập">Nhập</option>
                                    <option value="Đang chiếu">Đang chiếu</option>
                                    <option value="Sắp chiếu">Sắp chiếu</option>
                                </select>

                                <label className="block text-sm font-semibold mt-3 mb-2">Quốc gia</label>
                                <input type="text" name="country" value={formData.country} onChange={handleChange} disabled={!isEditing}
                                    className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />
                            </div>


                        </form>
                        <div className="mt-5 ">
                            {isEditing ? (
                                <button type="submit" onClick={handleSubmit} className="bg-green-500 p-2 text-white rounded-lg hover:bg-green-700">
                                    Lưu
                                </button>
                            ) : (
                                <button onClick={handleEditClick} className="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-700">
                                    Chỉnh sửa
                                </button>
                            )}
                            {showSuccessMessage && (
                                <div className="mt-3 text-green-400 font-semibold">
                                    Lưu thành công!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ClippedDrawer>

    )
}

export default MovieDetail