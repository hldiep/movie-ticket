import React, { useState } from "react";
import { useForm } from "react-hook-form";
const initialEmployees = [
    { id: 1, name: "Nguyễn Văn A", position: "Quản lý", cccd: "123423211", account_user_name: "nva", email: "nguyenvana@example.com" },
    { id: 2, name: "Trần Thị B", position: "Nhân viên", cccd: "123423211", account_user_name: "ttb", email: "tranthib@example.com" },
    { id: 3, name: "Lê Văn C", position: "Nhân viên kỹ thuật", cccd: "123423211", account_user_name: "lvc", email: "levanc@example.com" }
];
const EmployeesManage = () => {
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
        <div className='min-h-screen bg-main text-white'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans ">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Quản lý nhân viên</h1>
                            <button onClick={() => { setShowForm(!showForm); setEditing(null); setEmployeesData({ name: "", position: "", cccd: "", account_user_name: "", email: "" }) }}
                                className='bg-blue-600 px-4 py-2 rounded text-white mb-4'>
                                {showForm ? "Đóng" : "Thêm nhân viên"}
                            </button>
                        </div>
                        {message && <div className="text-green-500 font-semibold mb-2">{message}</div>}
                        {showForm && (
                            <form onSubmit={handleSubmit} className='bg-gray-200 text-black p-4 rounded-md mb-4'>
                                <h2 className='text-lg font-semibold mb-2'>{editing ? "Chỉnh sửa thông tin" : "Nhập thông tin nhân viên"}</h2>
                                <div className='grid grid-cols-2 gap-4'>
                                    <input type='text' name='name' value={employeesData.name} onChange={handleInputChange} placeholder='Họ tên' className='p-2 border rounded border-blue-700 outline-none' required />
                                    <input type='text' name='position' value={employeesData.position} onChange={handleInputChange} placeholder='Chức vụ' className='p-2 border rounded border-blue-700 outline-none' required />
                                    <input type="text" name="cccd" value={employeesData.cccd} onChange={handleInputChange} placeholder="CCCD" className='p-2 border rounded border-blue-700 outline-none' required />
                                    <input type='text' name='account_user_name' value={employeesData.account_user_name} onChange={handleInputChange} placeholder='Tên tài khoản' className='p-2 border rounded border-blue-700 outline-none' required />
                                    <input type='email' name='email' value={employeesData.email} onChange={handleInputChange} placeholder='Email' className='p-2 border rounded border-blue-700 outline-none' required />
                                    <select name='status' value={employeesData.status} onChange={handleInputChange} className='p-2 border rounded border-blue-700 outline-none' required>
                                        <option value=''>Chọn trạng thái</option>
                                        <option value='Active'>Hoạt động</option>
                                        <option value='Inactive'>Không hoạt động</option>
                                    </select>
                                </div>
                                <button type='submit' className='mt-4 bg-green-600 px-4 py-2 rounded text-white'>
                                    {editing ? "Cập nhật" : "Thêm"}
                                </button>
                            </form>
                        )}

                        <table className='w-full border-collapse border border-gray-700'>
                            <thead>
                                <tr className='bg-gray-800 text-left'>
                                    <th className='p-2 border border-gray-700'>Họ tên</th>
                                    <th className='p-2 border border-gray-700'>Chức vụ</th>
                                    <th className='p-2 border border-gray-700'>CCCD</th>
                                    <th className='p-2 border border-gray-700'>Tên tài khoản</th>
                                    <th className='p-2 border border-gray-700'>Email</th>
                                    <th className='p-2 border border-gray-700'>Trạng thái</th>
                                    <th className='p-2 border border-gray-700'>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr key={employee.id} className='border border-gray-700'>
                                        <td className='p-2 border border-gray-700'>{employee.name}</td>
                                        <td className='p-2 border border-gray-700'>{employee.position}</td>
                                        <td className='p-2 border border-gray-700'>{employee.cccd}</td>
                                        <td className='p-2 border border-gray-700'>{employee.account_user_name}</td>
                                        <td className='p-2 border border-gray-700'>{employee.email}</td>
                                        <td className='p-2 border border-gray-700'>{employee.status}</td>
                                        <td className='p-2 border border-gray-700'>
                                            <button onClick={() => handleEdit(employee)} className='text-yellow-400 mx-2'>Sửa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeesManage;
