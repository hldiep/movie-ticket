import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { loginAccount, parseJwt } from '../../util/Helper';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); // Thêm state cho thông báo thành công
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (credentials.username === "admin" && credentials.password === "123") {
            // Lưu thông tin đăng nhập vào localStorage
            const userData = { username: "admin" };
            localStorage.setItem("user", JSON.stringify(userData));

            // Cập nhật AuthContext
            login(userData);

            setSuccess("Đăng nhập thành công! Đang chuyển hướng...");
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } else {
            setError("Tài khoản hoặc mật khẩu không đúng!");
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-main flex justify-center">
            <div className="container max-w-xl w-full">
                <main className="p-8 text-center">
                    <div className='mt-20 text-white'>
                        <span className='uppercase font-bold text-3xl'>Đăng Nhập</span>

                        {/* Hiển thị thông báo lỗi hoặc thành công */}
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        {success && <p className="text-green-500 mt-4">{success}</p>}

                        <form
                            className='border border-yellow-600 mt-8 p-6 rounded-lg shadow-lg'
                            onSubmit={handleSubmit}
                        >
                            <label className="block text-left text-sm">
                                Tài khoản, email hoặc số điện thoại
                                <input
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    className="mt-2 w-full p-2 border rounded-md text-gray-900 outline-none"
                                    required
                                />
                            </label>

                            <label className="block text-left text-sm mt-4">
                                Mật khẩu
                                <div className='relative'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        className="mt-2 w-full p-2 border rounded-md text-gray-900 outline-none"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="text-black absolute inset-y-0 right-3 mt-2 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </label>

                            <div className='text-right mt-4 italic'>
                                <Link to="/forgetPwd" className="text-yellow-600 text-sm">Quên mật khẩu?</Link>
                            </div>
                            <button
                                type="submit"
                                className='mt-6 w-full border border-yellow-600 font-bold py-2 rounded-lg hover:bg-yellow-600'
                            >
                                ĐĂNG NHẬP
                            </button>
                            <div className='flex justify-center mt-4 text-sm'>
                                <p className='italic'>Bạn chưa có tài khoản? Đăng ký</p>
                                <Link to="/register" className='ml-1 italic text-yellow-600'>tại đây</Link>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Login;
