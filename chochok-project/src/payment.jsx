import { useState } from "react";
import "./styles/App.css";

const Payment = ({ total }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Оплата ${total}$ прошла успешно!`);
    
  };

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className="payment-container">
      <div className="card-preview">
        <div className="card-number">{cardNumber || "xxxx xxxx xxxx xxxx"}</div>
        <div className="card-name">{cardName || "ИМЯ ВЛАДЕЛЬЦА"}</div>
        <div className="card-expiry">{expiry || "MM/YY"}</div>
      </div>

      <form className="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя на карте"
          value={cardName}
          onChange={(e) => setCardName(e.target.value.toUpperCase())}
          required
        />
        <input
          type="text"
          placeholder="Номер карты"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          maxLength={19}
          required
        />
        <div className="payment-row">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            maxLength={5}
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
            required
          />
        </div>
        <button type="submit">Оплатить {total}$</button>
      </form>
    </div>
  );
};

export default Payment;
