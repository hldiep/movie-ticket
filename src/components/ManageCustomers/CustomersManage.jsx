import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CustomersManage = () => {
    const { register, handleSubmit, reset } = useForm();
    const [customers, setCustomers] = useState([
        { id: 1, name: "Hoàng Văn D", email: "hoangvand@example.com", phone: "0987654321" },
        { id: 2, name: "Phạm Thị E", email: "phamthie@example.com", phone: "0976543210" },
        { id: 3, name: "Trịnh Văn F", email: "trinhvanf@example.com", phone: "0965432109" }
    ]);

    const onSubmit = (data) => {
        setCustomers([...customers, { ...data, id: customers.length + 1 }]);
        reset();
    };

    const handleDelete = (id) => {
        setCustomers(customers.filter(customer => customer.id !== id));
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='container'>
                <div className='ml-[220px] flex flex-1 p-10'>
                    <div className="p-6 font-sans">
                        <h2 className="text-xl font-bold mb-4">Quản lý khách hàng</h2>
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
                                <input placeholder="Tên khách hàng" {...register("name")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Email" type="email" {...register("email")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Số điện thoại" type="tel" {...register("phone")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <div className="col-span-2 flex justify-center">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Thêm khách hàng</button>
                                </div>
                            </form>
                        </div>

                        <table className="w-full mt-6 border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Tên khách hàng</th>
                                    <th className="border border-gray-300 p-2">Email</th>
                                    <th className="border border-gray-300 p-2">Số điện thoại</th>
                                    <th className="border border-gray-300 p-2">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="odd:bg-white even:bg-gray-100">
                                        <td className="border border-gray-300 p-2">{customer.name}</td>
                                        <td className="border border-gray-300 p-2">{customer.email}</td>
                                        <td className="border border-gray-300 p-2">{customer.phone}</td>
                                        <td className="border border-gray-300 p-2">
                                            <button onClick={() => handleDelete(customer.id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Xóa</button>
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

export default CustomersManage;
