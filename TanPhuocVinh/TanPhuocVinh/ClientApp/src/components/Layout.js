import React from "react";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

export default props => (
  <div>
    <Layout className="layout">
      <Header className="top-navbar">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Trang chủ</Menu.Item>
          <Menu.Item key="2">Giới thiệu</Menu.Item>
          <Menu.Item key="3">Tin tức</Menu.Item>
        </Menu>
      </Header>
      <Content>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </div>
);
