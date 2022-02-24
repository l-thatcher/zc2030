import styles from '../styles/Footer.module.css'

const Footer = (props) => {

    return (
        <footer className={styles.footer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
                <img
                    className={styles.img}
                    src={props.logo}
                    srcSet={props.logo}
                    alt= "Zero Carbon 2030 logo"
                >
                </img>
            </span>
          </a>
    </footer>
    )
};

export default Footer;