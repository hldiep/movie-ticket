import React from 'react';
import { FaCalendarAlt, FaChartBar, FaFilm, FaList, FaPlus, FaTheaterMasks, FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className='container flex pt-16'>
            <div className={`bg-gray-900 fixed z-50 text-white p-4 flex flex-col h-screen transition-all duration-500 ease-in-out`}>
                <div className='transition-opacity duration-500 ease-in-out '>
                    <nav>
                        <div>
                            <NavLink to="/quan-ly-phim"
                                className="flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                                <FaFilm className="mr-3" /> Quản lý phim
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/quan-ly-rap"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FaTheaterMasks className='mr-3' />Quản lý rạp chiếu phim
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/quan-ly-lich-chieu"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FaCalendarAlt className='mr-3' />Quản lý lịch chiếu phim
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/bao-cao-chi-tiet"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FaChartBar className="mr-3" /> Báo cáo chi tiết
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/bao-cao-so-luong-ve"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FaChartBar className="mr-3" /> Báo cáo số lượng vé
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/quan-ly-nv"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FaUser className="mr-3" /> Quản lý nhân viên
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/quan-ly-kh"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FaUser className="mr-3" /> Quản lý khách hàng
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
