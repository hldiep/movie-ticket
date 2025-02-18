import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const [selectedCinema, setSelectedCinema] = useState("");
    const [selectedMovie, setSelectedMovie] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedShowtime, setSelectedShowtime] = useState("");
    const showtimes = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"];

    const movies = [
        { id: 1, title: "Bộ tứ báo thủ", image: "/images/bo-tu-bao-thu-official.webp", category: "Hài, tình cảm", duration: "120 phút", country: "Việt Nam", trailer: "https://www.youtube.com/embed/zKMOgOWn8lQ" },
        { id: 2, title: "Nụ hôn bạc tỷ", image: "/images/nu-hon-bac-ty-poster.webp", category: "Hài, tình cảm", duration: "110 phút", country: "Việt Nam", trailer: "https://www.youtube.com/embed/wr6MeifZCUs" },
        { id: 3, title: "Đèn âm hồn", image: "/images/den-am-hon-poster.webp", category: "Hồi hộp, kinh dị", duration: "98 phút", country: "Mỹ", trailer: "https://www.youtube.com/embed/t62Rifc9OXI" },
        { id: 4, title: "Nhóc quậy", image: "/images/nhoc-quay-va-khu-rung-ky-dieu.webp", category: "Hoạt hình", duration: "95 phút", country: "Nhật Bản", trailer: "https://www.youtube.com/embed/kkRPcZfF7cQ" },
        { id: 5, title: "Yêu nhầm bạn thân", image: "/images/yeu-nham-ban-than-poster.webp", category: "Tình cảm, tâm lý", duration: "125 phút", country: "Hàn Quốc", trailer: "https://www.youtube.com/embed/Z7AbUpnfcW8" },
        { id: 6, title: "Đại chiến người khổng lồ: Lần tấn công cuối cùng", image: "/images/AOT.webp", category: "Hoạt hình, anime", duration: "130 phút", country: "Nhật Bản", trailer: "https://www.youtube.com/embed/i1hiyahxa4Y" },
    ];


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

            <div className="rounded-lg mt-14 p-3 m-[20px]">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Thêm autoplay với delay 5 giây
                    modules={[Navigation, Autoplay]} // Import module Autoplay
                    className="my-8"
                >
                    {promotions.map((promo) => (
                        <SwiperSlide key={promo.id}>
                            <a href={promo.link}>
                                <img
                                    src={promo.image}
                                    alt={`Promotion ${promo.id}`}
                                    className="w-full rounded-sm h-auto object-cover"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="rounded-sm p-4 mx-[30px]">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <h2 className="text-white text-xl font-semibold uppercase text-center md:text-left">
                        Đặt vé nhanh
                    </h2>

                    {/* Chọn rạp */}
                    <select
                        className="w-full md:w-40 py-2 border rounded-lg text-gray-700 outline-none"
                        value={selectedCinema}
                        onChange={(e) => setSelectedCinema(e.target.value)}
                    >
                        <option value="">Chọn rạp</option>
                        <option value="Cinestar Quốc Thanh">Cinestar Quốc Thanh</option>
                        <option value="Cinestar Hai Bà Trưng">Cinestar Hai Bà Trưng (TP.HCM)</option>
                        <option value="Cinestar Sinh Viên">Cinestar Sinh Viên (Bình Dương)</option>
                    </select>

                    {/* Chọn phim */}
                    <select
                        className="w-full md:w-40 px-2 py-2 border rounded-lg text-gray-700 outline-none"
                        value={selectedMovie}
                        onChange={(e) => setSelectedMovie(e.target.value)}
                        disabled={!selectedCinema}
                    >
                        <option value="">Chọn phim</option>
                        {movies.map((movie) => (
                            <option key={movie.id} value={movie.title}>
                                {movie.title}
                            </option>
                        ))}
                    </select>

                    {/* Chọn ngày */}
                    <input
                        type="date"
                        className="w-full md:w-auto px-4 py-2 border rounded-lg text-gray-700 outline-none"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        disabled={!selectedMovie}
                    />

                    {/* Chọn suất */}
                    <select
                        className="w-full md:w-auto px-4 py-2 border rounded-lg text-gray-700 outline-none"
                        value={selectedShowtime}
                        onChange={(e) => setSelectedShowtime(e.target.value)}
                        disabled={!selectedDate}
                    >
                        <option value="">Chọn suất</option>
                        {showtimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>

                    {/* Nút Đặt vé */}
                    <button
                        className={`w-full md:w-auto px-6 py-2 rounded-lg text-white transition duration-300 ${selectedShowtime ? "bg-green-600 hover:bg-green-800" : "bg-gray-500 cursor-not-allowed"
                            }`}
                        disabled={!selectedShowtime}
                    >
                        Đặt vé ngay
                    </button>
                </div>
            </div>
            <main className="p-8 text-center">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-white">PHIM ĐANG CHIẾU</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerGroup={1}
                        navigation
                        loop={false}
                        modules={[Navigation]}
                        className="my-8"
                        breakpoints={{
                            320: { slidesPerView: 1, slidesPerGroup: 1 }, // Điện thoại nhỏ (1 phim)
                            480: { slidesPerView: 1, slidesPerGroup: 1 }, // Điện thoại lớn (1 phim)
                            768: { slidesPerView: 2, slidesPerGroup: 2 }, // Tablet (2 phim)
                            1024: { slidesPerView: 3, slidesPerGroup: 3 }, // Máy tính (3 phim)
                            1280: { slidesPerView: 4, slidesPerGroup: 4 }, // Màn hình lớn (4 phim)
                        }}
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <a href="">
                                    <div className="relative">
                                        <div className="relative group">
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                className="w-full h-[420px] object-cover rounded-sm"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm p-4 text-center">
                                                <h2 className="text-xl font-bold">{movie.title}</h2>
                                                <p className="text-sm mt-2">{movie.category}</p>
                                                <p className="text-sm mt-1">{movie.duration}</p>
                                                <p className="text-sm mt-1">{movie.country}</p>
                                            </div>
                                        </div>
                                        <h2 className="text-lg text-white hover:text-yellow-500 uppercase font-semibold text-center mt-3 h-16 overflow-hidden text-ellipsis">
                                            {movie.title}
                                        </h2>
                                        <div className="flex justify-center space-x-4 mt-3">
                                            <button
                                                onClick={() => window.open(movie.trailer, "_blank")}
                                                className="text-white border border-white px-4 py-1 rounded-md hover:bg-gray-900 transition duration-300 text-sm"
                                            >
                                                Xem Trailer
                                            </button>
                                            <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-800 transition duration-300 text-sm">
                                                Đặt Vé
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className='border border-white hover:bg-green-700 text-white uppercase px-6 py-2 rounded-lg font-semibold' >Xem thêm</button>
                </div>
                <br />
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-white">PHIM SẮP CHIẾU</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerGroup={1}
                        navigation
                        loop={false}
                        modules={[Navigation]}
                        className="my-8"
                        breakpoints={{
                            320: { slidesPerView: 1, slidesPerGroup: 1 }, // Điện thoại nhỏ (1 phim)
                            480: { slidesPerView: 1, slidesPerGroup: 1 }, // Điện thoại lớn (1 phim)
                            768: { slidesPerView: 2, slidesPerGroup: 2 }, // Tablet (2 phim)
                            1024: { slidesPerView: 3, slidesPerGroup: 3 }, // Máy tính (3 phim)
                            1280: { slidesPerView: 4, slidesPerGroup: 4 }, // Màn hình lớn (4 phim)
                        }}
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <a href="">
                                    <div className="relative">
                                        <div className="relative group">
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                className="w-full h-[420px] object-cover rounded-sm"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm p-4 text-center">
                                                <h2 className="text-xl font-bold">{movie.title}</h2>
                                                <p className="text-sm mt-2">{movie.category}</p>
                                                <p className="text-sm mt-1">{movie.duration}</p>
                                                <p className="text-sm mt-1">{movie.country}</p>
                                            </div>
                                        </div>
                                        <h2 className="text-lg text-white hover:text-yellow-500 uppercase font-semibold text-center mt-3 h-16 overflow-hidden text-ellipsis">
                                            {movie.title}
                                        </h2>
                                        <div className="flex justify-center space-x-4 mt-3">
                                            <button
                                                onClick={() => window.open(movie.trailer, "_blank")}
                                                className="text-white border border-white px-4 py-1 rounded-md hover:bg-gray-900 transition duration-300 text-sm"
                                            >
                                                Xem Trailer
                                            </button>
                                            <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-800 transition duration-300 text-sm">
                                                Đặt Vé
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className='border border-white hover:bg-green-700 text-white uppercase px-6 py-2 rounded-lg font-semibold' >Xem thêm</button>
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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r p-6">
                <div className="flex flex-col md:flex-row w-full max-w-4xl bg-opacity-20 p-6 rounded-lg">

                    <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 mb-6 md:mb-0">
                        <h2 className="mt-5 text-white text-2xl font-bold uppercase text-center">Liên Hệ Với Chúng Tôi</h2>

                        <button className="border flex items-center px-6 py-3 rounded-lg text-white font-semibold w-64 hover:bg-green-900 transition">
                            FACEBOOK
                        </button>
                        <button className="border flex items-center px-6 py-3 rounded-lg text-white font-semibold w-64 hover:bg-green-900 transition">
                            ZALO CHAT
                        </button>
                    </div>


                    <div className="w-full md:w-1/2 border p-6 rounded-lg shadow-lg">
                        <div className="space-y-4 text-white">
                            <h2 className='uppercase font-bold'>Thông tin liên hệ</h2>
                            <p className="flex items-center">
                                <span className="mr-2">📞</span> 1900.0085
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">📍</span> 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM
                            </p>
                        </div>

                        <form className="mt-4 space-y-4">
                            <input
                                type="text"
                                placeholder="Họ và tên"
                                className="w-full p-3 border rounded-md text-gray-900 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Điền email"
                                className="w-full p-3 border rounded-md text-gray-900 outline-none"
                            />
                            <textarea
                                placeholder="Thông tin liên hệ hoặc phản ánh"
                                className="w-full p-3 border rounded-md text-gray-900 outline-none h-28"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-5/12 bg-green-600 hover:bg-green-800 text-white font-bold py-3 rounded-md transition"
                            >
                                GỬI NGAY
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage