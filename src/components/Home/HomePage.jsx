import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
    const movies = [
        { id: 1, title: "Bộ tứ báo thủ", image: "/images/bo-tu-bao-thu-official.webp", category: "Hài, tình cảm.", trailer: "https://www.youtube.com/embed/zKMOgOWn8lQ" },
        { id: 2, title: "Nụ hôn bạc tỷ", image: "/images/nu-hon-bac-ty-poster.webp", category: "Hài, tình cảm.", trailer: "https://www.youtube.com/embed/wr6MeifZCUs" },
        { id: 3, title: "Đèn âm hồn", image: "/images/den-am-hon-poster.webp", category: "Hồi hộp, kinh dị.", trailer: "https://www.youtube.com/embed/t62Rifc9OXI" },
        { id: 4, title: "Nhóc quậy", image: "/images/nhoc-quay-va-khu-rung-ky-dieu.webp", category: "Hoạt hình.", trailer: "https://www.youtube.com/embed/kkRPcZfF7cQ" },
        { id: 5, title: "Yêu nhầm bạn thân", image: "/images/yeu-nham-ban-than-poster.webp", category: "Tình cảm, tâm lý.", trailer: "https://www.youtube.com/embed/Z7AbUpnfcW8" },
        { id: 6, title: "Đại chiến người khổng lồ: Lần tấn công cuối cùng", image: "/images/AOT.webp", category: "Hoạt hình, anime.", trailer: "https://www.youtube.com/embed/i1hiyahxa4Y" },
    ];
    const handleTrailerClick = (trailerUrl) => {
        setVideoUrl(trailerUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoUrl("");
    };
    const promotions = [
        { id: 1, image: "/images/pro1.jpg", link: "/promo1" },
        { id: 2, image: "/promo2.jpg", link: "/promo2" },
        { id: 3, image: "/promo3.jpg", link: "/promo3" },
        { id: 4, image: "/promo4.jpg", link: "/promo4" },
    ];
    return (
        <div className="min-h-screen bg-gray-600 pt-20">
            <Header />

            <div className=" rounded-lg mt-14 p-3 m-[20px]">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    modules={[Navigation]}
                    className="my-8"
                >
                    {promotions.map((promo) => (
                        <SwiperSlide key={promo.id}>
                            <a href={promo.link}>
                                <img src={promo.image} alt={`Promotion ${promo.id}`} className="w-full rounded-sm h-auto object-cover" />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="bg-yellow-200 shadow-lg rounded-sm p-4 mr-[30px] ml-[30px]">
                <div className="flex justify-center items-center space-x-4">
                    <h2 className="text-xl font-semibold uppercase">Đặt vé nhanh</h2>

                    <select className="w-40 py-2 border rounded-lg text-gray-700 outline-none">
                        <option>Chọn rạp</option>
                        <option>Cinestar Quốc Thanh</option>
                        <option>Cinestar Hai Bà Trưng (TP.HCM)</option>
                        <option>Cinestar Sinh Viên (Bình Dương)</option>
                    </select>

                    <select
                        className="w-40 px-2 py-2 border rounded-lg text-gray-700 outline-none"
                    >
                        <option>Chọn phim</option>
                        {movies.map((movie) => (
                            <option key={movie.id} className="truncate w-40">
                                {movie.title}
                            </option>
                        ))}
                    </select>

                    <input
                        type="date"
                        className="px-4 py-2 border rounded-lg text-gray-700 outline-none"
                    />

                    <select className="px-4 py-2 border rounded-lg text-gray-700 outline-none">
                        <option>Chọn suất</option>
                        <option>10:00 AM</option>
                        <option>1:00 PM</option>
                        <option>4:00 PM</option>
                        <option>7:00 PM</option>
                    </select>

                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Đặt vé ngay
                    </button>
                </div>
            </div>
            <main className="p-8 text-center">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-white">PHIM ĐANG CHIẾU</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        slidesPerGroup={3}
                        navigation
                        loop={false}
                        modules={[Navigation]}
                        className="my-8">
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <a href={"#"}>
                                    <div className="bg-gradient-to-b  hover:text-yellow-500 rounded-lg p-4 min-h-[450px] flex flex-col justify-between text-white h-full" >
                                        <div className="relative">
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                className="w-full h-[320px] object-cover  rounded-sm"
                                            />

                                        </div>

                                        <h2 className="text-lg uppercase font-semibold text-center mt-3 h-16 overflow-hidden text-ellipsis">
                                            {movie.title}
                                        </h2>

                                        <div className="flex justify-center space-x-4 mt-3">
                                            <button
                                                onClick={() => handleTrailerClick(movie.trailer)}
                                                className="text-white border border-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm"
                                            >
                                                🎬 Xem Trailer
                                            </button>
                                            <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-800 transition duration-300 text-sm">
                                                🎟 Đặt Vé
                                            </button>
                                        </div>
                                    </div>
                                </a>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className='bg-yellow-200 hover:bg-yellow-300 text-black uppercase px-6 py-2 rounded-lg font-semibold' >Xem thêm</button>
                </div>
                <br />
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-white">PHIM SẮP CHIẾU</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        slidesPerGroup={3}
                        navigation
                        loop={false}
                        modules={[Navigation]}
                        className="my-8">
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <a href={"#"}>
                                    <div className="bg-gradient-to-b  hover:text-yellow-500 rounded-lg p-4 min-h-[450px] flex flex-col justify-between text-white h-full" >
                                        <div className="relative">
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                className="w-full h-[320px] object-cover  "
                                            />

                                        </div>

                                        <h2 className="text-lg uppercase font-semibold text-center mt-3 h-16 overflow-hidden text-ellipsis">
                                            {movie.title}
                                        </h2>

                                        <div className="flex justify-center space-x-4 mt-3">
                                            <button
                                                onClick={() => handleTrailerClick(movie.trailer)}
                                                className="text-white border border-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm"
                                            >
                                                🎬 Xem Trailer
                                            </button>
                                            <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-800 transition duration-300 text-sm">
                                                🎟 Đặt Vé
                                            </button>
                                        </div>
                                    </div>
                                </a>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className='bg-yellow-200 hover:bg-yellow-300 text-black uppercase px-6 py-2 rounded-lg font-semibold' >Xem thêm</button>
                </div>

            </main>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 relative max-w-lg w-full">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 text-xl hover:text-red-600">
                            X
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
            <Footer />
        </div>
    )
}

export default HomePage