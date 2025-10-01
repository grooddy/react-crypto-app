import { Layout, Card, Statistic, List, Typography, Tag } from "antd"; // ГЛАВНЫЙ ИМПОРТ
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { capitalize } from "../../utils";
import CryptoContext from "../../context/crypto-context";
const siderStyle = {
  padding: "1rem",
};

export default function AppSider() {
  const { assets } = useContext(CryptoContext);

  return (
    <Layout.Sider style={siderStyle} width="25%">
      {assets.map((asset) => (
        <Card key={asset.id} style={{ marginBottom: "1rem" }}>
          <Statistic
            title={capitalize(asset.id)}
            value={asset.totalAmount}
            precision={2}
            valueStyle={{ color: asset.grow ? "#3f8600" : "#cf1322" }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="$"
          />
          <List
            dataSource={[
              {
                title: "Total Profit",
                value: asset.totalProfit,
                isPlain: false,
                withTag: true,
              },
              { title: "Asset Amount", value: asset.amount, isPlain: true },
              // { title: "Difference", value: asset.growPercent, isPlain: false },
            ]}
            size="small"
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                <span>
                  {item.withTag && (
                    <Tag color={asset.grow ? "green" : "red"}>
                      {asset.growPercent}%
                    </Tag>
                  )}
                  {item.isPlain ? (
                    item.value
                  ) : (
                    <Typography.Text type={asset.grow ? "success" : "danger"}>
                      {Number(item.value).toFixed(2)}
                    </Typography.Text>
                  )}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
}
