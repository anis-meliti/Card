import React from 'react';
import './style/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
const Card = () => {
    return (
        <div className="card">
            <h1>CREDIT CARD</h1>
            <div className="image"></div>
            <Col><Row className="id-number">7253 3256 7895 1245</Row></Col>

            <Container>
                <Row>
                    <Col md={4} className="card-holder">
                        <p>5422</p>
                        <p>Card Holder</p>
                    </Col>
                    <Col md={3} className="validity">
                        <span>VALID <br /> THRU</span>
                    </Col>
                    <Col md={3} className="validity-date">
                        <p>MONTH/YEAR</p>

                        <p>11/50</p>
                    </Col>
                    <Col md={2} className="image-holder"></Col>
                </Row>


            </Container>
        </div>
    );
}
export default Card;