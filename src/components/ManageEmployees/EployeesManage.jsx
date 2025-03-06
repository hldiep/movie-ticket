import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EmployeesManage = () => {
    const { register, handleSubmit, reset } = useForm();
    const [employees, setEmployees] = useState([
        { id: 1, name: "Nguyễn Văn A", position: "Quản lý", email: "nguyenvana@example.com" },
        { id: 2, name: "Trần Thị B", position: "Nhân viên bán vé", email: "tranthib@example.com" },
        { id: 3, name: "Lê Văn C", position: "Nhân viên kỹ thuật", email: "levanc@example.com" }
    ]);

    const onSubmit = (data) => {
        setEmployees([...employees, { ...data, id: employees.length + 1 }]);
        reset();
    };

    const handleDelete = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='container'>
                <div className='ml-[220px] flex flex-1 p-10'>
                    <div className="p-6 font-sans">
                        <h2 className="text-xl font-bold mb-4">Quản lý nhân viên</h2>
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
                                <input placeholder="Tên nhân viên" {...register("name")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Chức vụ" {...register("position")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Email" type="email" {...register("email")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <div className="col-span-2 flex justify-center">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Thêm nhân viên</button>
                                </div>
                            </form>
                        </div>

                        <table className="w-full mt-6 border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Tên nhân viên</th>
                                    <th className="border border-gray-300 p-2">Chức vụ</th>
                                    <th className="border border-gray-300 p-2">Email</th>
                                    <th className="border border-gray-300 p-2">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr key={employee.id} className="odd:bg-white even:bg-gray-100">
                                        <td className="border border-gray-300 p-2">{employee.name}</td>
                                        <td className="border border-gray-300 p-2">{employee.position}</td>
                                        <td className="border border-gray-300 p-2">{employee.email}</td>
                                        <td className="border border-gray-300 p-2">
                                            <button onClick={() => handleDelete(employee.id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Xóa</button>
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
