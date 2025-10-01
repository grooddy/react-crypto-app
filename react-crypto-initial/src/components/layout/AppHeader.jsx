import { Layout, Select, Space, Button, Modal, Drawer } from "antd"; // ГЛАВНЫЙ ИМПОРТ
import { useCrypto } from "./AppContent";
import { useEffect, useState } from "react";
import CoinInfoModal from "../CoinInfoModal";
import AddAssetForm from "../AddAssetForm";
const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
};

export default function AppHeader({}) {
  const [select, setSelect] = useState();
  const [coin, setCoin] = useState(null);
  const [modal, setModal] = useState();
  const [open, setOpen] = useState(true); // for drawer
  const { crypto } = useCrypto();

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === "/") {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  function handleSelect(value) {
    console.log(value);
    setCoin(crypto.find((c) => c.id === value));
    setModal(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{ width: "250px" }}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        value="press / to open"
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
      <Button type="primary" onClick={showDrawer}>
        Add Asset{" "}
      </Button>
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <CoinInfoModal coin={coin} />
      </Modal>
      <Drawer
        width={600}
        title="Add Asset"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => setOpen(false)}
        destroyOnHidden
        open={open}
      >
        <AddAssetForm />
      </Drawer>
    </Layout.Header>
  );
}
