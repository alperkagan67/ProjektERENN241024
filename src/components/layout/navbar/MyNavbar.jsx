import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './MyNavbar.module.css';  // Importiere das CSS-Modul

import fortifyslogo from '../../../img/fortifyslogo.png';  // Korrigierter Pfad zum Logo

function MyNavbar() {
  return (
    <Navbar expand="lg" className={styles.navbarContainer}>
      <Container>
        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          <img
            src={fortifyslogo}
            width="100"
            height="100"
            className={`${styles.logo} ${styles.alignTop}`}
            alt="Fortifys Logo"
          />
          Online-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navbarLinks}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Galerie</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Impressum</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
