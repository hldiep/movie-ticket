import axios from "axios";

const API_URL = "/room-service/api/branch"
export const getBranch = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin rạp phim:', error);
        return null;
    }
}

export const getBranchId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin phòng:', error);
        return null;
    }
};