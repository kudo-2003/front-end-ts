import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import BusTicket from "../pages/BusTicket/BusTicket";
import Payment from "../pages/payment_page/payment";
import { ForgotPassword } from "../pages/auth/forgotPassword";
import PromotionDetail from "../pages/PromotionDetail/PromotionDetail";
import FAQ from "../pages/FAQ/FAQ";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService/TermsOfService";

import { AdminSignInPage, AuthContainer, ResetPassword } from "../pages/auth/indexAuth";

import Dashboard from "../pages/admin/dashboard/indexDashboard";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home setCurrentPage={() => {}} />} />

        {/* Trang vé xe bus */}
        <Route path="/busTicket" element={<BusTicket />} />

        {/* Trang đăng nhập */}
        <Route
          path="/auth"
          element={<AuthContainer onAuthSuccess={() => {}} />}
        />
        {/* Trang admin */} 
        <Route 
          path="/admin/signin" 
          element={<AdminSignInPage />} 
        />

        {/* Trang quản trị viên */}
        <Route 
          path="/admin/dashboard" 
          element={<Dashboard />} 
        />


        <Route path="/promotion/:id" element={<PromotionDetail />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Trang thanh toán */}
        <Route path="/payment" element={<Payment />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
