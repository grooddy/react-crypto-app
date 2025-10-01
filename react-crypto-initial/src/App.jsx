import React from "react"; // Если вы используете React 17 и ниже
import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./components/layout/AppLayout";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
