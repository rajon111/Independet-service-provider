import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.PNG'

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link}  to="/">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user ?
                                <button onClick={()=> signOut(auth)}>log out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                 Login
                                </Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;