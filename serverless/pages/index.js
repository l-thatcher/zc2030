import styles from "../styles/Home.module.css";


const calculatorImg = "/calculator-logo.png";
const discoverImg = "/discover-logo2.png";
const purchaseImg = "/purchase-logo.png";
const offsetImg = "/offset-logo.png";



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
                      <img src={calculatorImg} srcSet={calculatorImg} className={styles.img} alt="Calculator"/>
                      <p className={styles.promptText}>calculate</p>
                  </div>

                  <div className={styles.prompts}>
                      <img src={discoverImg} srcSet={discoverImg} className={styles.img} alt="Discover"/>
                      <p className={styles.promptText}>Discover</p>
                  </div>

                  <div className={styles.prompts}>
                      <img src={purchaseImg} srcSet={purchaseImg} className={styles.img} alt="Calculate"/>
                      <p className={styles.promptText}>Purchase</p>
                  </div>

                  <div className={styles.prompts}>
                      <img src={offsetImg} srcSet={offsetImg} className={styles.img} alt="Calculate"/>
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

              <div className={styles.profileCard}>
                  <img src={purchaseImg} srcSet={purchaseImg} className={styles.profilePic} alt="Calculate"/>
                  <h2>
                      Peter Trott
                  </h2>
                  <h4>
                      CEO
                  </h4>
                  <p>
                      Hi, i'm Peter Lorelum ipsum doerem fogarten motum henlum. Onmun optus domini opium suptus.
                  </p>
              </div>
          </div>
      </main>
    </div>
  );
}
