import { Layout, Typography } from "antd";
import { useContext } from "react";
import { useCrypto } from "../../context/crypto-context";
const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 120px)",
  color: "#fff",
  backgroundColor: "#0958d9",
  padding: "1rem",
};

export default function AppContent({}) {
  const { assets, crypto } = useCrypto();
  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: "left", color: "#FFF" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => {
            const coin = crypto.find((c) => c.id === asset.id);
            return asset.amount * coin.price;
          })
          .reduce((acc, v) => (acc += v), 0)
          .toFixed(2)}
        $
      </Typography.Title>
    </Layout.Content>
  );
}
