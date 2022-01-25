import { Link } from "react-router-dom";
import image from "./assets/images/space.gif";
import "./App.css";
import Routes from "./Routes";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout" style={{ background: "#001219" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="3">
            <Link to="/welcome"> Home </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/single-player">About </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 74,
          background: "#001219",
          minHeight: 650,
        }}
      >
        <div
          className="site-layout-background"
          style={{
            marginTop: 14,
            minHeight: 490,
            background: "white",
          }}
        >
          <Routes className="site-layout-content" />
        </div>
      </Content>
      <Footer style={{ textAlign: "center", background: "#001219" }}>
        Lovenil ©2022 Created by Me Lovenil
      </Footer>
    </Layout>
  );
}

export default App;
