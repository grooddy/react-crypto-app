import { Layout } from "antd";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-context";
const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 120px)",
  color: "#fff",
  backgroundColor: "#0958d9",
  padding: "1rem",
};

export default function AppContent({}) {
  return <Layout.Content style={contentStyle}>Conternt</Layout.Content>;
}

export function useCrypto() {
  return useContext(CryptoContext);
}
