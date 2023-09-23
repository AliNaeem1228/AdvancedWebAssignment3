import React,{useRef} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Form.css'

const Form = () => {
    const form = useRef();
    
    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={null}>
                <input type="text" name="from_name" className="user"  placeholder="Name"/>
                <input type="email" name="reply_to" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <Button>Send</Button>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Form