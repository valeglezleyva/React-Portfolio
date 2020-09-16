import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";


function ProjectCard(props) {
    return (
        <Card className="resume" style={{ width: "18rem"}}>
            <Card.Body>
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Text>
                    {props.project.description}
                </Card.Text>
                <Button variant="primary">Project Link (coming soon!)</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;