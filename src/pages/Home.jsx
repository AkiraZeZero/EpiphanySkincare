import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import hero from "../assets/images/epiphanyDisplay.jpg";
import "../styles/home.css";

const Home = () => {
    const year = new Date().getFullYear()
    return (
        <Helmet title={"Home"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                        <div>
                            <p className="hero__subtitle">Trending Products in {year}</p>
                            <h2>Make Your Skin More Naturally Beautiful</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita, laudantium soluta odit dolorem autem sunt illum velit ab cumque. Iure impedit voluptas error ad optio alias deleniti porro reprehenderit.</p>
                            <button className="buy__btn">Shop Now</button>
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
        </Helmet>
    )
};

export default Home;