import React from "react";
import "./About.css";
import Bio from "./Bio";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Bio />
                </Col>
            </Row>
        </Container>
    )
}

export default About;