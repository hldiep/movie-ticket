import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ClippedDrawer from '../Dashboard/DashboardLayoutBasic';
import { getMovieById, updateMovieById } from '../../util/movieApi';

const MovieDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getMovieById(id);
                setMovie(data);
                setError(null);
            } catch (err) {
                console.error("Lỗi khi lấy dữ liệu phim:", err);
                setError("Không thể tải dữ liệu phim. Vui lòng thử lại sau.");
            } finally {
                setLoading(false);
            }
        };
        fetchMovie();
    }, [id]);

    const handleChange = (e) => {
        setMovie({ ...setMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateMovieById(id, movie);
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
        } catch (err) {
            console.error("Lỗi khi cập nhật phim:", err);
            setError("Không thể lưu thay đổi. Vui lòng thử lại sau.");
        }
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
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    {loading ? (
                        <div className="flex justify-center items-center py-10">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-r-transparent"></div>
                            <div className="ml-4 text-blue-600 font-medium text-lg">Đang tải dữ liệu...</div>
                        </div>
                    ) : (
                        <div className="p-6 font-sans text-black">
                            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 text-sm">
                                {/* Cột 1 */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Tên phim</label>
                                    <input type="text" name="name" value={movie.name} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Link poster</label>
                                    <input type="text" name="image" value={movie.image} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Trailer</label>
                                    <input type="text" name="trailer" value={movie.trailer} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Mô tả</label>
                                    <textarea name="description" value={movie.description} onChange={handleChange}
                                        className="h-24 text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"></textarea>

                                    <label className="block text-sm font-semibold mt-3 mb-2">Thể loại</label>
                                    <input type="text" name="typeFilm" value={movie.typeFilms?.map(g => g.name).join(", ") || ""} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Đạo diễn, diễn viên</label>
                                    <input type="text" name="content" value={movie.content} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                </div>

                                {/* Cột 2 */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Hình thức chiếu</label>
                                    <input
                                        type="text"
                                        name="subtitles"
                                        value={movie.sub?.map((item) => item.name).join(", ") || ""}
                                        onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                    />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Độ tuổi xem phim</label>
                                    <input type="text" name="age" value={movie.age} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Thời lượng phim (phút)</label>
                                    <input type="text" name="duration" value={movie.duration} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Quốc gia</label>
                                    <input type="text" name="nation" value={movie.nation} onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none" />

                                    <label className="block text-sm font-semibold mt-3 mb-2">Trạng thái</label>
                                    <select
                                        name="status"
                                        value={movie.status}
                                        onChange={handleChange}
                                        className="text-sm outline-none mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                                    >
                                        <option value="ACTIVE">Đang chiếu</option>
                                        <option value="COMMING_SOON">Sắp chiếu</option>
                                        <option value="DELETE">Đã xóa</option>
                                    </select>
                                </div>


                            </form>

                        </div>)}
                </div>
            </div>
        </ClippedDrawer>

    )
}

export default MovieDetail