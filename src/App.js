import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import SeeMore from "./components/Home/SeeMore";
import MovieDetailPage from "./components/Detail/MovieDetailPage";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import NavPromotion from "./components/Home/NavPromotion";
import Login from "./components/UserLogin/Login";
import Register from "./components/UserLogin/Register";
import ForgetPwd from "./components/UserLogin/ForgetPwd";
import Payment from "./components/Payment/Payment";
import PaymentMethod from "./components/Payment/PaymentMethod";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import InfoTicketSuccess from "./components/Payment/InfoTicketSuccess";
import NavIntro from "./components/Home/NavIntro";
import Contact from "./components/Home/Contact";
import ScrollToTop from "./ScrollToTop";
import PrivacyPolicy from "./components/Home/PrivacyPolicy";
import AQs from "./components/Home/AQs";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/see-more" element={<SeeMore />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPwd" element={<ForgetPwd />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/continue-payment" element={<PaymentMethod />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-success-viewticket" element={<InfoTicketSuccess />} />
        <Route path="/khuyen-mai" element={<NavPromotion />} />
        <Route path="/gioi-thieu" element={<NavIntro />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/chinh-sach-bao-mat" element={<PrivacyPolicy />} />
        <Route path="/cau-hoi" element={<AQs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;