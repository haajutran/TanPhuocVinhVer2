import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/Home";
import { Row, Col, Carousel, Card } from "antd";
import i1 from "../assets/images/1.jpg";
import i2 from "../assets/images/2.jpg";
import i3 from "../assets/images/3.jpg";
import ContactForm from "./ContactForm";

const { Meta } = Card;

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHome(false);
  }

  render() {
    return (
      <div className="body">
        <div className="carousel">
          <h2>Tân Phước Vinh</h2>
          <Carousel autoplay>
            <div className="carousel-item">
              <img src={i1} />
            </div>
            <div className="carousel-item">
              <img src={i2} />
            </div>
            <div className="carousel-item">
              <img src={i3} />
            </div>
          </Carousel>
        </div>

        <div className="functions">
          <Row type="flex" justify="center">
            <Col md={10} lg={7} xl={4}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_26.jpg"
                  />
                }
              >
                <Meta title="Thiết kế nhà" />
              </Card>
            </Col>
            <Col md={10} lg={7} xl={4}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://s-ec.bstatic.com/images/hotel/max1024x768/681/68184730.jpg"
                  />
                }
              >
                <Meta title="Thiết kế khách sạn" />
              </Card>
            </Col>
            <Col md={10} lg={7} xl={4}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://t-ec.bstatic.com/images/hotel/max1024x768/889/88902727.jpg"
                  />
                }
              >
                <Meta title="Thiết kế resort" />
              </Card>
            </Col>
            <Col md={10} lg={7} xl={4}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="http://cdn-img-v2.webbnc.net/uploadv2/web/10/1093/product/2016/05/27/09/27/1464341530_phong-khach-noi-that-jhome-1.jpg"
                  />
                }
              >
                <Meta title="Thiết kế nội thất" />
              </Card>
            </Col>
          </Row>
        </div>

        <div className="news">
          <Row>
            <Col xl={12}>
              <div className="left">
                <div className="img-container">
                  <img
                    src="https://img1.goodfon.com/wallpaper/big/a/8b/more-noch-luna-plyazh-pirs-ogni.jpg"
                    alt="Nature"
                    style={{ width: "100%", height: 300 }}
                  />
                  <div className="text-block">
                    <h4>Nature</h4>
                    <p>What a beautiful sunrise</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={12}>
              <div className="right">
                <Row>
                  <Col className="item1" xl={24}>
                    <div className="img-container">
                      <img
                        src="https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_43.jpg"
                        alt="Nature"
                        style={{ width: "100%", height: 145 }}
                      />
                      <div className="text-block">
                        <h4>Nature</h4>
                        <p>What a beautiful sunrise</p>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Col span={12} className="item2">
                        <div className="img-container">
                          <img
                            src="https://st.hzcdn.com/simgs/0791ec72020b5ff7_4-7177/contemporary-landscape.jpg"
                            alt="Nature"
                            style={{ width: "100%", height: 145 }}
                          />
                          <div className="text-block">
                            <h4>Nature</h4>
                            <p>What a beautiful sunrise</p>
                          </div>
                        </div>
                      </Col>
                      <Col span={12} className="item3">
                        <div className="img-container">
                          <img
                            src="https://img1.goodfon.com/wallpaper/big/a/8b/more-noch-luna-plyazh-pirs-ogni.jpg"
                            alt="Nature"
                            style={{ width: "100%", height: 145 }}
                          />
                          <div className="text-block">
                            <h4>Nature</h4>
                            <p>What a beautiful sunrise</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <ContactForm />
      </div>
    );
  }
}
export default connect(
  state => state.home,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
