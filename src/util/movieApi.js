import axios from 'axios'
const API_URL = "/film-service/api/film"
export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
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
export const getMovieByStatus = async (status) => {
  try {
    const response = await axios.get(`/film-service/api/film/get/status/${status}`);
       return response.data.data; 
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateMovieById = async (id, updatedMovie) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, updatedMovie);
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi cập nhật phim với ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};