import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe Place for all your notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton" variant='outline-primary' >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;