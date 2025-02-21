import { Swiper, SwiperSlide } from "swiper/react";
import { FaClock, FaGlobeAmericas, FaFilm } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import React from "react";

const SectionFilming = () => {


    const movies = [
        { id: 1, title: "Bộ tứ báo thủ", image: "/images/bo-tu-bao-thu-official.webp", category: "Hài, tình cảm", duration: "120 phút", country: "Việt Nam", trailer: "https://www.youtube.com/embed/zKMOgOWn8lQ" },
        { id: 2, title: "Nụ hôn bạc tỷ", image: "/images/nu-hon-bac-ty-poster.webp", category: "Hài, tình cảm", duration: "110 phút", country: "Việt Nam", trailer: "https://www.youtube.com/embed/wr6MeifZCUs" },
        { id: 3, title: "Đèn âm hồn", image: "/images/den-am-hon-poster.webp", category: "Hồi hộp, kinh dị", duration: "98 phút", country: "Mỹ", trailer: "https://www.youtube.com/embed/t62Rifc9OXI" },
        { id: 4, title: "Nhóc quậy", image: "/images/nhoc-quay-va-khu-rung-ky-dieu.webp", category: "Hoạt hình", duration: "95 phút", country: "Nhật Bản", trailer: "https://www.youtube.com/embed/kkRPcZfF7cQ" },
        { id: 5, title: "Yêu nhầm bạn thân", image: "/images/yeu-nham-ban-than-poster.webp", category: "Tình cảm, tâm lý", duration: "125 phút", country: "Hàn Quốc", trailer: "https://www.youtube.com/embed/Z7AbUpnfcW8" },
        { id: 6, title: "Đại chiến người khổng lồ: Lần tấn công cuối cùng", image: "/images/AOT.webp", category: "Hoạt hình, anime", duration: "130 phút", country: "Nhật Bản", trailer: "https://www.youtube.com/embed/i1hiyahxa4Y" },
    ];


    return (
        <>
            <div>
                <div className="text-4xl font-bold mt-10 flex items-start justify-center">
                    <span className="text-black">PHIM ĐA</span>
                    <span className="text-yellow-600 relative top-2">NG CHIẾU</span>
                </div>

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
                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-start text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm p-4 text-center">
                                            <h2 className="text-xl font-bold uppercase">{movie.title}</h2>
                                            <p className="text-sm mt-2 flex items-center gap-2">
                                                <FaFilm className="w-4 h-4 text-yellow-400" />
                                                {movie.category}
                                            </p>
                                            <p className="text-sm mt-1 flex items-center gap-2">
                                                <FaClock className="w-4 h-4 text-blue-400" />
                                                {movie.duration}
                                            </p>

                                            <p className="text-sm mt-1 flex items-center gap-2">
                                                <FaGlobeAmericas className="w-4 h-4 text-green-400" />
                                                {movie.country}
                                            </p>
                                        </div>
                                    </div>
                                    <h2 className="text-lg text-white hover:text-yellow-500 uppercase font-semibold text-center mt-3 h-16 overflow-hidden text-ellipsis">
                                        {movie.title}
                                    </h2>
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            onClick={() => window.open(movie.trailer, "_blank")}
                                            className="uppercase text-white border border-white rounded-xl px-5 py-2 hover:bg-gray-900 transition-all duration-300"
                                        >
                                            Xem Trailer
                                        </button>
                                        <button
                                            className="uppercase border border-yellow-600 bg-yellow-600 text-white rounded-xl px-5 py-2 w-[120px] hover:bg-transparent hover:text-yellow-600 transition-all duration-300">
                                            Đặt Vé
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="font-bold uppercase border border-yellow-600 px-5 py-2 rounded-xl text-yellow-600 w-[130px] hover:bg-yellow-600 hover:text-white transition-all duration-300">
                    xem thêm
                </button>
            </div>
        </>
    )
}

export default SectionFilming;