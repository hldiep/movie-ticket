import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';
const Header = () => {
    return (
        <div>
            <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
                <div className="text-3xl font-bold uppercase">Movie Ticket</div>
                <div className="flex space-x-4 items-center">
                    <button className="bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-600 text-white font-semibold">
                        Đặt Vé Ngay
                    </button>
                    <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600 text-white font-semibold">
                        Đặt Bắp Nước
                    </button>
                </div>
                <div className="flex items-end w-1/3">
                    <input
                        type="text"
                        placeholder="Tìm kiếm phim..."
                        className="p-3 text-gray-700 border-none outline-none"
                    />
                    <button className="bg-blue-900 p-4 hover:bg-blue-950">
                        <FaSearch className="text-white" />
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center">
                        <FaUser className="mr-2" /> Đăng Nhập
                    </button>
                </div>
            </header>
            <div className="bg-gray-900 py-4 px-8 flex  items-center fixed w-full z-50 shadow-lg justify-end space-x-6 mr-5">
                <a href="#" className="text-white hover:text-orange-500">
                    Khuyến mãi
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                    Chọn rạp
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                    Lịch chiếu
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                    Giới thiệu
                </a>
            </div>
        </div>


    );
}

export default Header