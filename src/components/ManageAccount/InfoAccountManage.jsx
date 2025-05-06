import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InfoAccountManage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "Nguyễn Văn A",
        dob: "2001-03-08",
        phone: "0345637291",
        email: "nva@gmail.com",
    });
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSubmitInfo = (e) => {
        e.preventDefault();
        alert("Thông tin đã được lưu!");
        setIsEditing(false);
    };

    const handleSubmitPassword = (e) => {
        e.preventDefault();
        if (passwords.newPassword === passwords.oldPassword) {
            alert("Mật khẩu mới không được trùng với mật khẩu cũ.");
            return;
        }
        if (passwords.newPassword !== passwords.confirmPassword) {
            alert("Xác thực mật khẩu không trùng khớp.");
            return;
        }
        alert("Đổi mật khẩu thành công!");
        setIsChangingPassword(false);
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <div className='min-h-screen bg-main pt-20 p-8 text-white'>
            <div className='container'>
                <div className=' ml-[220px] p-10 text-white justify-center items-center'>
                    <h2 className='text-2xl font-bold mb-6'>THÔNG TIN TÀI KHOẢN</h2>

                    <div className="border border-blue-700 p-6 rounded-lg shadow-md">
                        <div className="flex justify-end mb-4 space-x-4">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-xl hover:bg-blue-700 hover:text-white transition-all"
                            >
                                Chỉnh sửa
                            </button>
                            <button
                                onClick={() => {
                                    setIsChangingPassword(true);
                                    setPasswords({ oldPassword: "", newPassword: "", confirmPassword: "" });
                                }}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-xl hover:bg-blue-700 hover:text-white transition-all"
                            >
                                Đổi mật khẩu
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-semibold">Họ và tên</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    readOnly
                                    className="p-2 border rounded w-full text-black"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Ngày sinh</label>
                                <input
                                    type="date"
                                    value={formData.dob}
                                    readOnly
                                    className="p-2 border rounded w-full text-black"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Số điện thoại</label>
                                <input
                                    type="text"
                                    value={formData.phone}
                                    readOnly
                                    className="p-2 border rounded w-full text-black"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Email</label>
                                <input
                                    type="text"
                                    value={formData.email}
                                    readOnly
                                    className="p-2 border rounded w-full text-black"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal chỉnh sửa thông tin */}
            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-8 w-[500px] text-black shadow-lg relative">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="absolute top-3 right-3 text-red-600 text-2xl font-bold"
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-bold mb-6 text-yellow-600">Chỉnh sửa thông tin</h3>
                        <form onSubmit={handleSubmitInfo} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-semibold">Họ và tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Ngày sinh</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Số điện thoại</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-yellow-600 text-white rounded-xl hover:bg-transparent hover:text-yellow-600 border border-yellow-600 transition-all"
                                >
                                    Lưu
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal đổi mật khẩu */}
            {isChangingPassword && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-8 w-[500px] text-black shadow-lg relative">
                        <button
                            onClick={() => setIsChangingPassword(false)}
                            className="absolute top-3 right-3 text-red-600 text-2xl font-bold"
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-bold mb-6 text-yellow-600">Đổi mật khẩu</h3>
                        <form onSubmit={handleSubmitPassword} className="space-y-5">
                            {['oldPassword', 'newPassword', 'confirmPassword'].map((field, idx) => (
                                <div key={idx} className="relative">
                                    <label className="block mb-1 font-semibold">
                                        {field === 'oldPassword' ? 'Mật khẩu cũ' :
                                            field === 'newPassword' ? 'Mật khẩu mới' :
                                                'Xác thực mật khẩu'}
                                    </label>
                                    <input
                                        type={showPassword[field] ? "text" : "password"}
                                        name={field}
                                        value={passwords[field]}
                                        onChange={handleInputChange}
                                        className="p-2 border rounded w-full text-black pr-10"
                                    />
                                    <span
                                        className="absolute right-3 top-10 cursor-pointer text-gray-600"
                                        onClick={() => togglePasswordVisibility(field)}
                                    >
                                        {showPassword[field] ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            ))}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-yellow-600 text-white rounded-xl hover:bg-transparent hover:text-yellow-600 border border-yellow-600 transition-all"
                                >
                                    Lưu mật khẩu
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoAccountManage;
