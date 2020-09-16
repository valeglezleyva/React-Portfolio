import React from "react";
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavBar() {
    return (
        <>
            <Row>
                <Col><Button className="nav-bar" variant="outline-warning" href="/About">About</Button>{' '}</Col>
            </Row>
            <Row>
                <Col><Button className="nav-bar" variant="outline-warning" href="/Portfolio">Portfolio</Button>{' '}</Col>
            </Row>
            <Row>
                <Col><Button className="nav-bar" variant="outline-warning" href="/Contact">Contact</Button>{' '}</Col>
            </Row>
        </>
    )
}

export default NavBar;