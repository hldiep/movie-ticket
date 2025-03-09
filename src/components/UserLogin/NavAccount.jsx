import React, { useState } from 'react'
import { FaHistory, FaUser, FaUserCircle } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'
const NavAccount = () => {
    const [image, setImage] = useState(null);
    const username = "Nguyen Van A";

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        else {
            alert("Vui lòng chọn một tệp hình ảnh hợp lệ (png, jpg, jpeg).");
        }
    };
    return (
        <div>
            <div className={`bg-gray-900 fixed z-50 text-white p-4 flex flex-col h-screen transition-all duration-500 ease-in-out`}>
                <div className='transition-opacity duration-500 ease-in-out '>
                    <div className='flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white'>
                        <label className='cursor-pointer relative'>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleImageChange}
                            />
                            {image ? (
                                <img src={image} alt="Avatar" className='w-10 h-10 rounded-full border-2 border-white' />
                            ) : (
                                <FaUserCircle className='w-10 h-10 text-white' />
                            )
                            }
                            <input type="file" className='hidden' accept='image/*' onChange={handleImageChange} />
                        </label>
                        <div className='flex flex-col'>
                            <p className='font-semibold'>{username}</p>
                            <label className='text-xs text-blue-300 cursor-pointer hover:underline'>
                                <input
                                    type="file"
                                    className='hidden'
                                    accept='image/png, image/jpeg, image/jpg'
                                    onChange={handleImageChange} />
                                Thay đổi ảnh đại diện
                            </label>
                        </div>
                    </div>
                    <nav>
                        <div>
                            <NavLink to="/account"
                                className="flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                                <FaUser className="mr-3" />Thông tin khách hàng
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/lich-su-mua-hang"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FaHistory className="mr-3" />Lịch sử mua hàng
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/"
                                className='flex items-center w-full p-3 mt-1 bg-blue-600 rounded-md transition-transform duration-300 transform hover:scale-105'>
                                <FiLogOut className="mr-3" />Đăng xuất
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavAccount