import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slider from "./Slider.";
import SelectorBar from "./SelectorBar";
import SectionFilming from "./SectionFilming";
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");


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
    return (
        <div className="min-h-screen pt-20 bg-main flex justify-center">

            <div className={"container"}>
                <Slider />
                <SelectorBar />
                <main className="p-8 text-center">
                    <SectionFilming />
                    <br />
                    {/*<div>*/}
                    {/*    <h1 className="text-4xl font-bold mb-4 text-white">PHIM SẮP CHIẾU</h1>*/}
                    {/*    <Swiper*/}
                    {/*        spaceBetween={20}*/}
                    {/*        slidesPerGroup={1}*/}
                    {/*        navigation*/}
                    {/*        loop={false}*/}
                    {/*        modules={[Navigation]}*/}
                    {/*        className="my-8"*/}
                    {/*        breakpoints={{*/}
                    {/*            320: {slidesPerView: 1, slidesPerGroup: 1}, // Điện thoại nhỏ (1 phim)*/}
                    {/*            480: {slidesPerView: 1, slidesPerGroup: 1}, // Điện thoại lớn (1 phim)*/}
                    {/*            768: {slidesPerView: 2, slidesPerGroup: 2}, // Tablet (2 phim)*/}
                    {/*            1024: {slidesPerView: 3, slidesPerGroup: 3}, // Máy tính (3 phim)*/}
                    {/*            1280: {slidesPerView: 4, slidesPerGroup: 4}, // Màn hình lớn (4 phim)*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {movies.map((movie) => (*/}
                    {/*            <SwiperSlide key={movie.id}>*/}
                    {/*                <a href="">*/}
                    {/*                    <div className="relative">*/}
                    {/*                        <div className="relative group">*/}
                    {/*                            <img*/}
                    {/*                                src={movie.image}*/}
                    {/*                                alt={movie.title}*/}
                    {/*                                className="w-full h-[420px] object-cover rounded-sm"*/}
                    {/*                            />*/}
                    {/*                            <div*/}
                    {/*                                className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm p-4 text-center">*/}
                    {/*                                <h2 className="text-xl font-bold">{movie.title}</h2>*/}
                    {/*                                <p className="text-sm mt-2">{movie.category}</p>*/}
                    {/*                                <p className="text-sm mt-1">{movie.duration}</p>*/}
                    {/*                                <p className="text-sm mt-1">{movie.country}</p>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <h2 className="text-lg text-white hover:text-yellow-500 uppercase font-semibold text-center mt-3 h-16 overflow-hidden text-ellipsis">*/}
                    {/*                            {movie.title}*/}
                    {/*                        </h2>*/}
                    {/*                        <div className="flex justify-center space-x-4 mt-3">*/}
                    {/*                            <button*/}
                    {/*                                onClick={() => window.open(movie.trailer, "_blank")}*/}
                    {/*                                className="text-white border border-white px-4 py-1 rounded-md hover:bg-gray-900 transition duration-300 text-sm"*/}
                    {/*                            >*/}
                    {/*                                Xem Trailer*/}
                    {/*                            </button>*/}
                    {/*                            <button*/}
                    {/*                                className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-800 transition duration-300 text-sm">*/}
                    {/*                                Đặt Vé*/}
                    {/*                            </button>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </a>*/}
                    {/*            </SwiperSlide>*/}
                    {/*        ))}*/}
                    {/*    </Swiper>*/}
                    {/*    <button*/}
                    {/*        className='border border-white hover:bg-green-700 text-white uppercase px-6 py-2 rounded-lg font-semibold'>Xem*/}
                    {/*        thêm*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                </main>
                {/* {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 relative max-w-lg w-full">
                            <button onClick={closeModal}
                                    className="absolute top-2 right-2 text-gray-700 text-xl hover:text-red-600">
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
                )} */}
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r p-6">
                    <div className="flex flex-col space-x-6 md:flex-row w-full max-w-4xl bg-opacity-20 p-6 rounded-lg">

                        <div
                            className="text-3xl flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 mb-6 md:mb-0">
                            <h2 className="mt-5 text-white font-bold uppercase text-center">Liên Hệ Với Chúng
                                Tôi</h2>

                            <button
                                className="font-bold border border-yellow-600 px-5 py-2 rounded-xl text-yellow-600 w-[220px] hover:bg-yellow-600 hover:text-white transition-all duration-300">
                                FACEBOOK
                            </button>
                            <button
                                className="font-bold border border-yellow-600 px-5 py-2 rounded-xl text-yellow-600 w-[220px] hover:bg-yellow-600 hover:text-white transition-all duration-300">
                                ZALO CHAT
                            </button>
                        </div>


                        <div className="w-full md:w-2/3 border border-yellow-600 p-6 rounded-lg shadow-lg">
                            <div className="space-y-4 text-white">
                                <h2 className='uppercase font-bold'>Thông tin liên hệ</h2>
                                <p className="flex items-center">
                                    <span className="mr-2">📞</span> 1900.0085
                                </p>
                                <p className="flex items-center">
                                    <span className="mr-2">📍</span> 97 Đường Man Thiện, Phường Hiệp Phú, Quận 9, TP.HCM
                                </p>
                            </div>

                            <form className="mt-4 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    className="w-full p-2 border rounded-md text-gray-900 outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Điền email"
                                    className="w-full p-2 border rounded-md text-gray-900 outline-none"
                                />
                                <textarea
                                    placeholder="Thông tin liên hệ hoặc phản ánh"
                                    className="w-full p-2 border rounded-md text-gray-900 outline-none h-20"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="font-bold border border-yellow-600 px-5 py-2 rounded-xl text-yellow-600 w-[120px] hover:bg-yellow-600 hover:text-white transition-all duration-300"
                                >
                                    GỬI NGAY
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage