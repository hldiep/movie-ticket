import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClippedDrawer from "../Dashboard/DashboardLayoutBasic";
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
                    <span className="text-gray-700 font-medium">Quản lý rạp</span>
                </div>
                <div className='flex justify-between text-center items-center'>
                    <h2 className="text-xl font-semibold p-4">Quản lý rạp</h2>
                    <button onClick={() => navigate("/quan-ly-rap/them-rap")}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Thêm rạp</button>
                </div>
            </div>
            <div className="p-6 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-[calc(100vh-80px)]">
                <div className='container'>

                    <table className="w-full bg-white shadow-md rounded text-black">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-left">
                                <th className="p-2 border ">Tên rạp</th>
                                <th className="p-2 border ">Địa chỉ</th>
                                <th className="p-2 border ">Ngày tạo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cinemas.map((cinema) => (
                                <tr key={cinema.id} className="border-t hover:bg-gray-50">
                                    <td onClick={() => navigate('/quan-ly-rap/chi-tiet-rap')}
                                        className="p-2 border ">{cinema.name}</td>
                                    <td className="p-2 border ">{cinema.location}</td>
                                    <td className="p-2 border ">{cinema.createAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ClippedDrawer>

    )
}

export default TheaterManage