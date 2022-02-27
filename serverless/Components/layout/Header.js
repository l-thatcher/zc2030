import styles from '../../styles/Header.module.css';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import LoginSession from '../LoginSession';

const logo = '/cz2030_logo.png';
const menuOptions = [
  'Home',
  'About',
  'Projects',
  'Calculators',
  'Sign In',
  'Register',
];

const Header = () => {
  return (
    <header className="header">
      <Navbar className={styles.navbar} bg="white" expand="xxl" fixed="top">
        <div className="container-lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ width: '0px' }}>
            <Nav className={styles.nav}>
              <Link href="/" passHref>
                <Nav.Link className={styles.navFont}>{menuOptions[0]}</Nav.Link>
              </Link>
              {/* <Link href={menuOptions[1].toLowerCase()} passHref> */}

              <Nav.Link className={styles.navFont}>{menuOptions[1]}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand style={{ width: '250px' }}>
            <img
              className={styles.img}
              src={logo}
              srcSet={logo}
              alt="Zero Carbon 2030 logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ marginLeft: '45px' }}
          >
            <Nav>
              {/* <Link href={menuOptions[2].toLowerCase()} passHref> */}
              <Nav.Link className={styles.navFont}>{menuOptions[2]}</Nav.Link>

              {/* <Link href={menuOptions[3].toLowerCase()} passHref> */}
              <Nav.Link className={styles.navFont}>{menuOptions[3]}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            <button
              type="submit"
              className="btn btn-secondary"
              id="btn_login"
              style={{ marginRight: '10px', background: '#77C9D4' }}
            >
              {menuOptions[4].toUpperCase()}
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              id="btn_register"
              style={{ background: '#57BC90' }}
            >
              {menuOptions[5].toUpperCase()}
            </button>
          </div>
          <LoginSession />
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
