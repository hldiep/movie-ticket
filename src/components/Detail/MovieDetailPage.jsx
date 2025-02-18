import React, { useState } from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const MovieDetailPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const handleTrailerClick = (trailerUrl) => {
        setVideoUrl(trailerUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoUrl("");
    };
    const movie = {
        title: "Nụ Hôn Bạc Tỷ",
        rating: "T13",
        genre: "Tình Cảm",
        duration: "100'",
        country: "Việt Nam",
        ageRating: "T13: Phim dành cho khán giả từ đủ 13 tuổi trở lên (13+)",
        image: "/images/nu-hon-bac-ty-poster.webp",
        director: "Thu Trang",
        actor: "Thu Trang, Đoàn Thiên Ân, Lê Xuân Tiền...",
        premiere: "Thứ Tư, 29/01/2025",
        plot: "Câu chuyện xoay quanh Vân - cô gái bán bánh mì vô tình gặp hai chàng trai trong một tai nạn nhỏ...",
        trailer: "https://www.youtube.com/embed/wr6MeifZCUs",
    };
    const theaters = [
        {
            name: "Cinestar Quốc Thanh",
            address: "271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM",
            showtimes: ["10:30", "12:30", "14:30", "16:30", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"]
        },
        {
            name: "Cinestar Hai Bà Trưng (TP.HCM)",
            address: "135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, TP.HCM",
            showtimes: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]
        }
    ];

    //chọn loại vé
    const [adultTickets, setAdultTickets] = useState(0);
    const [studentSeniorTickets, setStudentSeniorTickets] = useState(0);

    const handleIncrease = (type) => {
        if (type === 'adult') {
            setAdultTickets(adultTickets + 1);
        } else if (type === 'studentSenior') {
            setStudentSeniorTickets(studentSeniorTickets + 1);
        }
    };

    const handleDecrease = (type) => {
        if (type === 'adult' && adultTickets > 0) {
            setAdultTickets(adultTickets - 1);
        } else if (type === 'studentSenior' && studentSeniorTickets > 0) {
            setStudentSeniorTickets(studentSeniorTickets - 1);
        }
    };

    return (
        <div className='min-h-screen bg-gray-600 pt-20'>
            <Header />
            <div className='flex mt-24 p-3 m-[20px] justify-center' >
                <div className="w-72 text-white ">
                    <div className="flex-shrink-0">
                        <img src={movie.image} alt={movie.title} className="rounded-sm shadow-lg" />
                    </div>
                </div>
                <div className="w-2/3 pl-8 text-white">
                    <h1 className="text-3xl font-bold ">{movie.title} ({movie.rating})</h1>
                    <div className="flex items-center space-x-4 mt-3">
                        <span>🎭 {movie.genre}</span>
                        <span>⏳ {movie.duration}</span>
                        <span>🌍 {movie.country}</span>
                    </div>

                    <p className="mt-3 bg-yellow-400 text-black px-3 py-1 rounded inline-block">
                        {movie.ageRating}
                    </p>

                    <div className="mt-5">
                        <h2 className="text-xl font-semibold">MÔ TẢ</h2>
                        <p>Đạo diễn: {movie.director}</p>
                        <p>Diễn viên: {movie.actor} </p>
                        <p>Khởi chiếu: {movie.premiere}</p>
                    </div>

                    <div className="mt-5">
                        <h2 className="text-xl font-semibold">NỘI DUNG PHIM</h2>
                        <p className="text-gray-300">{movie.plot}</p>
                    </div>
                    <div className="flex space-x-4 mt-3">
                        <button
                            onClick={() => handleTrailerClick(movie.trailer)}
                            className="text-white border border-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm"
                        >
                            🎬 Xem Trailer
                        </button>
                    </div>

                </div>
            </div>
            <div className='text-white text-center'>
                <h1 className="text-3xl font-bold uppercase">lịch chiếu</h1>
                <div className='flex justify-center mt-4 space-x-4'>
                    <a href='' className='border border-white px-3 py-1 rounded-md text-white'>14/2</a>
                    <a href='' className='border border-white px-3 py-1 rounded-md text-white'>15/2</a>
                    <a href='' className='border border-white px-3 py-1 rounded-md text-white'>16/2</a>
                </div>
            </div>
            <div className='text-white text-center mt-10'>
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
                <h1 className="text-3xl font-bold uppercase">Chọn Ghế</h1>

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
            <div className="text-white text-center mt-10">
                <h1 className="text-3xl font-bold uppercase">Chọn Bắp Nước</h1>
                <div className="text-center mt-3">
                    <h2 className="text-lg text-yellow-400 font-semibold uppercase">Combo</h2>
                    <div className='flex justify-center'>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <h2 className="text-lg text-yellow-400 font-semibold uppercase">Nước đóng chai</h2>
                    <div className='flex justify-center'>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <h2 className="text-lg text-yellow-400 font-semibold uppercase">Nước ngọt</h2>
                    <div className='flex justify-center'>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <h2 className="text-lg text-yellow-400 font-semibold uppercase">Snack - kẹo</h2>
                    <div className='flex justify-center'>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                        <div className='p-4 text-center w-60'>
                            <img src="/images/TEPPY.png" alt="" className='h-40 mx-auto' />
                            <h3 className='text-lg font-bold mt-2 uppercase'>nước cam teppy</h3>
                            <p className='font-bold'>26.000VND</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-gray-300 px-3'>-</button>
                                <span className='px-4'>0</span>
                                <button className='bg-gray-300 px-3'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-white mt-5" />
            <div className='p-4 text-white flex items-center justify-between'>
                <div>
                    <h2 className='text-xl font-bold uppercase'>Nụ hôn bạc tỷ</h2>
                    <p className='font-bold'>Cinestar Hai Bà Trưng (TP.HCM) | 2 người lớn</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='bg-yellow-400 p-2 rounded-md text-black text-center'>
                        <p className='text-sm'>Thời gian giữ vé:</p>
                        <p className='text-2xl font-bold'>5:00</p>
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>Tạm tính</p>
                        <p className='text-xl font-bold'>90,000 VNĐ</p>
                    </div>
                    <button className='bg-green-600 px-6 py-2 rounded-md font-bold text-black uppercase'>
                        Đặt vé
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 relative max-w-lg w-full">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 text-xl hover:text-red-600">
                            X
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-64 rounded-sm"
                                src={videoUrl}
                                title="YouTube trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div >

    )
}

export default MovieDetailPage