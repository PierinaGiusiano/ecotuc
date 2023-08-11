import React from "react";

import Layout from "../../components/layout/layout";

import hero from "../../assets/images/hero.png";
import steps from "../../assets/images/steps.png";
import save from "../../assets/images/save.png";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>
          Aprendamos a cuidar <br />
          <span className={styles.accent}>nuestro hogar</span>
        </h1>
        <img src={hero} alt="girl holding earth" />
      </div>
      <div className={styles.aboutUsSection}>
        <h2>Somos ECOTUC!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          voluptatum corrupti totam suscipit sed est, eaque, delectus, eos in
          vel odio dolorum eveniet commodi a! Quae reprehenderit aut eius in.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          voluptatum corrupti totam suscipit sed est, eaque, delectus, eos in
          vel odio dolorum eveniet commodi a! Quae reprehenderit aut eius in.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          voluptatum corrupti totam suscipit sed est, eaque, delectus, eos in
          vel odio dolorum eveniet commodi a! Quae reprehenderit aut eius in.
        </p>
      </div>
      <br />
      <br />
      <h2>Aqui podes hacer esto: </h2>
      <div className={styles.stepsSection}>
        <img src={steps} alt="girl holding earth" />
        <div className={styles.stepsWrapper}>
          <div>
            <h3>Paso</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              rerum, possimus illum nesciunt, dolorem aperiam quas explicabo
              aspernatur laudantium temporibus recusandae deserunt consequuntur,
              magnam itaque. Itaque placeat sapiente fugit velit explicabo
              exercitationem, suscipit nostrum, quos rerum, soluta molestiae
              saepe? Voluptas!
            </p>
          </div>
          <div>
            <h3>Paso</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              rerum, possimus illum nesciunt, dolorem aperiam quas explicabo
              aspernatur laudantium temporibus recusandae deserunt consequuntur,
              magnam itaque. Itaque placeat sapiente fugit velit explicabo
              exercitationem, suscipit nostrum, quos rerum, soluta molestiae
              saepe? Voluptas!
            </p>
          </div>
          <div>
            <h3>Paso</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              rerum, possimus illum nesciunt, dolorem aperiam quas explicabo
              aspernatur laudantium temporibus recusandae deserunt consequuntur,
              magnam itaque. Itaque placeat sapiente fugit velit explicabo
              exercitationem, suscipit nostrum, quos rerum, soluta molestiae
              saepe? Voluptas!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.saveSection}>
        <h2>Ayuda empezando por aqui!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque
          vitae incidunt aliquam iure dolorem expedita vero alias tempora sunt.
        </p>
        <img src={save} alt="girl holding earth" />
      </div>
    </Layout>
  );
};

export default Home;
