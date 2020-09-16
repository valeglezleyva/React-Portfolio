import React from "react";
import Projects from "./Projects";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolio() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Projects />
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;