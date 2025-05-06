import React, { useState } from "react";
import Book from './Book';
import { useNavigate } from "react-router-dom";

const MovieDetailPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
    const handleGoBack = () => {
        navigate(-1); // quay lại trang trước
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoUrl("");
    };
    const movie = {
        title: "Nụ Hôn Bạc Tỷ",
        rating: "T13",
        genre: "Tình Cảm",
        duration: "100'",
        country: "Việt Nam",
        ageRating: "T13: Phim dành cho khán giả từ đủ 13 tuổi trở lên (13+)",
        image: "/images/nu-hon-bac-ty-poster.webp",
        director: "Thu Trang",
        actor: "Thu Trang, Đoàn Thiên Ân, Lê Xuân Tiền...",
        premiere: "Thứ Tư, 29/01/2025",
        plot: "Câu chuyện xoay quanh Vân - cô gái bán bánh mì vô tình gặp hai chàng trai trong một tai nạn nhỏ...",
        trailer: "https://www.youtube.com/embed/wr6MeifZCUs",
    };

    return (
        <div className='min-h-screen pt-20 bg-main flex justify-center'>

            <div className={'container'}>
                <div className=' ' >
                    <div>
                        {/* Nút quay lại */}
                        <button
                            onClick={handleGoBack}
                            className="cursor-pointer mt-14 p-3 m-[20px] text-white italic hover:text-yellow-500"
                        >
                            Quay lại
                        </button>

                        {/* Phần còn lại của trang */}
                    </div>
                    <div className="flex p-3 m-[20px] justify-center">
                        <div className="w-90 text-white ">
                            <div className="flex-shrink-0">
                                <img src={movie.image} alt={movie.title} className="rounded-sm shadow-lg" />
                            </div>
                        </div>
                        <div className="w-2/3 pl-8 text-white">
                            <h1 className="text-3xl font-bold ">{movie.title} ({movie.rating})</h1>
                            <div className="flex items-center space-x-4 mt-3">
                                <span>🎭 {movie.genre}</span>
                                <span>⏳ {movie.duration}</span>
                                <span>🌍 {movie.country}</span>
                            </div>

                            <p className="mt-3 bg-yellow-400 text-black px-3 py-1 rounded inline-block">
                                {movie.ageRating}
                            </p>

                            <div className="mt-5">
                                <h2 className="text-xl font-semibold">MÔ TẢ</h2>
                                <p>Đạo diễn: {movie.director}</p>
                                <p>Diễn viên: {movie.actor} </p>
                                <p>Khởi chiếu: {movie.premiere}</p>
                            </div>

                            <div className="mt-5">
                                <h2 className="text-xl font-semibold">NỘI DUNG PHIM</h2>
                                <p className="text-gray-300">{movie.plot}</p>
                            </div>
                            <div className="flex space-x-4 mt-3">
                                <button
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setVideoUrl(movie.trailer);
                                    }}
                                    className="uppercase text-white border border-white rounded-xl px-5 py-2 hover:bg-gray-900 transition-all duration-300"
                                >
                                    Xem Trailer
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <Book />
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 relative max-w-lg w-full rounded-md shadow-lg">
                        <button onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-700 text-xl hover:text-red-600">
                            &times;
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-64 rounded-sm"
                                src={videoUrl}
                                title="YouTube trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default MovieDetailPage