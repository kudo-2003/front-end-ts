import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { momoPayment, shopeePayPayment, zaloPayPayment, bankPayment } from "../../api/indexApi";
import "./payment_css/payment.css";

const Payment: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState(10000);

  const handlePayment = async () => {
    try {
      if (selectedMethod === "momo") {
        const data = await momoPayment(amount);
        if (data.payUrl) window.location.href = data.payUrl;
      } else if (selectedMethod === "shopee") {
        const data = await shopeePayPayment(amount);
        if (data.payUrl) window.location.href = data.payUrl;
      } else if (selectedMethod === "zalopay") {
        const data = await zaloPayPayment(amount);
        if (data.order_url) window.location.href = data.order_url;
      } else if (selectedMethod === "bank") {
        bankPayment(amount);
      } else if (selectedMethod === "cash") {
        alert("Bạn đã chọn thanh toán trực tiếp. Vui lòng thanh toán khi nhận vé.");
      } else {
        alert("Vui lòng chọn phương thức thanh toán.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Đã xảy ra lỗi khi thanh toán. Vui lòng thử lại.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="payment">
        <h2>Thanh toán vé</h2>
        <p>Vui lòng chọn phương thức thanh toán</p>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="momo"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
<img
  src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg"
  alt="Momo"
  className="payment-icon"
/>
            Ví điện tử Momo
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="shopee"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <img
              src="https://shopeepay.vn/static/media/shopeePayLogo2022.67d2e522e841720cf971c77142ace5e4.svg"
              alt="ShopeePay"
              className="payment-icon"
            />
            Ví điện tử ShopeePay
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="zalopay"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <img
              src="https://simg.zalopay.com.vn/zlp-website/assets/new_logo_6c5db2d21b.svg"
              alt="ZaloPay"
              className="payment-icon"
            />
            Ví điện tử ZaloPay
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <img
              src="https://th.bing.com/th/id/OIP.LPjQCLIZq5DUOZotwTcCNQHaE8?w=260&h=180&c=7&pcl=292827&r=0&o=5&cb=iwc1&dpr=1.4&pid=1.7"
              alt="Thẻ ngân hàng"
              className="payment-icon"
            />
            Thẻ ngân hàng
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <img
              src="https://th.bing.com/th/id/OIP.0MK8h2k7LhPZ7OdFdfh9tAHaEq?w=274&h=180&c=7&pcl=292827&r=0&o=5&cb=iwc1&dpr=1.4&pid=1.7"
              alt="Thanh toán trực tiếp"
              className="payment-icon"
            />
            Thanh toán khi nhận vé
          </label>
        </div>
        <button onClick={handlePayment} disabled={!selectedMethod}>
          Xác nhận thanh toán
        </button>
      </div>
    </>
  );
};

export default Payment;