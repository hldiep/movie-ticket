import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const initialCustomers = [
    { id: 1, email: "john@example.com", name: "John Doe", phone_number: "0123456789", timestamp: "2025-03-12", account_user_name: "john_doe", status: "Active" },
    { id: 2, email: "alice@example.com", name: "Alice Smith", phone_number: "0987654321", timestamp: "2025-03-10", account_user_name: "alice_smith", status: "Inactive" }
];
const CustomersManage = () => {
    const [customers, setCustomers] = useState(initialCustomers);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);
    const [message, setMessage] = useState("");
    const [customerData, setCustomerData] = useState({
        email: "", name: "", phone_number: "", timestamp: "", account_user_name: "", status: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData({ ...customerData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            setCustomers(customers.map(customer => customer.id === editing ? { ...customerData, id: editing } : customer));
            setMessage("Cập nhật thông tin thành công!");
        } else {
            setCustomers([...customers, { ...customerData, id: customers.length + 1 }]);
            setMessage("Thêm khách hàng thành công!")
        }
        setCustomerData({ email: "", name: "", phone_number: "", timestamp: "", account_user_name: "", status: "" });
        setEditing(null);
        setShowForm(false);

        setTimeout(() => setMessage(""), 3000);
    };

    const handleEdit = (customer) => {
        setCustomerData(customer);
        setEditing(customer.id);
        setShowForm(true);
    };

    const [searchPhone, setSearchPhone] = useState("");
    const handleSearch = () => {
        setCustomers(
            initialCustomers.filter((customer) =>
                customer.phone_number.includes(searchPhone)
            )
        );
    }

    return (
        <div className='min-h-screen bg-main text-white'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans ">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Quản lý khách hàng</h1>
                            <button onClick={() => { setShowForm(!showForm); setEditing(null); setCustomerData({ email: "", name: "", phone_number: "", timestamp: "", account_user_name: "", status: "" }) }}
                                className='bg-blue-600 px-4 py-2 rounded text-white mb-4'>
                                Thêm khách hàng
                            </button>
                        </div>
                        {message &&
                            <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
                                {message}
                            </div>}
                        {showForm && (
                            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                <div className="bg-gray-800 p-8 rounded-lg w-1/3 text-black">
                                    <form onSubmit={handleSubmit} >
                                        <h2 className='text-2xl font-bold mb-4 text-white'>{editing ? "Chỉnh sửa khách hàng" : "Nhập thông tin khách hàng"}</h2>
                                        <input type='email' name='email' value={customerData.email} onChange={handleInputChange} placeholder='Email' className='block mb-3 p-2 w-full outline-none' required />
                                        <input type='text' name='name' value={customerData.name} onChange={handleInputChange} placeholder='Tên' className='block mb-3 p-2 w-full outline-none' required />
                                        <input type='text' name='phone_number' value={customerData.phone_number} onChange={handleInputChange} placeholder='Số điện thoại' className='block mb-3 p-2 w-full outline-none' required />
                                        <input type='text' name='account_user_name' value={customerData.account_user_name} onChange={handleInputChange} placeholder='Tên tài khoản' className='block mb-3 p-2 w-full outline-none' required />
                                        <select name='status' value={customerData.status} onChange={handleInputChange} className='block mb-3 p-2 w-full outline-none' required>
                                            <option value=''>Chọn trạng thái</option>
                                            <option value='Active'>Hoạt động</option>
                                            <option value='Inactive'>Không hoạt động</option>
                                        </select>
                                        <button type='submit' className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white mt-2 w-full'>
                                            {editing ? "Cập nhật" : "Thêm"}
                                        </button>
                                        <button type='button' onClick={() => setShowForm(false)} className='mt-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white w-full'>Hủy</button>
                                    </form>
                                </div>
                            </div>

                        )}
                        <div className="text-right text-black mb-5">
                            <input
                                type="text"
                                placeholder="Nhập sđt: "
                                className="p-2 outline-none rounded-lg"
                                value={searchPhone}
                                onChange={(e) => setSearchPhone(e.target.value)} />
                            <button className="p-3" onClick={handleSearch}>
                                <FaSearch className="text-white" />
                            </button>
                        </div>
                        <table className='w-full border-collapse border border-gray-700'>
                            <thead>
                                <tr className='bg-gray-800 text-left'>
                                    <th className='p-2 border border-gray-700'>Email</th>
                                    <th className='p-2 border border-gray-700'>Tên</th>
                                    <th className='p-2 border border-gray-700'>Số điện thoại</th>
                                    <th className='p-2 border border-gray-700'>Tên tài khoản</th>
                                    <th className='p-2 border border-gray-700'>Trạng thái</th>
                                    <th className='p-2 border border-gray-700'>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer.id} className='border border-gray-700'>
                                        <td className='p-2 border border-gray-700'>{customer.email}</td>
                                        <td className='p-2 border border-gray-700'>{customer.name}</td>
                                        <td className='p-2 border border-gray-700'>{customer.phone_number}</td>
                                        <td className='p-2 border border-gray-700'>{customer.account_user_name}</td>
                                        <td className='p-2 border border-gray-700'>{customer.status}</td>
                                        <td className='p-2 border border-gray-700'>
                                            <button onClick={() => handleEdit(customer)} className='text-yellow-400 mx-2'>Sửa</button>
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
