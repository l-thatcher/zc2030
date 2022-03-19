import styles from "../styles/About.module.css";

const groupImg = "/group-placeholder.jpeg";
const profilePic = "/profile-default.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.openingBox}>
          <img
            src={groupImg}
            srcSet={groupImg}
            className={styles.groupImg}
            alt="The team"
          />

          <div className={styles.rightSide}>
            <h1 className={styles.summaryHeader}>We're ZC30</h1>
            <p className={styles.summaryPara}>
              We at zero carbon 30 aim to get everyone's carbon use to 0 by the
              year 2030.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam placerat enim et sapien congue venenatis. Aenean viverra ex
              nec sapien condimentum, non blandit mi ullamcorper. Maecenas
              condimentum venenatis tempor. Nunc pulvinar metus eget dolor
              sollicitudin dictum. Duis sagittis suscipit fringilla. Integer
              rhoncus congu. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nullam placerat enim et sapien congue venenatis. Aenean
              viverra ex nec sapien condimentum, non blandit mi ullamcorper.
              Maecenas condimentum venenatis tempor. Nunc pulvinar metus eget
              dolor sollicitudin dictum. Duis sagittis suscipit fringilla.
              Integer rhoncus congue
            </p>
          </div>
        </div>

        <div className={styles.projects}>
          <h1 className={styles.teamHeader}>Meet the team</h1>

          <div className={styles.profileCards}>
            <div className={styles.profileCard}>
              <img
                src={profilePic}
                srcSet={profilePic}
                className={styles.groupImg}
                alt="Calculate"
              />
              <h2>Peter Trott</h2>
              <h4>CEO</h4>
              <p>
                Hi, i'm Peter Lorelum ipsum doerem fogarten motum henlum. Onmun
                optus domini opium suptus.
              </p>
            </div>

            <div className={styles.profileCard}>
              <img
                src={profilePic}
                srcSet={profilePic}
                className={styles.groupImg}
                alt="Calculate"
              />
              <h2>Peter Trott</h2>
              <h4>CEO</h4>
              <p>
                Hi, i'm Peter Lorelum ipsum doerem fogarten motum henlum. Onmun
                optus domini opium suptus.
              </p>
            </div>

            <div className={styles.profileCard}>
              <img
                src={profilePic}
                srcSet={profilePic}
                className={styles.groupImg}
                alt="Calculate"
              />
              <h2>Peter Trott</h2>
              <h4>CEO</h4>
              <p>
                Hi, i'm Peter Lorelum ipsum doerem fogarten motum henlum. Onmun
                optus domini opium suptus.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
