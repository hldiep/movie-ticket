import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-8">
            <div className="container mx-auto grid grid-cols-5 gap-5">
                <div>
                    <div className="text-3xl font-bold uppercase">Movie Ticket</div>

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
                <div>
                    <h2 className="font-bold text-lg uppercase">TÀI KHOẢN</h2>
                    <a href="" className='hover:text-orange-500'>Đăng nhập</a><br />
                    <a href="" className='hover:text-orange-500'>Đăng ký</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg uppercase">XEM PHIM</h2>
                    <a href="" className='hover:text-orange-500'>Phim đang chiếu</a><br />
                    <a href="" className='hover:text-orange-500'>Phim sắp chiếu</a><br />
                    <a href="" className='hover:text-orange-500'>Suất chiếu đặc biệt</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg uppercase">THÔNG TIN</h2>
                    <a href="" className='hover:text-orange-500'>Giới thiệu</a><br />
                    <a href="" className='hover:text-orange-500'>Liên hệ</a><br />
                    <a href="" className='hover:text-orange-500'>Tuyển dụng</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg uppercase">HỆ THỐNG RẠP</h2>
                    <a href="" className='hover:text-orange-500'>Cinestar Quốc Thanh</a><br />
                    <a href="" className='hover:text-orange-500'>Cinestar Hai Bà Trưng (TP.HCM)</a><br />
                    <a href="" className='hover:text-orange-500'>Cinestar Sinh Viên (Bình Dương)</a>
                </div>


            </div>
            <br />
            <hr className="border-white opacity-50 mb-4 mx-8" />

            <div className="container mx-auto px-8 text-center">
                <p className="text-sm">&copy; 2025 MoviesTicket. All rights reserved.</p>
                <div className="flex justify-center space-x-8 mt-4">
                    <a href="#" className=" hover:text-orange-500 transition">Chính sách bảo mật</a>
                    <a href="#" className=" hover:text-orange-500 transition">Tin điện ảnh</a>
                    <a href="#" className=" hover:text-orange-500 transition">Hỏi và đáp</a>
                </div>

                <div className="mt-6">

                    <p className="text-xs mt-2">
                        CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM - RẠP CHIẾU PHIM <br />
                        Địa chỉ: 97 Đường Man Thiện, Phường Hiệp Phú, Quận 9, TP. Hồ Chí Minh <br />
                        GIẤY CNĐKDN SỐ: 0312742744cấp bởi Sở KH&ĐT TP.HCM
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer