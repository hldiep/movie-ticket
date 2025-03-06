import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ShowtimesManage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showtimes, setShowtimes] = useState([
    { id: 1, city: "Hà Nội", cinemaName: "CGV Vincom", roomName: "Phòng 1", movieName: "Avengers: Endgame", time: "2025-03-10T19:00" },
    { id: 2, city: "TP Hồ Chí Minh", cinemaName: "Lotte Cinema", roomName: "Phòng 2", movieName: "Inception", time: "2025-03-11T20:30" },
    { id: 3, city: "Đà Nẵng", cinemaName: "BHD Star", roomName: "Phòng 3", movieName: "Interstellar", time: "2025-03-12T18:45" }
  ]);

  const onSubmit = (data) => {
    setShowtimes([...showtimes, { ...data, id: showtimes.length + 1 }]);
    reset();
  };

  const handleDelete = (id) => {
    setShowtimes(showtimes.filter(showtime => showtime.id !== id));
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container'>
        <div className='ml-[220px] flex flex-1 p-10'>
          <div className="p-6 font-sans">
            <h2 className="text-xl font-bold mb-4">Quản lý lịch chiếu</h2>
            <div className="border border-gray-300 p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
                <input placeholder="Thành phố" {...register("city")} required className="p-2 border border-gray-300 rounded outline-none" />
                <input placeholder="Tên rạp" {...register("cinemaName")} required className="p-2 border border-gray-300 rounded outline-none" />
                <input placeholder="Tên phòng" {...register("roomName")} required className="p-2 border border-gray-300 rounded outline-none" />
                <input placeholder="Tên phim" {...register("movieName")} required className="p-2 border border-gray-300 rounded outline-none" />
                <input placeholder="Thời gian" type="datetime-local" {...register("time")} required className="p-2 border border-gray-300 rounded outline-none" />
                <div className="col-span-2 flex justify-center">
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Thêm lịch chiếu</button>
                </div>
              </form>
            </div>

            <table className="w-full mt-6 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Thành phố</th>
                  <th className="border border-gray-300 p-2">Tên rạp</th>
                  <th className="border border-gray-300 p-2">Tên phòng</th>
                  <th className="border border-gray-300 p-2">Tên phim</th>
                  <th className="border border-gray-300 p-2">Thời gian</th>
                  <th className="border border-gray-300 p-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {showtimes.map((showtime) => (
                  <tr key={showtime.id} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-gray-300 p-2">{showtime.city}</td>
                    <td className="border border-gray-300 p-2">{showtime.cinemaName}</td>
                    <td className="border border-gray-300 p-2">{showtime.roomName}</td>
                    <td className="border border-gray-300 p-2">{showtime.movieName}</td>
                    <td className="border border-gray-300 p-2">{showtime.time}</td>
                    <td className="border border-gray-300 p-2">
                      <button onClick={() => handleDelete(showtime.id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Xóa</button>
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

export default ShowtimesManage;
