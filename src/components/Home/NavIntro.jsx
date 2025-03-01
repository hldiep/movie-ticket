import React from 'react'
import "./index.css";
const NavIntro = () => {
    return (
        <div className="min-h-screen pt-20 bg-main flex justify-center">
            <div className="container px-4">
                <div
                    className="p-5 mt-28 relative bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/50"
                    style={{ backgroundImage: "url('https://cdn.lawnet.vn/uploads/tintuc/2023/05/09/co-so-dien-anh-pho-bien-phim.jpg')" }}
                >
                    <h2 className="text-3xl font-bold text-center mt-28 blinking-text text-white relative z-10">
                        HỆ THỐNG ĐẶT VÉ TIỆN ÍCH
                    </h2>
                    <div className="text-center p-20 text-white mx-10 relative z-10">
                        MovieTicket là nền tảng đặt vé xem phim trực tuyến hàng đầu tại Việt Nam,
                        mang đến cho bạn trải nghiệm mua vé nhanh chóng, tiện lợi và an toàn.
                        Với hệ thống rạp chiếu phủ rộng khắp cả nước,
                        MovieTicket giúp bạn dễ dàng lựa chọn suất chiếu phù hợp và tận hưởng những bộ phim
                        bom tấn mới nhất ngay tại rạp yêu thích.
                    </div>
                </div>
                <div className="mt-10 text-white">
                    <h3 className="text-3xl font-bold text-center">📍 Hệ thống chi nhánh trên toàn quốc</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">

                        {/* Khu vực miền Bắc */}
                        <div className="border border-yellow-600 p-5 rounded-lg">
                            <h4 className="text-xl text-yellow-400 font-bold">Miền Bắc</h4>
                            <ul className="mt-3 space-y-2">
                                <li>🎬 CGV Vincom Bà Triệu - Hà Nội</li>
                                <li>🎬 Lotte Cinema Keangnam - Hà Nội</li>
                                <li>🎬 Galaxy Nguyễn Trãi - Hà Nội</li>
                                <li>🎬 CGV AEON Mall Hải Phòng</li>
                                <li>🎬 Lotte Cinema Hải Phòng</li>
                                <li>🎬 CGV Hạ Long - Quảng Ninh</li>
                            </ul>
                        </div>

                        {/* Khu vực miền Trung */}
                        <div className="border border-yellow-600 p-5 rounded-lg">
                            <h4 className="text-xl text-yellow-400 font-bold">Miền Trung</h4>
                            <ul className="mt-3 space-y-2">
                                <li>🎬 CGV Vincom Đà Nẵng</li>
                                <li>🎬 Lotte Cinema Đà Nẵng</li>
                                <li>🎬 BHD Star Huế</li>
                                <li>🎬 Galaxy Cinema Huế</li>
                                <li>🎬 CGV Nha Trang</li>
                                <li>🎬 Lotte Cinema Nha Trang</li>
                            </ul>
                        </div>

                        {/* Khu vực miền Nam */}
                        <div className="border border-yellow-600 p-5 rounded-lg">
                            <h4 className="text-xl text-yellow-400 font-bold">Miền Nam</h4>
                            <ul className="mt-3 space-y-2">
                                <li>🎬 CGV Vivo City - TP. HCM</li>
                                <li>🎬 BHD Star Bitexco - TP. HCM</li>
                                <li>🎬 Galaxy Kinh Dương Vương - TP. HCM</li>
                                <li>🎬 Lotte Cinema Cần Thơ</li>
                                <li>🎬 CGV AEON Bình Dương</li>
                                <li>🎬 Galaxy Biên Hòa - Đồng Nai</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl text-white font-bold text-center mb-8">Cam Kết Dịch Vụ</h2>
                    <ul className="space-y-4">
                        {[
                            "Luôn cập nhật phim mới và suất chiếu nhanh nhất.",
                            "Bảo mật thông tin khách hàng tuyệt đối.",
                            "Hỗ trợ khách hàng 24/7 qua hotline và chat trực tuyến.",
                            "Chính sách hoàn vé linh hoạt, minh bạch."
                        ].map((text, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                                <span className="text-blue-400 text-xl mr-2">⭐</span>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-16 max-w-4xl mx-auto mb-10">
                    <h2 className="text-3xl text-white font-bold text-center mb-8">❓ Câu Hỏi Thường Gặp</h2>
                    <div className="space-y-6">
                        {[
                            { question: "Làm thế nào để đặt vé trên trang web?", answer: "Bạn chỉ cần chọn phim, chọn rạp, suất chiếu và ghế ngồi, sau đó thanh toán online là xong!" },
                            { question: "Tôi có thể đổi hoặc hủy vé sau khi đặt không?", answer: "Tùy vào chính sách của rạp, bạn có thể đổi hoặc hoàn vé trong một số trường hợp." },
                            { question: "Những phương thức thanh toán nào được hỗ trợ?", answer: "Chúng tôi hỗ trợ thanh toán qua ví điện tử (Momo, ZaloPay), thẻ ngân hàng, hoặc thanh toán trực tiếp tại rạp." }
                        ].map((faq, index) => (
                            <div key={index} className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="text-lg font-semibold text-yellow-400">Q: {faq.question}</h3>
                                <p className="text-gray-300">A: {faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavIntro