import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Square from './Square'
import gitHubIcon from '../assets/github.jpg'
import terminalIcon from '../assets/TerminalImg.png'
import pythonIcon from '../assets/pythonImage.jpg'
    
const Menu = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col><Square name="Curso de Git" color=
                    "black-btn" image={gitHubIcon} ></Square></Col>
                    <Col><Square name="Curso de Terminal" color=
                    "purple-btn" image={terminalIcon}></Square></Col>
                    <Col><Square name="Curso de Python" color=
                    "green-btn" image={pythonIcon}  ></Square></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu
