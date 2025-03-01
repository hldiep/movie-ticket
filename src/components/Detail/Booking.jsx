import React, { useState } from 'react'
import SectionFood from './SectionFood';
const seats = [
    ["A01", "A02", "", "A03", "A04", "A05", "A06"],
    ["B01", "B02", "", "B03", "B04", "B05", "B06"],
    ["C01", "C02", "", "C03", "C04", "C05", "C06"],
    ["D01", "D02", "", "D03", "D04", "D05", "D06"],
    ["E01", "E02", "", "E03", "E04", "E05", ""],
    ["F01", "F02", "", "", "", "", ""]
];


const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTheater, setSelectedTheater] = useState(null);
    const [selectedShowtime, setSelectedShowtime] = useState(null);
    const [adultTickets, setAdultTickets] = useState(0);
    const [studentSeniorTickets, setStudentSeniorTickets] = useState(0);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const totalTickets = adultTickets + studentSeniorTickets;


    const dates = ["14/2", "15/2", "16/2"];
    const theaters = [
        {
            name: "Cinestar Quốc Thanh",
            address: "271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM",
            showtimes: ["10:30", "12:30", "14:30", "16:30"]
        },
        {
            name: "Cinestar Hai Bà Trưng (TP.HCM)",
            address: "135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, TP.HCM",
            showtimes: ["10:00", "12:00", "14:00", "16:00"]
        }
    ];

    const handleIncrease = (type) => {
        if (type === 'adult') setAdultTickets(adultTickets + 1);
        if (type === 'studentSenior') setStudentSeniorTickets(studentSeniorTickets + 1);
    };

    const handleDecrease = (type) => {
        if (type === 'adult' && adultTickets > 0) setAdultTickets(adultTickets - 1);
        if (type === 'studentSenior' && studentSeniorTickets > 0) setStudentSeniorTickets(studentSeniorTickets - 1);
    };

    const toggleSeat = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else if (selectedSeats.length < totalTickets) {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    return (
        <div>
            <div className="text-white text-center p-5">

                <h1 className="text-3xl font-bold uppercase">Lịch Chiếu</h1>
                <div className='flex justify-center mt-4 space-x-4'>
                    {dates.map((date, index) => (
                        <button
                            key={index}
                            className={`border px-3 py-1 rounded-md ${selectedDate === date ? 'bg-yellow-600' : 'bg-gray-500'}`}
                            onClick={() => setSelectedDate(date)}>
                            {date}
                        </button>
                    ))}
                </div>

                {selectedDate && (
                    <div className='mt-10'>
                        <h1 className='text-3xl font-bold uppercase'>Danh Sách Rạp</h1>
                        {theaters.map((theater, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg mt-6 cursor-pointer ${selectedTheater === theater.name ? 'bg-yellow-600' : 'bg-gray-700'}`}
                                onClick={() => setSelectedTheater(theater.name)}>
                                <h2 className='text-xl font-bold'>{theater.name}</h2>
                                <p className='text-gray-200'>{theater.address}</p>
                            </div>
                        ))}
                    </div>
                )}

                {selectedTheater && (
                    <div className='mt-10'>
                        <h1 className='text-3xl font-bold uppercase'>Chọn Suất Chiếu</h1>
                        <div className='flex flex-wrap justify-center mt-4 space-x-2'>
                            {theaters.find(t => t.name === selectedTheater).showtimes.map((time, idx) => (
                                <button
                                    key={idx}
                                    className={`border px-3 py-1 rounded-md ${selectedShowtime === time ? 'bg-yellow-600' : 'bg-gray-500'}`}
                                    onClick={() => setSelectedShowtime(time)}>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {selectedShowtime && (
                    <div className="mt-10">
                        <h1 className="text-3xl font-bold uppercase">Chọn Loại Vé</h1>
                        <div className="flex justify-center mt-6 space-x-10">
                            <div className="border p-6 rounded-md w-1/4">
                                <h2 className="text-lg font-semibold">Người Lớn</h2>
                                <p className="text-yellow-400 font-bold">100,000 VNĐ</p>
                                <div className="flex items-center justify-center mt-4">
                                    <button onClick={() => handleDecrease('adult')} className="bg-gray-500 px-4 py-2 rounded-l">-</button>
                                    <span className="px-4 text-lg">{adultTickets}</span>
                                    <button onClick={() => handleIncrease('adult')} className="bg-gray-500 px-4 py-2 rounded-r">+</button>
                                </div>
                            </div>
                            <div className="border p-6 rounded-md w-1/4">
                                <h2 className="text-lg font-semibold">HSSV - Người Cao Tuổi</h2>
                                <p className="text-yellow-400 font-bold">55,000 VNĐ</p>
                                <div className="flex items-center justify-center mt-4">
                                    <button onClick={() => handleDecrease('studentSenior')} className="bg-gray-500 px-4 py-2 rounded-l">-</button>
                                    <span className="px-4 text-lg">{studentSeniorTickets}</span>
                                    <button onClick={() => handleIncrease('studentSenior')} className="bg-gray-500 px-4 py-2 rounded-r">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {selectedShowtime && (
                    <div className="mt-10">
                        <h1 className="text-3xl font-bold uppercase">Chọn Ghế</h1>
                        <div className="p-4 rounded-md">
                            <div className="flex justify-center mb-3">
                                <div className="text-black w-1/2 h-8 bg-gray-300 rounded text-center pt-1 mb-4">Màn hình</div>
                            </div>
                            {seats.map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center gap-9 mb-4">
                                    {row.map((seat, colIndex) => (
                                        <button
                                            key={colIndex}
                                            className={`w-12 h-12 text-sm text-black flex items-center justify-center rounded-md ${selectedSeats.includes(seat) ? 'bg-yellow-600' : 'bg-gray-400 hover:bg-gray-100'}`}
                                            onClick={() => toggleSeat(seat)}
                                        >
                                            {seat}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="mt-5">
                            <h2 className="text-xl">Ghế đã chọn:</h2>
                            <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "Chưa chọn ghế nào"}</p>
                        </div>
                        <SectionFood />
                        <hr className="border-white mt-5" />
                        <div className='p-4 text-white flex items-center justify-between'>
                            <div>
                                <h2 className='text-xl font-bold uppercase'>Nụ hôn bạc tỷ</h2>
                                <p className='font-bold'>Cinestar Hai Bà Trưng (TP.HCM) | 1 người lớn</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='border p-2 rounded-md text-white text-left'>
                                    <p className='text-sm'>Phòng chiếu: 02</p>
                                    <p className='text-sm'>Thời gian: 7:00 PM</p>
                                    <p className='text-sm'>Ghế: A04</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm'>Tạm tính</p>
                                    <p className='text-xl font-bold'>40,000 VNĐ</p>
                                </div>
                                <button
                                    className="border border-yellow-600 bg-yellow-600 text-white rounded-xl px-5 py-2 w-[120px] hover:bg-transparent hover:text-yellow-600 transition-all duration-300">
                                    Đặt vé
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* <div className='text-white text-center mt-10'>
                <h1 className='text-3xl font-bold uppercase'>Danh Sách Rạp</h1>
                {theaters.map((theater, index) => (
                    <div key={index} className=' p-6 rounded-lg mt-6'>
                        <h2 className='text-xl font-bold text-yellow-300'>{theater.name}</h2>
                        <p className='text-gray-200'>{theater.address}</p>
                        <div className='flex flex-wrap justify-center mt-4 space-x-2'>
                            {theater.showtimes.map((time, idx) => (
                                <a href='' key={idx} className='border border-white px-3 py-1 rounded-md text-white'>{time}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-white text-center mt-10">
                <h1 className="text-3xl font-bold uppercase">Chọn Loại Vé</h1>
                <div className="flex justify-center mt-6 space-x-10">
                    <div className="border p-6 rounded-md  w-1/4">
                        <h2 className="text-lg font-semibold">Người Lớn</h2>
                        <p className="text-yellow-400 font-bold">100,000 VNĐ</p>
                        <div className="flex items-center justify-center mt-4">
                            <button onClick={() => handleDecrease('adult')} className="bg-gray-500 px-4 py-2 rounded-l">-</button>
                            <span className="px-4 text-lg">{adultTickets}</span>
                            <button onClick={() => handleIncrease('adult')} className="bg-gray-500 px-4 py-2 rounded-r">+</button>
                        </div>
                    </div>
                    <div className="border p-6 rounded-md w-1/4">
                        <h2 className="text-lg font-semibold">HSSV - Người Cao Tuổi</h2>
                        <p className="text-yellow-400 font-bold">55,000 VNĐ</p>
                        <div className="flex items-center justify-center mt-4">
                            <button onClick={() => handleDecrease('studentSenior')} className="bg-gray-500 px-4 py-2 rounded-l">-</button>
                            <span className="px-4 text-lg">{studentSeniorTickets}</span>
                            <button onClick={() => handleIncrease('studentSenior')} className="bg-gray-500 px-4 py-2 rounded-r">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center p-5 text-white min-h-screen">
                <h1 className="text-3xl font-bold uppercase">Chọn Ghế</h1>
                <div className=" p-4 rounded-md">
                    <div className="flex justify-center mb-3">
                        <div className="w-full text-black h-8 bg-gray-300 rounded text-center pt-1 mb-4">Màn hình</div>
                    </div>
                    {seats.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-center gap-9 mb-4">
                            {row.map((seat, colIndex) => (
                                <button
                                    key={colIndex}
                                    className={`w-12 h-12 text-sm text-black flex items-center justify-center rounded-md ${seat
                                        ? bookedSeats.includes(seat)
                                            ? "bg-gray-600 cursor-not-allowed"
                                            : selectedSeats.includes(seat)
                                                ? "bg-yellow-400"
                                                : "bg-gray-400 hover:bg-gray-100"
                                        : "invisible"
                                        }`}
                                    onClick={() => toggleSeat(seat)}
                                    disabled={bookedSeats.includes(seat)}
                                >
                                    {seat}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="mt-5">
                    <h2 className="text-xl">Ghế đã chọn:</h2>
                    <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "Chưa chọn ghế nào"}</p>
                </div>
                <div className="mt-5 flex gap-5">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded"></div>
                        <span>Ghế chọn</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-500 rounded"></div>
                        <span>Ghế đã đặt</span>
                    </div>
                </div>
            </div>
            <SectionFood />
            <hr className="border-white mt-5" />
            <div className='p-4 text-white flex items-center justify-between'>
                <div>
                    <h2 className='text-xl font-bold uppercase'>Nụ hôn bạc tỷ</h2>
                    <p className='font-bold'>Cinestar Hai Bà Trưng (TP.HCM) | 1 người lớn</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='border p-2 rounded-md text-white text-left'>
                        <p className='text-sm'>Phòng chiếu: 02</p>
                        <p className='text-sm'>Thời gian: 7:00 PM</p>
                        <p className='text-sm'>Ghế: A04</p>
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>Tạm tính</p>
                        <p className='text-xl font-bold'>40,000 VNĐ</p>
                    </div>
                    <button
                        className="border border-yellow-600 bg-yellow-600 text-white rounded-xl px-5 py-2 w-[120px] hover:bg-transparent hover:text-yellow-600 transition-all duration-300">
                        Đặt vé
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default Booking