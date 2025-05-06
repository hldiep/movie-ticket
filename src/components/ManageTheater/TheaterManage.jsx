import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialCinemas = [
    { id: 1, name: "CGV Vincom", location: "Vincom Center, Hà Nội", seats: 200, createAt: "12/2/2024" },
    { id: 2, name: "Lotte Cinema", location: "Lotte Tower, Hà Nội", seats: 300, createAt: "13/3/2024" },
    { id: 3, name: "BHD Star", location: "Phạm Ngọc Thạch, Hà Nội", seats: 400, createAt: "14/4/2024" },
    { id: 4, name: "Galaxy Cinema", location: "Nguyễn Du, Hà Nội", seats: 350, createAt: "15/5/2024" }
];
const TheaterManage = () => {
    const navigate = useNavigate();
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

    return (
        <div className='min-h-screen bg-main'>
            <div className='container'>
                <div className='ml-[220px] flex-1 p-10'>
                    <div className="p-6 font-sans text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Quản lý rạp</h1>
                            <button onClick={() => navigate("/quan-ly-rap/them-rap")}
                                className="bg-blue-600 px-4 py-2 rounded text-white">Thêm rạp</button>
                            {/* <button onClick={() => { setShowForm(!showForm); setEditingCinema(null); setCinemaData({ name: "", location: "", seats: "", status: "" }); }}
                                className="bg-blue-600 px-4 py-2 rounded text-white">
                                {showForm ? "Đóng" : "Thêm rạp"}
                            </button> */}
                        </div>
                        {message && (<div className="text-green-500 font-semibold mb-2">{message}</div>)}
                        {showForm && (
                            <form onSubmit={handleSubmit} className="bg-gray-200 text-black p-4 rounded-md mb-4">
                                <h2 className="text-lg font-semibold mb-2">{editingCinema ? "Chỉnh sửa rạp" : "Nhập thông tin rạp"}</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="name" value={cinemaData.name} onChange={handleInputChange} placeholder="Tên rạp" className="p-2 border rounded border-blue-700 outline-none" required />
                                    <input type="text" name="location" value={cinemaData.location} onChange={handleInputChange} placeholder="Địa chỉ" className="p-2 border rounded border-blue-700 outline-none" required />
                                    <input type="text" name="createAt" value={cinemaData.createAt} onChange={handleInputChange} placeholder="Ngày tạo" className="p-2 border rounded border-blue-700 outline-none" required />
                                </div>
                                <button type="submit" className="mt-4 bg-green-600 px-4 py-2 rounded text-white">
                                    {editingCinema ? "Cập nhật" : "Thêm"}
                                </button>
                            </form>
                        )}

                        <table className="w-full border-collapse border border-gray-700">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="p-2 border border-gray-700">Tên rạp</th>
                                    <th className="p-2 border border-gray-700">Địa chỉ</th>
                                    <th className="p-2 border border-gray-700">Ngày tạo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cinemas.map((cinema) => (
                                    <tr key={cinema.id} className="border border-gray-700">
                                        <td onClick={() => navigate('/quan-ly-rap/chi-tiet-rap')}
                                            className="p-2 border border-gray-700">{cinema.name}</td>
                                        <td className="p-2 border border-gray-700">{cinema.location}</td>
                                        <td className="p-2 border border-gray-700">{cinema.createAt}</td>
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