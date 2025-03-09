import React, { useState } from 'react'
import NavAccount from './NavAccount';

const Account = () => {
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
    return (
        <div className='container flex pt-32'>
            <NavAccount />
            <div className='container'>
                <div className='ml-[220px] p-10'>
                    <h2 className='text-2xl font-bold'>THÔNG TIN KHÁCH HÀNG</h2>
                    <div>
                        <div className="border  mt-4 border-gray-300 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Thông tin cá nhân</h2>
                            <form className="grid grid-cols-2 gap-4">
                                <div >
                                    <label className='block font-semibold mb-1'>Họ và tên</label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Ngày sinh</label>
                                    <input
                                        type='date'
                                        name='dob'
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Số điện thoại</label>
                                    <input
                                        type='text'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Email</label>
                                    <input
                                        type='text'
                                        name='dob'
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="p-2 border w-full rounded outline-none" />
                                </div>

                                <div className="col-span-2 flex justify-center">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Lưu thông tin</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <div className="border  mt-4 border-gray-300 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Đổi mật khẩu</h2>
                            <form className="gap-4">
                                <div >
                                    <label className='block font-semibold mb-1'>Mật khẩu cũ</label>
                                    <input
                                        type='password'
                                        className="p-2 border w-full rounded outline-none" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Mật khẩu mới</label>
                                    <input
                                        type='password'
                                        className="p-2 border w-full rounded outline-none" />
                                </div>
                                <div >
                                    <label className='block font-semibold mb-1'>Xác thực mật khẩu</label>
                                    <input
                                        type='password'
                                        className="p-2 border w-full rounded outline-none" />
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Lưu thông tin</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account