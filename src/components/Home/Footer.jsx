import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 mt-8">
            <div className="container mx-auto grid grid-cols-5 gap-5">
                <div>
                    <div className="text-3xl font-bold uppercase mb-2.5">Movie Ticket</div>

                    <div className="flex space-x-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300">
                            <FaFacebook className="w-6 h-6" />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition duration-300">
                            <FaInstagram className="w-6 h-6" />
                        </a>

                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300">
                            <FaTiktok className="w-6 h-6" />
                        </a>

                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-300">
                            <FaYoutube className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className=''>
                    <h2 className="font-bold text-lg uppercase mb-2.5">TÀI KHOẢN</h2>
                    <a href="" className='hover:text-yellow-500 block mb-2.5'>Đăng nhập</a>
                    <a href="" className='hover:text-yellow-500 block'>Đăng ký</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg uppercase mb-2.5">XEM PHIM</h2>
                    <a href="" className="hover:text-yellow-500 block mb-2.5">Phim đang chiếu</a>
                    <a href="" className="hover:text-yellow-500 block mb-2.5">Phim sắp chiếu</a>
                    <a href="" className="hover:text-yellow-500 block">Suất chiếu đặc biệt</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg uppercase mb-2.5">THÔNG TIN</h2>
                    <a href="" className='hover:text-yellow-500 block mb-2.5'>Giới thiệu</a>
                    <a href="" className='hover:text-yellow-500 block mb-2.5'>Liên hệ</a>
                    <a href="" className='hover:text-yellow-500 block'>Tuyển dụng</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg uppercase mb-2.5">HỆ THỐNG RẠP</h2>
                    <a href="" className='hover:text-yellow-500 block mb-2.5'>Cinestar Quốc Thanh</a>
                    <a href="" className='hover:text-yellow-500 block mb-2.5'>Cinestar Hai Bà Trưng (TP.HCM)</a>
                    <a href="" className='hover:text-yellow-500block'>Cinestar Sinh Viên (Bình Dương)</a>
                </div>


            </div>
            <br />
            <hr className="border-white opacity-50 mb-4 mx-8" />

            <div className="container mx-auto px-8 text-center">
                <p className="text-sm">&copy; 2025 MoviesTicket. All rights reserved.</p>
                <div className="flex justify-center space-x-8 mt-4">
                    <a href="#" className=" hover:text-yellow-500 transition">Chính sách bảo mật</a>
                    <a href="#" className=" hover:text-yellow-500 transition">Tin điện ảnh</a>
                    <a href="#" className=" hover:text-yellow-500 transition">Hỏi và đáp</a>
                </div>

                <div className="mt-6">

                    <p className="text-xs mt-2">
                        CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM - RẠP CHIẾU PHIM <br />
                        Địa chỉ: 97 Đường Man Thiện, Phường Hiệp Phú, Quận 9, TP. Hồ Chí Minh <br />
                        GIẤY CNĐKDN SỐ: 0123456789 cấp bởi Sở KH&ĐT TP.HCM
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer