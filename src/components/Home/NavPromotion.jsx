import React from 'react'
import "./index.css";
import { useNavigate } from 'react-router-dom';
const promotions = [
    { id: 1, image: "/images/pro1.jpg", link: "/promo1", title: "Mua 1 Tặng 1", description: "Áp dụng cho tất cả các suất chiếu thứ 2 hàng tuần." },
    { id: 2, image: "https://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/980wx448h_23_-min.jpg", link: "/promo2", title: "Ưu Đãi Thành Viên", description: "Giảm 20% giá vé cho thành viên VIP." },
    { id: 3, image: "https://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/b_n_sao_c_a_980wx448h_3_.jpg", link: "/promo3", title: "Combo Siêu Tiết Kiệm", description: "Mua combo bắp nước chỉ từ 49K." },
    { id: 4, image: "https://images.careerviet.vn/content/images/phim-tet-chieu-rap-careerbuilder-1(2).jpg", link: "/promo4", title: "Vé Sinh Viên 45K", description: "Đồng giá 45K/2D cho HSSV/GV/U22 cả tuần tại mọi cụm rạp Cinestar." },
];

const NavPromotion = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen pt-20 bg-main flex justify-center">
            <div className="container px-4">
                <h2 className="text-3xl uppercase font-bold text-center mt-28 blinking-text">
                    Khuyến Mãi Đặc Biệt
                </h2>
                <div className="">
                    {promotions.map((promo) => (
                        <div className=" mt-10 mb-10 items-center">
                            <div className='flex space-x-5'>
                                <img
                                    src={promo.image}
                                    alt={promo.title}
                                    className="w-1/2 h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="text-white ">
                                    <p className="text-lg font-semibold">{promo.title}</p>
                                    <p className="text-sm mt-2">{promo.description}</p>
                                    <button onClick={() => navigate("/payment")}
                                        className="mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-300 text-black hover:text-black font-bold rounded">
                                        ĐẶT VÉ NGAY
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default NavPromotion