import React, { useState, useEffect } from 'react';

const SeatMatrix = ({ onClose, onSaveRoom }) => {
    const cols = 14;
    const rows = 14;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatType, setSeatType] = useState(0); // 0: đơn, 1: đôi
    const [roomName, setRoomName] = useState('');
    const [createDate, setCreateDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // yyyy-MM-dd
        setCreateDate(formattedDate);
    }, []);

    const toggleSeat = (seatId) => {
        if (seatType === 0) {
            setSelectedSeats(prev =>
                prev.includes(seatId)
                    ? prev.filter(id => id !== seatId)
                    : [...prev, seatId]
            );
        } else {
            const row = seatId[0];
            const col = parseInt(seatId.slice(1));
            let secondCol = col === cols ? col - 1 : col + 1;
            const secondSeatId = `${row}${secondCol.toString().padStart(2, '0')}`;

            if (isSeatSelected(seatId) || isSeatSelected(secondSeatId)) {
                alert("Một trong hai ghế đã được chọn rồi!");
                return;
            }

            setSelectedSeats(prev => [...prev, `${seatId}-${secondSeatId}`]);
        }
    };

    const isSeatSelected = (seatId) => {
        return selectedSeats.some(item => item.includes(seatId));
    };

    const isSeatInPair = (seatId) => {
        return selectedSeats.some(item => item.includes('-') && item.includes(seatId));
    };

    const handleSave = () => {
        if (!roomName.trim()) {
            alert("Vui lòng nhập tên phòng chiếu!");
            return;
        }

        const room = {
            name: roomName,
            seats: selectedSeats, // hoặc stringify nếu cần
            createdAt: createDate,
        };

        onSaveRoom(room); // gọi hàm cha truyền về
        onClose(); // đóng popup
    };

    const seatMatrix = [];
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const seatId = `${String.fromCharCode(64 + i)}${j.toString().padStart(2, '0')}`;
            const isSelected = isSeatSelected(seatId);
            const isPair = isSeatInPair(seatId);

            seatMatrix.push(
                <button
                    key={seatId}
                    onClick={() => toggleSeat(seatId)}
                    className={`w-6 h-6 rounded border ${isSelected
                        ? isPair
                            ? 'bg-purple-600'
                            : 'bg-blue-600'
                        : 'bg-gray-200 hover:bg-blue-300'
                        }`}
                />
            );
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-lg p-6 w-[90vw] max-w-6xl max-h-[90vh] overflow-auto shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Chọn sơ đồ ghế</h2>
                    <button
                        onClick={onClose}
                        className="text-red-600 hover:text-red-800 text-xl font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* Nhập tên phòng chiếu + hiển thị ngày tạo */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1">
                        <label className="block font-semibold mb-1">Tên phòng chiếu:</label>
                        <input
                            type="text"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="Nhập tên phòng chiếu..."
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-semibold mb-1">Ngày tạo:</label>
                        <div className="px-3 py-2 border rounded bg-gray-100">
                            {createDate}
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mb-4">
                    <button
                        className={`px-4 py-1 rounded border ${seatType === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSeatType(0)}
                    >
                        Ghế đơn
                    </button>
                    <button
                        className={`px-4 py-1 rounded border ${seatType === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSeatType(1)}
                    >
                        Ghế đôi
                    </button>
                </div>

                <div className="grid grid-cols-14 gap-1 mb-4" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                    {seatMatrix}
                </div>

                <div className="text-sm mb-4">
                    <strong>Số ghế đơn:</strong> {selectedSeats.filter(seat => !seat.includes('-')).length} <br />
                    <strong>Số ghế đôi:</strong> {selectedSeats.filter(seat => seat.includes('-')).length} <br />
                    <div className="text-green-600 font-semibold">
                        <strong>Tổng số ghế:</strong> {selectedSeats.filter(seat => !seat.includes('-')).length + selectedSeats.filter(seat => seat.includes('-')).length * 2}
                    </div>
                </div>

                <button
                    className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={handleSave}
                >
                    Lưu
                </button>
            </div>
        </div>
    );
};

export default SeatMatrix;
