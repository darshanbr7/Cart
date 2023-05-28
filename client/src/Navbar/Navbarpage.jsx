import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarpage() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >CART</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='ml-5' ><Link to={"/Login"} className='nav-link text-white'>Login</Link></Nav.Link>
          </Nav>    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarpage;