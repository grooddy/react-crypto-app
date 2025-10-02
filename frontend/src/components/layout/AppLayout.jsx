import { Layout, Spin } from "antd"; // ГЛАВНЫЙ ИМПОРТ
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import CryptoContext from "../../context/crypto-context";
import { useContext } from "react";
export default function AppLayout() {
  const { loading } = useContext(CryptoContext);
  if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
      <AppFooter>Footer</AppFooter>
    </Layout>
  );
}
