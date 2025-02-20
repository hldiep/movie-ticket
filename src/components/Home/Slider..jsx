import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import React from "react";


const Slider = () => {

    const promotions = [
        { id: 1, image: "/images/pro1.jpg", link: "/promo1" },
        { id: 2, image: "https://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/980wx448h_23_-min.jpg", link: "/promo2" },
        { id: 3, image: "https://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/b_n_sao_c_a_980wx448h_3_.jpg", link: "/promo3" },
        { id: 4, image: "https://images.careerviet.vn/content/images/phim-tet-chieu-rap-careerbuilder-1(2).jpg", link: "/promo4" },
    ];

    return (
        <>
            <div className="rounded-lg mt-14 p-3 m-[20px]">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    autoplay={{delay: 3000, disableOnInteraction: false}} // Thêm autoplay với delay 5 giây
                    modules={[Navigation, Autoplay]} // Import module Autoplay
                    className="my-8 max-h-[150px] md:max-h-[200px] lg:max-h-[400px]"
                >
                    {promotions.map((promo) => (
                        <SwiperSlide key={promo.id}>
                            <img
                                src={promo.image}
                                alt={`Promotion ${promo.id}`}
                                className="w-full rounded-sm h-auto object-cover md:max-h-[200px] lg:max-h-[400px] sm:max-h-[150px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Slider;