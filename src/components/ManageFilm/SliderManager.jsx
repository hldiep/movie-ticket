import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SliderManager = () => {
    const navigate = useNavigate();
    const [sliders, setSliders] = useState([]);
    const [newImage, setNewImage] = useState('');
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newMovieName, setNewMovieName] = useState('');

    useEffect(() => {
        fetchSliders();
    }, []);

    const fetchSliders = async () => {
        try {
            const res = await axios.get('/slider/get');
            setSliders(res.data.data);
        } catch (err) {
            console.error('Lỗi khi lấy slider:', err);
        }
    };

    const addSlider = async () => {
        try {
            const res = await axios.post('/slider/add/slider', {
                image: newImage,
                name: newName,
            });
            alert(res.data.message);
            fetchSliders();
            setNewImage('');
            setNewName('');
        } catch (err) {
            console.error('Lỗi khi thêm slider:', err);
        }
    };

    const removeSlider = async (id) => {
        try {
            await axios.delete(`/slider/remove/${id}`);
            fetchSliders();
        } catch (err) {
            console.error('Lỗi khi xoá slider:', err);
        }
    };
    return (
        <div className='min-h-screen bg-main'>
            <div className='container'>
                <div className="ml-[220px] flex-1 p-10">
                    <div className='ml-6 mb-4'>
                        <button onClick={() => navigate("/quan-ly-phim")} className='border border-blue-700 p-1 px-2 text-white rounded-lg hover:bg-blue-700'>Quay lại</button>
                    </div>
                    <div className="p-6 font-sans text-white">
                        <h2 className="text-2xl font-bold mb-4">Quản lý Slider</h2>

                        <div className="border-collapse border border-gray-700  p-4 rounded shadow mb-6 text-black">
                            <h3 className="text-lg font-semibold mb-4 text-white">Thêm Slider mới</h3>

                            <div className="mb-4">
                                <label className="block font-medium mb-1 text-white">Link ảnh</label>
                                <input
                                    type="text"
                                    placeholder="https://example.com/slider.jpg"
                                    className="border px-3 py-2 w-full rounded-md outline-none "
                                    value={newImage}
                                    onChange={(e) => setNewImage(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium mb-1 text-white">Tên hình ảnh (Tên phim)</label>
                                <input
                                    type="text"
                                    placeholder="Avengers: Endgame"
                                    className="border px-3 py-2 w-full rounded-md outline-none"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                            </div>

                            <button
                                onClick={addSlider}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                            >
                                Thêm Slider
                            </button>
                        </div>
                        {/* Danh sách slider */}
                        <div className="border-collapse border border-gray-700  p-4 rounded shadow mb-6 text-black">
                            <h3 className="text-lg font-semibold mb-4 text-white">Danh sách Slider</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {sliders.map((slider) => (
                                    <div key={slider.id} className="bg-white rounded shadow p-4">
                                        <img src={slider.image} alt={slider.title} className="w-full h-48 object-cover rounded mb-2" />
                                        <h4 className="font-bold text-black">{slider.title}</h4>
                                        <p className="text-sm text-gray-600">{slider.description}</p>
                                        {slider.movieName && (
                                            <p className="text-sm text-blue-700 font-semibold mt-1">
                                                🎬 Phim: {slider.movieName}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => removeSlider(slider.id)}
                                            className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                        >
                                            Xoá
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderManager