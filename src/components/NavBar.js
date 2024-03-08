import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Link to="/" className={styles.brandLink}>
          <Navbar.Brand className={styles.brand}>TechHubPost</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ml-auto ${styles.navLinks}`}>
            <Nav.Link as={Link} to="/" className={styles.navLink}>🏠 Home</Nav.Link>
            <Nav.Link as={Link} to="/signin" className={styles.navLink}>🔑 Log in</Nav.Link>
            <Nav.Link as={Link} to="/signup" className={styles.navLink}>✏️ Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;