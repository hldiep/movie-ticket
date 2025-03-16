import React, { useState } from 'react'
import NavAccount from './NavAccount';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const InfoAccount = () => {
    const [formData, setFormData] = useState({
        name: "Nguyễn Văn A",
        dob: "2001-03-08",
        phone: "0345637291",
        email: "nva@gmail.com",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thông tin đã được lưu!");
    };

    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };
    return (
        <div className=' bg-main flex pt-32 min-h-screen'>
            <NavAccount />
            <div className='container'>
                <div className=' ml-[220px] p-10 text-white justify-center items-center'>
                    <h2 className='text-2xl font-bold'>THÔNG TIN KHÁCH HÀNG</h2>
                    <div>
                        <div className="border  mt-4 border-yellow-600 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Thông tin cá nhân</h2>
                            <form className="grid grid-cols-2 gap-4">
                                <div >
                                    <label className='block font-semibold mb-1'>Họ và tên</label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none text-black" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Ngày sinh</label>
                                    <input
                                        type='date'
                                        name='dob'
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none text-black" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Số điện thoại</label>
                                    <input
                                        type='text'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none text-black" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Email</label>
                                    <input
                                        type='text'
                                        name='dob'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none text-black" />
                                </div>

                                <div className="col-span-2 flex justify-center mt-5">
                                    <button type="submit" className="px-4 py-2 border border-yellow-600 bg-yellow-600 text-white rounded-xl w-[140px] hover:bg-transparent hover:text-yellow-600 transition-all duration-300">Lưu thông tin</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <div className="border mt-10 border-yellow-600 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Đổi mật khẩu</h2>
                            <form className="space-y-5">
                                <div className="relative">
                                    <label className="block font-semibold mb-1">Mật khẩu cũ</label>
                                    <input
                                        type={showPassword.oldPassword ? "text" : "password"}
                                        className="p-2 border w-full rounded outline-none text-black pr-10"
                                    />
                                    <span
                                        className="absolute right-3 top-10 cursor-pointer text-gray-600"
                                        onClick={() => togglePasswordVisibility("oldPassword")}
                                    >
                                        {showPassword.oldPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="relative">
                                    <label className="block font-semibold mb-1">Mật khẩu mới</label>
                                    <input
                                        type={showPassword.newPassword ? "text" : "password"}
                                        className="p-2 border w-full rounded outline-none text-black pr-10"
                                    />
                                    <span
                                        className="absolute right-3 top-10 cursor-pointer text-gray-600"
                                        onClick={() => togglePasswordVisibility("newPassword")}
                                    >
                                        {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="relative">
                                    <label className="block font-semibold mb-1">Xác thực mật khẩu</label>
                                    <input
                                        type={showPassword.confirmPassword ? "text" : "password"}
                                        className="p-2 border w-full rounded outline-none text-black pr-10"
                                    />
                                    <span
                                        className="absolute right-3 top-10 cursor-pointer text-gray-600"
                                        onClick={() => togglePasswordVisibility("confirmPassword")}
                                    >
                                        {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="mt-5 px-4 py-2 border border-yellow-600 bg-yellow-600 text-white rounded-xl w-[140px] hover:bg-transparent hover:text-yellow-600 transition-all duration-300">Lưu thông tin</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoAccount