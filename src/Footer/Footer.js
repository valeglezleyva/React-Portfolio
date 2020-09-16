import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
            <Row>
                <Col>
                    <Navbar bg="light">
                        <Navbar.Brand><h6>Website created by Valeria Gonzalez Leyva using React</h6></Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
        </>
    )
}

export default Footer;