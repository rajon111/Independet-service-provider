import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/Cap (1).png'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link}  to="/">
                        <img src={logo} width="120px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav>
                            {/* <Nav.Link as={CustomLink} to="/checkout">Checkout</Nav.Link> */}
                            <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>

                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                            {
                                user ?
                                <button onClick={()=> signOut(auth)}>log out</button>
                                :
                                <Nav.Link as={CustomLink} to="/login">
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