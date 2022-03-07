import styles from "../styles/Home.module.css";


const logo = "/calculator-logo.png";


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

          <div className={styles.summary}>
              <div className={styles.leftSideHeader}>
                  <h1 className={styles.summaryHeader}>
                      Are you carbon neutral?
                  </h1>
                  <p className={styles.summaryPara}>
                      Carbon Neutrality is important.. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>

              <div className={styles.promptsCollection}>
                  <div className={styles.prompts}>
                      <img src={logo} srcSet={logo} className={styles.img} alt="Calculator"/>
                      <p className={styles.promptText}>calculate</p>
                  </div>

                  <div className={styles.prompts}>
                      <img src={logo} srcSet={logo} className={styles.img} alt="Calculate"/>
                      <p className={styles.promptText}>Discover</p>
                  </div>

                  <div className={styles.prompts}>
                      <img src={logo} srcSet={logo} className={styles.img} alt="Calculate"/>
                      <p className={styles.promptText}>Purchase</p>
                  </div>

                  <div className={styles.prompts}>
                      <img src={logo} srcSet={logo} className={styles.img} alt="Calculate"/>
                      <p className={styles.promptText}>Offset</p>
                  </div>
              </div>
          </div>

          <div className={styles.projects}>
              <h1 className={styles.projectsHeader}>
                  Newest Carbon Projects
              </h1>

          </div>

          <div className={styles.team}>
              <h1 className={styles.teamHeader}>
                  Meet the team
              </h1>
          </div>
      </main>
    </div>
  );
}
