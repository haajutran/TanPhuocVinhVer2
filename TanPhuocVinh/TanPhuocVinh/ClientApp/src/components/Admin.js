import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default props => (
  <div>
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <div className="logo" style={{ textAlign: "center" }}>
          <img
            src="http://tanphuocvinh.com/wp-content/uploads/2018/10/logo-web.png"
            style={{ width: 100, marginTop: 20, marginBottom: 20 }}
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="home" />
                <span>Trang chủ</span>
              </span>
            }
          >
            <Menu.Item key="carousel">
              <Link to="admin">Ảnh trượt</Link>
            </Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">Giới thiệu</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">Tin tức</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div className="admin">{props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  </div>
);
