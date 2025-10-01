import { Divider, Form, Select, Space, Typography, Flex, Input } from "antd";
import { useState } from "react";
import { useCrypto } from "./layout/AppContent";

export default function AddAssetForm() {
  const { crypto } = useCrypto();
  const [coin, setCoin] = useState();
  if (!coin) {
    return (
      <>
        <Select
          style={{ width: "100%" }}
          onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
          placeholder="Select Coin"
          options={crypto.map((coin) => ({
            label: coin.name,
            value: coin.id,
            icon: coin.icon,
          }))}
          optionRender={(option) => (
            <Space>
              <img
                src={option.data.icon}
                style={{ width: "20px" }}
                alt={option.data.label}
              />
              {option.data.label}
            </Space>
          )}
        />
      </>
    );
  }
  return (
    <form>
      <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: 40, marginRight: 10 }}
        />
        <Typography.Title level={2} style={{ margin: 0 }}>
          {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
    </form>
  );
}
