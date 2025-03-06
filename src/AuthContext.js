import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => useContext(AuthContext);

// Provider bọc toàn bộ ứng dụng
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Kiểm tra nếu đã đăng nhập trước đó
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username) => {
        const userData = { username };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData); // Cập nhật ngay mà không cần tải lại trang
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
