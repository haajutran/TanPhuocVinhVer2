import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../../store/Counter";
import { Row, Col, Button } from "antd";
import i1 from "../../../assets/images/1.jpg";
import i2 from "../../../assets/images/2.jpg";
import i3 from "../../../assets/images/3.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="admin-carousel">
        <Row gutter={48}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6} className="carousel-item">
            <img
              src={i1}
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6} className="carousel-item">
            <img
              src={i2}
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6} className="carousel-item">
            <img
              src={i3}
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />
          </Col>
          <Col
            md={12}
            lg={8}
            xl={4}
            className="carousel-item"
            style={{ textAlign: "center" }}
          >
            <Button
              className="plus-image-btn"
              type="primary"
              shape="circle"
              icon="plus"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
