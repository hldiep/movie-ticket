import { useState } from 'react'
import { Menu, X } from "lucide-react";
import { FaSearch, FaUser } from 'react-icons/fa';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-lg font-sans">
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between text-white py-5 px-8 w-full">
                    <div className="text-3xl font-bold uppercase">Movie Ticket</div>
                    <div className="hidden md:flex items-center rounded-xl overflow-hidden w-1/3 bg-white">
                        <input
                            type="text"
                            placeholder="Tìm kiếm phim..."
                            className="p-2 text-gray-700 outline-none flex-1"
                        />
                        <button className="p-3">
                            <FaSearch className="text-black" />
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <button className="border hover:bg-gray-600 px-5 py-2 w-32 text-center rounded-lg font-semibold">
                            Đăng nhập
                        </button>
                        <button className="border hover:bg-gray-600 px-5 py-2 w-32 text-center rounded-lg font-semibold">
                            Đăng ký
                        </button>
                    </div>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <nav className="bg-gray-900 py-2 px-8">
                    <div className="flex justify-center md:justify-between items-center">

                        <div className="hidden md:flex space-x-6 ">
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Khuyến mãi
                            </a>
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Chọn rạp
                            </a>
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Lịch chiếu
                            </a>
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Giới thiệu
                            </a>
                        </div>
                    </div>

                    {/* Menu Mobile */}
                    {isOpen && (
                        <div className="md:hidden flex flex-col mt-3 space-y-3 bg-gray-800 p-4 rounded-lg">
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Khuyến mãi
                            </a>
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Chọn rạp
                            </a>
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Lịch chiếu
                            </a>
                            <a href="#" className="text-white hover:text-yellow-500 hover:underline">
                                Giới thiệu
                            </a>

                            <div className="flex flex-col space-y-2 mt-4">
                                <button className="border border-white px-5 py-2 rounded-lg text-white hover:bg-gray-700">
                                    Đăng nhập
                                </button>
                                <button className="border border-white px-5 py-2 rounded-lg text-white hover:bg-gray-700">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header