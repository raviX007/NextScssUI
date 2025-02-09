import Image from "next/image";
import styles from "../styles/styles.module.scss";
import Logo from "../../public/hoteld.svg";
import Navbar from "../../public/navbar.svg";
import B1 from "../../public/b1.svg";
import B2 from "../../public/b2.svg";
import B3 from "../../public/b3.svg";
import B4 from "../../public/b4.svg";

// Define the component
export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.submainContainer}>
        <div className={styles.headerContainer}>
          <p className={styles.headerText}>Discover by cities</p>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageContainer}>
            <img src="/mumbai.jpg" alt="Mumbai" className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/pune.jpg" alt="Pune" className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/delhi.jpg" alt="Delhi" className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <img
              src="/bangalore.jpg"
              alt="Bangalore"
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.hotelContainer}>
        <div className={styles.subhotelContainer}>
          <div className={styles.miniContainer}>
            <p className={styles.headerText}>
              Thousands of properties globally
            </p>
          </div>
          <div className={styles.whyChooseUsContent}>
            <p className={styles.headerSmolText}>
              Explore affluent and cozy student homes near renowned
            </p>
            <p className={styles.headerSmolText}>
              universities and bustling capitals
            </p>
          </div>
        </div>
        <div className={styles.navB}>
          <Navbar className={styles["navbar-svg"]} />
        </div>

        <div className={styles.imageGridH}>
          <div className={styles.imageContainerH}>
            <div>
              <Image
                src="/hotels.jpg"
                alt="Hotel"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Logo />
            </div>
          </div>
          <div className={styles.imageContainerH}>
            <div>
              <Image
                src="/hotels.jpg"
                alt="Hotel"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Logo />
            </div>
          </div>
          <div className={styles.imageContainerH}>
            <div>
              <Image
                src="/hotels.jpg"
                alt="Hotel"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.propertiesContainer}>
          <div className={styles.propertiesHeader}>
            <div className={styles.propertiesContent}>
              <p className={styles.headerText}>Why Choose Us?</p>
            </div>
            <div className={styles.whyChooseUsContent}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc varius magna in
                est in fusce cursus suspenLorem ipsum dolor sit amet
              </p>
              <p>consectetur. Nunc varius magna in est in fusce cursus suspendisse.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.gridContent}>
              <div>
                <B1 />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Nunc varius magna in
                est in fusce cursus suspendisse.
              </div>
            </div>
            <div className={styles.gridContent}>
              <div>
                <B2 />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Nunc varius magna in
                est in fusce cursus suspendisse.
              </div>
            </div>
            <div className={styles.gridContent}>
              <div>
                <B3 />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Nunc varius magna in
                est in fusce cursus suspendisse.
              </div>
            </div>
            <div className={styles.gridContent}>
              <div>
                <B4 />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Nunc varius magna in
                est in fusce cursus suspendisse.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
