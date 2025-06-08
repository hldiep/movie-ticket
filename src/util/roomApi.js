import axios from "axios";

const API_URL = "/room-service/api/room"
export const getRoom = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin phòng:', error);
        return null;
    }
}
export const getRoombyId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin phòng:', error);
        return null;
    }
}