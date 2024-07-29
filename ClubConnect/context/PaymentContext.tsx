// app/context/PaymentContext.tsx
import React, { createContext, useState } from 'react';

// Create a context for payment
export const PaymentContext = createContext(null);

// Create a provider component
export const PaymentProvider = ({ children }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);

  const addPaymentDetails = (details) => {
    setPaymentDetails(details);
    setPaymentHistory([...paymentHistory, details]);
  };

  return (
    <PaymentContext.Provider value={{ paymentDetails, paymentHistory, addPaymentDetails }}>
      {children}
    </PaymentContext.Provider>
  );
};