import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import './Header.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row } from 'react-bootstrap'

library.add(fab)

const Header = () => {  
    return (
        <div className="Header">
            <Container className="SocialMedia">
                <Container className="Icons">
                    <Row>
                     <FontAwesomeIcon icon={["fab","facebook-square"]} size="2x" className="Icon"><a href=""></a></FontAwesomeIcon>
                    </Row>
                    <Row>
                        <FontAwesomeIcon icon={["fab","twitter-square"]} size="2x" className="Icon"><a href=""></a></FontAwesomeIcon>
                    </Row>
                    <Row>
                        <FontAwesomeIcon icon={["fab","instagram-square"]} size="2x" className="Icon"><a href=""></a></FontAwesomeIcon>
                    </Row>
                </Container>
            </Container>
            <Jumbotron fluid className="Jumbotron">
            <Container>
                <h1 className="Tittle">ITAM-FOR-CODE</h1>
                <p className="Text">
                ITAM-4-Code es una OE que busca fomentar la creación de proyectos de código abierto. 
                </p>
            </Container>
            </Jumbotron>
        </div>
    )
}

export default Header
