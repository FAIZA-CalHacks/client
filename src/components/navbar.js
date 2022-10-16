// import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

export default function Header() {
  return (
    // <nav class="navbar navbar-dark bg-custom-2">
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand style={{ "font-size": "30px", color: "white" }} href="/">
          Faizaa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/home">
                Feed
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/post-question">
                Post Question
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/view-profile">
                View Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Log in
              </a>
            </li>
          </ul>
        </div>

        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
    // {/* </nav> */}
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
