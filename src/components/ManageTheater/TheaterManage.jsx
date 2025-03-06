import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const TheaterManage = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [cinemas, setCinemas] = useState([]);
    const [selectedCinema, setSelectedCinema] = useState(null);

    useEffect(() => {
        // Dữ liệu giả
        const fakeCinemas = [
            {
                id: 1, name: "CGV Vincom", address: "Vincom Center, Hà Nội", rooms: ["Phòng 1", "Phòng 2", "Phòng 3"]
            },
            {
                id: 2, name: "Lotte Cinema", address: "Lotte Tower, Hà Nội", rooms: ["Phòng A", "Phòng B"]
            }
        ];
        setCinemas(fakeCinemas);
    }, []);

    const onSubmit = (data) => {
        const formattedData = { ...data, rooms: data.rooms.split(",") };
        if (selectedCinema) {
            setCinemas(cinemas.map(c => c.id === selectedCinema.id ? { ...formattedData, id: c.id } : c));
            setSelectedCinema(null);
        } else {
            setCinemas([...cinemas, { ...formattedData, id: cinemas.length + 1 }]);
        }
        reset();
    };

    const handleRowClick = (cinema) => {
        setSelectedCinema(cinema);
        setValue("name", cinema.name);
        setValue("address", cinema.address);
        setValue("rooms", cinema.rooms.join(", "));
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='container'>
                <div className='ml-[220px] flex flex-1 p-10'>
                    <div className="p-6 font-sans">
                        <h2 className="text-xl font-bold mb-4">Quản lý rạp</h2>
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md ">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 ">
                                <input placeholder="Tên rạp" {...register("name")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Địa chỉ" {...register("address")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <input placeholder="Danh sách phòng (cách nhau bởi dấu phẩy)" {...register("rooms")} required className="p-2 border border-gray-300 rounded outline-none" />
                                <div className="col-span-2 flex justify-center">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        {selectedCinema ? "Cập nhật rạp" : "Thêm rạp"}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <table className="w-full mt-6 border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Tên rạp</th>
                                    <th className="border border-gray-300 p-2">Địa chỉ</th>
                                    <th className="border border-gray-300 p-2">Số phòng</th>
                                    <th className="border border-gray-300 p-2">Danh sách phòng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cinemas.map((cinema) => (
                                    <tr key={cinema.id} className="odd:bg-white even:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(cinema)}>
                                        <td className="border border-gray-300 p-2">{cinema.name}</td>
                                        <td className="border border-gray-300 p-2">{cinema.address}</td>
                                        <td className="border border-gray-300 p-2">{cinema.rooms.length}</td>
                                        <td className="border border-gray-300 p-2">{cinema.rooms.join(", ")}</td>
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