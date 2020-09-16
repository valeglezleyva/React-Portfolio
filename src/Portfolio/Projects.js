import React from "react";
import ProjectCard from "./ProjectCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import "./images/Master_Resume_Valeria_Gonzalez_Leyva_2020.pdf";

function Projects() {
    return (
        <>
            <Row>
                <Col className="resume">
                <a href="./images/Master_Resume_Valeria_Gonzalez_Leyva_2020.pdf" target="blank">Download Resume</a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectCard project={{title: "CuEARated Cuisine", description: "Application for music, cooking and meme lovers"}}/>
                </Col>
                <Col>
                    <ProjectCard project={{title: "Note Taker", description: "Digital Note Taker"}}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectCard project={{title: "Random Password Generator", description: "Application that takes in user preferences to generate a random password"}}/>
                </Col>
                <Col>
                    <ProjectCard project={{title: "Interactive Schedule", description: "Interactive scheduler that allows you to add new events, edit or delete existing ones"}}/>
                </Col> 
            </Row>
            <Row>
                <Col>
                    <ProjectCard project={{title: "Weather Dashboard", description: "Application that shows you real-time weather data based no location searches"}}/>
                </Col>
                <Col>
                    <ProjectCard project={{title: "Rock Your World", description: "Application for rock collectors wishing to connect with other collectors for trading purpsoses"}}/>
                </Col>
            </Row>
        </>
    )
}

export default Projects;