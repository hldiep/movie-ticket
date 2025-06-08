import axios from "axios";
const API_URL = "/film-service/api/slider"
export const getSlider = async () => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin slider:', error);
        return null;
    }
}

export const deleteSlider = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/remove/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi xóa slider với id ${id}:`, error);
        return null;
    }
}

export const addSlider = async (sliderList) => {
    try {
        const response = await axios.post(`${API_URL}/add`, sliderList, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Lỗi khi thêm slider:', error);
        return null;
    }
};