import React from 'react';
import './App.css';
import About from "../src/About/About";
import Portfolio from "../src/Portfolio/Portfolio";
import Contact from "../src/Contact/Contact";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Headline from "./Headline/Headline";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Router>
      <Row>
        <Col>
          <Headline />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
        <NavBar />
        </Col>
        <Col>
          <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </Col>
      </Row>
			<Footer sticky="bottom"/>
		</Router>
  );
}

export default App;
