import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const FilmManage = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        // Dữ liệu giả
        const fakeMovies = [
            {
                id: 1, code: "P001", name: "Inception", description: "Sci-fi thriller",
                duration: 148, releaseDate: "2010-07-16", director: "Christopher Nolan",
                actors: "Leonardo DiCaprio", genre: "Sci-Fi", country: "USA",
                image: "https://via.placeholder.com/50", trailer: "https://youtube.com", status: "Đang chiếu"
            },
            {
                id: 2, code: "P002", name: "Titanic", description: "Epic romance",
                duration: 195, releaseDate: "1997-12-19", director: "James Cameron",
                actors: "Leonardo DiCaprio, Kate Winslet", genre: "Romance", country: "USA",
                image: "https://via.placeholder.com/50", trailer: "https://youtube.com", status: "Đã ngừng chiếu"
            }
        ];
        setMovies(fakeMovies);
    }, []);

    const onSubmit = (data) => {
        if (selectedMovie) {
            setMovies(movies.map(m => m.id === selectedMovie.id ? { ...data, id: m.id } : m));
            setSelectedMovie(null);
        } else {
            setMovies([...movies, { ...data, id: movies.length + 1 }]);
        }
        reset();
    };

    const handleRowClick = (movie) => {
        setSelectedMovie(movie);
        Object.keys(movie).forEach(key => setValue(key, movie[key]));
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='container'>
                <div className='ml-[220px] flex flex-1 p-10'>
                    <div className="p-6 font-sans">
                        <h2 className="text-xl font-bold mb-4">Quản lý phim</h2>
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
                                <input placeholder="Mã phim" {...register("code")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Tên phim" {...register("name")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Mô tả" {...register("description")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Thời lượng (phút)" type="number" {...register("duration")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Ngày khởi chiếu" type="date" {...register("releaseDate")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Đạo diễn" {...register("director")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Diễn viên" {...register("actors")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Thể loại" {...register("genre")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Quốc gia" {...register("country")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Hình ảnh (URL)" type="url" {...register("image")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Trailer (URL)" type="url" {...register("trailer")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <select {...register("status")} required className="p-2 border border-gray-300 rounded outline-none">
                                    <option value="Đang chiếu">Đang chiếu</option>
                                    <option value="Đã ngừng chiếu">Đã ngừng chiếu</option>
                                    <option value="Chưa chiếu">Chưa chiếu</option>
                                </select>
                                <div className="col-span-2 flex justify-center">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        {selectedMovie ? "Cập nhật phim" : "Thêm phim"}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <table className="w-full mt-6 border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Mã phim</th>
                                    <th className="border border-gray-300 p-2">Tên phim</th>
                                    <th className="border border-gray-300 p-2">Mô tả</th>
                                    <th className="border border-gray-300 p-2">Thời lượng</th>
                                    <th className="border border-gray-300 p-2">Ngày KC</th>
                                    <th className="border border-gray-300 p-2">Đạo diễn</th>
                                    <th className="border border-gray-300 p-2">Diễn viên</th>
                                    <th className="border border-gray-300 p-2">Thể loại</th>
                                    <th className="border border-gray-300 p-2">Quốc gia</th>
                                    <th className="border border-gray-300 p-2">Hình ảnh</th>
                                    <th className="border border-gray-300 p-2">Trailer</th>
                                    <th className="border border-gray-300 p-2">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <tr key={movie.id} className="odd:bg-white even:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(movie)}>
                                        <td className="border border-gray-300 p-2">{movie.code}</td>
                                        <td className="border border-gray-300 p-2">{movie.name}</td>
                                        <td className="border border-gray-300 p-2">{movie.description}</td>
                                        <td className="border border-gray-300 p-2">{movie.duration}</td>
                                        <td className="border border-gray-300 p-2">{movie.releaseDate}</td>
                                        <td className="border border-gray-300 p-2">{movie.director}</td>
                                        <td className="border border-gray-300 p-2">{movie.actors}</td>
                                        <td className="border border-gray-300 p-2">{movie.genre}</td>
                                        <td className="border border-gray-300 p-2">{movie.country}</td>
                                        <td className="border border-gray-300 p-2"><img src={movie.image} alt={movie.name} className="h-12" /></td>
                                        <td className="border border-gray-300 p-2"><a href={movie.trailer} target="_blank" rel="noopener noreferrer">Xem trailer</a></td>
                                        <td className="border border-gray-300 p-2">{movie.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilmManage;