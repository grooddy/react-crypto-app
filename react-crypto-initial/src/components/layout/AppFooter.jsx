import { Layout } from "antd";
const footerStyle = {
  textAlign: "center",
  height: 60,
  color: "#fff",
  backgroundColor: "#4096ff",
};
export default function AppFooter() {
  return <Layout.Footer style={footerStyle}>Footer</Layout.Footer>;
}
