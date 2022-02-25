import styles from '../styles/Header.module.css';
import { Nav, Navbar } from 'react-bootstrap';

const Header = (props) => {
  return (
    <header className="header">
      <Navbar className={styles.navbar} bg="white" expand="xxl" fixed="top">
        <div className="container-lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ width: '0px' }}>
            <Nav className={styles.nav}>
              <Nav.Link href="/" className={styles.navFont}>
                {props.home}
              </Nav.Link>
              <Nav.Link
                href={props.about.toLowerCase()}
                className={styles.navFont}
              >
                {props.about}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand style={{ width: '250px' }}>
            <img
              className={styles.img}
              src={props.logo}
              srcSet={props.logo}
              alt="Zero Carbon 2030 logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ marginLeft: '45px' }}
          >
            <Nav>
              <Nav.Link
                href={props.projects.toLowerCase()}
                className={styles.navFont}
              >
                {props.projects}
              </Nav.Link>
              <Nav.Link
                href={props.calculators.toLowerCase()}
                className={styles.navFont}
              >
                {props.calculators}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            <button
              type="submit"
              className="btn btn-secondary"
              id="btn_login"
              style={{ marginRight: '10px', background: '#77C9D4' }}
            >
              {props.signIn.toUpperCase()}
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              id="btn_register"
              style={{ background: '#57BC90' }}
            >
              {props.register.toUpperCase()}
            </button>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
