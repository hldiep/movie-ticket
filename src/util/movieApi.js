import axios from 'axios'
const API_URL = "http://localhost:8080/api/films"
export const fetchMovies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách phim: ', error);
        return [];
    }
};
export const getMovieById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin phim:', error);
        return null;
    }
};