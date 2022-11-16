import React from "react";
import "../styles/home.css";

import Helmet from "../components/Helmet/Helmet";
import Services from "../components/services/Services";

import hero from "../assets/images/epiphanyDisplay.jpg";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div>
                <p className="hero__subtitle">Trending Products in {year}</p>
                <h2>Natural Skincare Just For You!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione expedita, laudantium soluta odit dolorem autem sunt
                  illum velit ab cumque. Iure impedit voluptas error ad optio
                  alias deleniti porro reprehenderit.
                </p>
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">Shop Now!</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div>
                <img src={hero} alt="soap display" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>
      <section className="trending__products">
        <Container>
            <Row>
                <Col lg="12" className="text__center">
                <h2 className="section__title">Trending Products</h2>
                </Col>
            </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
