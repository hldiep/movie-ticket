import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ClippedDrawer from "../Dashboard/DashboardLayoutBasic";
import { useNavigate } from "react-router-dom";
const initialEmployees = [
    { id: 1, name: "Nguyễn Văn A", position: "Quản lý", cccd: "123423211", account_user_name: "nva", email: "nguyenvana@example.com" },
    { id: 2, name: "Trần Thị B", position: "Nhân viên", cccd: "123423211", account_user_name: "ttb", email: "tranthib@example.com" },
    { id: 3, name: "Lê Văn C", position: "Nhân viên kỹ thuật", cccd: "123423211", account_user_name: "lvc", email: "levanc@example.com" }
];
const EmployeesManage = () => {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState(initialEmployees);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);
    const [message, setMessage] = useState("");
    const [employeesData, setEmployeesData] = useState({
        name: "", position: "", cccd: "", account_user_name: "", email: "", status: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeesData({ ...employeesData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            setEmployees(employees.map(emp => emp.id === editing ? { ...employeesData, id: editing } : emp));
            setMessage("Cập nhật thông tin thành công!");
        } else {
            setEmployees([...employees, { ...employeesData, id: employees.length + 1 }]);
            setMessage("Thêm thành công!");
        }

        setEmployeesData({ name: "", position: "", cccd: "", account_user_name: "", email: "", status: "" });
        setEditing(null);
        setShowForm(false);

        setTimeout(() => setMessage(""), 3000);
    };

    const handleEdit = (employee) => {
        setEmployeesData({
            name: employee.name,
            position: employee.position,
            cccd: employee.cccd,
            account_user_name: employee.account_user_name,
            email: employee.email,
            status: employee.status || "Active" // Giá trị mặc định
        });
        setEditing(employee.id);
        setShowForm(true);
    };


    return (
        <ClippedDrawer>
            <div className="sticky top-16 z-10 bg-white border-b shadow-sm">
                <div className="flex items-center text-sm text-gray-600 space-x-2 px-4 pt-2">
                    <button
                        onClick={() => navigate('/admin')}
                        className="hover:underline text-blue-600"
                    >
                        Dashboard
                    </button>
                    <span>/</span>
                    <span className="text-gray-700 font-medium">Quản lý nhân viên</span>
                </div>
                <div className="flex justify-between items-center text-center">
                    <h2 className="text-xl font-semibold p-4">Quản lý nhân viên</h2>
                    <button onClick={() => { setShowForm(!showForm); setEditing(null); setEmployeesData({ name: "", position: "", cccd: "", account_user_name: "", email: "" }) }}
                        className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white mb-4'>
                        Thêm nhân viên
                    </button>
                </div>
            </div>
            <div className="p-6 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-[calc(100vh-80px)]">
                <div className='container'>
                    {message && <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">{message}</div>}
                    {showForm && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-8 rounded-lg w-full max-w-2xl shadow-lg">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                        {editing ? "Chỉnh sửa thông tin nhân viên" : "Thêm nhân viên mới"}
                                    </h2>
                                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                                        <div className="flex flex-col">
                                            <label className="mb-1">Họ tên</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={employeesData.name}
                                                onChange={handleInputChange}
                                                placeholder="Nhập họ tên"
                                                className="p-2 border rounded outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="mb-1">Chức vụ</label>
                                            <input
                                                type="text"
                                                name="position"
                                                value={employeesData.position}
                                                onChange={handleInputChange}
                                                placeholder="Nhập chức vụ"
                                                className="p-2 border rounded outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="mb-1">CCCD</label>
                                            <input
                                                type="text"
                                                name="cccd"
                                                value={employeesData.cccd}
                                                onChange={handleInputChange}
                                                placeholder="Nhập CCCD"
                                                className="p-2 border rounded outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="mb-1">Tên tài khoản</label>
                                            <input
                                                type="text"
                                                name="account_user_name"
                                                value={employeesData.account_user_name}
                                                onChange={handleInputChange}
                                                placeholder="Nhập tên tài khoản"
                                                className="p-2 border rounded outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={employeesData.email}
                                                onChange={handleInputChange}
                                                placeholder="Nhập email"
                                                className="p-2 border rounded outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="mb-1">Trạng thái</label>
                                            <select
                                                name="status"
                                                value={employeesData.status}
                                                onChange={handleInputChange}
                                                className="p-2 border rounded outline-none"
                                                required
                                            >
                                                <option value="">Chọn trạng thái</option>
                                                <option value="Active">Hoạt động</option>
                                                <option value="Inactive">Không hoạt động</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-4 mt-6">
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                                        >
                                            {editing ? "Cập nhật" : "Thêm mới"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <table className="w-full bg-white shadow-md rounded text-black">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-left">
                                <th className='p-2'>Họ tên</th>
                                <th className='p-2'>Chức vụ</th>
                                <th className='p-2'>CCCD</th>
                                <th className='p-2'>Tên tài khoản</th>
                                <th className='p-2'>Email</th>
                                <th className='p-2'>Trạng thái</th>
                                <th className='p-2'>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id} className="border-t hover:bg-gray-50">
                                    <td className='p-2'>{employee.name}</td>
                                    <td className='p-2'>{employee.position}</td>
                                    <td className='p-2'>{employee.cccd}</td>
                                    <td className='p-2'>{employee.account_user_name}</td>
                                    <td className='p-2'>{employee.email}</td>
                                    <td className='p-2'>{employee.status}</td>
                                    <td className='p-2'>
                                        <button onClick={() => handleEdit(employee)} className='text-yellow-400 mx-2'>Sửa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ClippedDrawer>
    );
};

export default EmployeesManage;
