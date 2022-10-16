

// import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Faiza</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/post-question">Post Question</Nav.Link>
              <Nav.Link href="/view-profile">View Profile</Nav.Link>
              <Nav.Link href="/login">Log in</Nav.Link>
              
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
}


// export default function Navbar(){
//     return <nav className="nav">
//         <a href="/" className="site-title">Faiza</a>
//         <ul>
//             <li>
//                 <a href="/askquestion">Ask Question</a>
//             </li>
//             <li>
//                 <a href="/profile">View Profile</a>
//             </li>
//             <li>
//                 <a href="/login">Login</a>
//             </li>
//         </ul>
//     </nav>
// }