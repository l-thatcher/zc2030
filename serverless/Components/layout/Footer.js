 import styles from "../../styles/Footer.module.css";

const logo = "/cz2030_logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <span className={styles.logo}>
          <img
            className={styles.img}
            src={logo}
            srcSet={logo}
            alt="Zero Carbon 2030 logo"
          ></img>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
