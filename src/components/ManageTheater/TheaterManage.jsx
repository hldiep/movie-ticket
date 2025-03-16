import React, { useState } from "react";
const initialCinemas = [
    { id: 1, name: "CGV Vincom", location: "Vincom Center, Hà Nội", seats: 200, status: "Đang hoạt động" },
    { id: 2, name: "Lotte Cinema", location: "Lotte Tower, Hà Nội", seats: 300, status: "Đang hoạt động" },
    { id: 3, name: "BHD Star", location: "Phạm Ngọc Thạch, Hà Nội", seats: 400, status: "Đang hoạt động" },
    { id: 4, name: "Galaxy Cinema", location: "Nguyễn Du, Hà Nội", seats: 350, status: "Đang hoạt động" }
];
const TheaterManage = () => {
    const [cinemas, setCinemas] = useState(initialCinemas);
    const [showForm, setShowForm] = useState(false)
    const [editingCinema, setEditingCinema] = useState(null);
    const [message, setMessage] = useState("");
    const [cinemaData, setCinemaData] = useState({
        name: "", location: "", seats: "", status: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCinemaData({ ...cinemaData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingCinema) {
            setCinemas(cinemas.map((cinema) => cinema.id === editingCinema ? { ...cinemaData, id: editingCinema } : cinema));
            setMessage("Cập nhật thông tin thành công!");
        } else {
            setCinemas([...cinemas, { ...cinemaData, id: cinemas.length + 1 }]);
            setMessage("Thêm thành công!");
        }
        setCinemaData({ name: "", location: "", seats: "", status: "" });
        setEditingCinema(null);
        setShowForm(false);

        setTimeout(() => setMessage(""), 3000);
    };
    const handleEdit = (cinema) => {
        setCinemaData(cinema);
        setEditingCinema(cinema.id);
        setShowForm(true);
    }

    const [filterStatus, setFilterStatus] = useState("");
    const filterTheater = filterStatus ? cinemas.filter(cinema => cinema.status === filterStatus) : cinemas;
    return (
        <div className='min-h-screen bg-main'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Quản lý rạp</h1>
                            <button onClick={() => { setShowForm(!showForm); setEditingCinema(null); setCinemaData({ name: "", location: "", seats: "", status: "" }); }}
                                className="bg-blue-600 px-4 py-2 rounded text-white">
                                {showForm ? "Đóng" : "Thêm rạp"}
                            </button>
                        </div>
                        {message && (<div className="text-green-500 font-semibold mb-2">{message}</div>)}
                        {showForm && (
                            <form onSubmit={handleSubmit} className="bg-gray-200 text-black p-4 rounded-md mb-4">
                                <h2 className="text-lg font-semibold mb-2">{editingCinema ? "Chỉnh sửa rạp" : "Nhập thông tin rạp"}</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="name" value={cinemaData.name} onChange={handleInputChange} placeholder="Tên rạp" className="p-2 border rounded border-blue-700 outline-none" required />
                                    <input type="text" name="location" value={cinemaData.location} onChange={handleInputChange} placeholder="Địa chỉ" className="p-2 border rounded border-blue-700 outline-none" required />
                                    <input type="number" name="seats" value={cinemaData.seats} onChange={handleInputChange} placeholder="Số ghế" className="p-2 border rounded border-blue-700 outline-none" required />
                                    <select name='status' value={cinemaData.status} onChange={handleInputChange} className='p-2 border rounded border-blue-700 outline-none' required>
                                        <option value=''>Chọn trạng thái</option>
                                        <option value='Đang hoạt động'>Đang hoạt động</option>
                                        <option value='Không hoạt động'>Không hoạt động</option>
                                    </select>
                                </div>
                                <button type="submit" className="mt-4 bg-green-600 px-4 py-2 rounded text-white">
                                    {editingCinema ? "Cập nhật" : "Thêm"}
                                </button>
                            </form>
                        )}
                        <div className="mb-4 text-right">
                            <select
                                className="bg-gray-700 text-white px-4 py-2 rounded outline-none"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="">Lọc theo trạng thái</option>
                                <option value="Đang hoạt động">Đang hoạt động</option>
                                <option value="Không hoạt động">Không hoạt động</option>
                            </select>
                        </div>
                        <table className="w-full border-collapse border border-gray-700">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="p-2 border border-gray-700">Tên rạp</th>
                                    <th className="p-2 border border-gray-700">Địa chỉ</th>
                                    <th className="p-2 border border-gray-700">Số ghế</th>
                                    <th className="p-2 border border-gray-700">Trạng thái</th>
                                    <th className="p-2 border border-gray-700">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterTheater.map((cinema) => (
                                    <tr key={cinema.id} className="border border-gray-700">
                                        <td className="p-2 border border-gray-700">{cinema.name}</td>
                                        <td className="p-2 border border-gray-700">{cinema.location}</td>
                                        <td className="p-2 border border-gray-700">{cinema.seats}</td>
                                        <td className="p-2 border border-gray-700">
                                            {cinema.status === "Active" ? "Đang hoạt động" : cinema.status === "Inactive" ? "Không hoạt động" : cinema.status}
                                        </td>
                                        <td className="p-2 border border-gray-700">
                                            <div className="flex justify-center items-center gap-4">
                                                <button className="text-yellow-400" onClick={() => handleEdit(cinema)}>Sửa</button>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheaterManage