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
          Las 3 R: Reutilizar, Reducir y Reciclar. Son las tres reinas del consumo responsable, una forma de ayudar a preservar el medio ambiente que se puede practicar tanto desde empresas o instituciones como de forma individual, desde el propio hogar.
        </p>
        <p>
          De hecho, hoy nos gustaría darte algunas recomendaciones para reutilizar productos cotidianos con el objetivo de darles una segunda vida útil que puedes poner en práctica desde ya mismo y organizar, incluso, actividades en familia a su alrededor.
        </p>
        <p>

          Reutilizar es una de las mejores formas de contribuir a ayudar al medio ambiente, por eso todas las ideas que puedas tener para dar una segunda vida útil a objetos que usas todos los días son un granito de arena que aportar a esta causa.
        </p>
        <h2>Consejos:</h2>
        <p>
          1. Reducir los envases o productos de usar y tirar. El catálogo de acciones que se pueden realizar es infinito: desde optar con el consumo de productos a granel, hasta optar por productos envasados en materiales que después se pueden reciclar con mayor facilidad: papel o cartón o vidrio.
        </p>
        <p>
          2. Reducir el despilfarro de alimentos.  Comprando sólo lo que necesitamos, cuidando la conservación y preparación de alimentos, aprovechando las sobras para hacer nuevas recetas y optando por el compostaje orgánico en alguna de sus múltiples opciones: 4º contenedor, compostaje doméstico, compostaje comunitario, etc.
        </p>
        <p>
          3. Decantarnos preferiblemente por productos de origen reciclado. De esta forma reducimos la necesidad de extraer materiales nuevos de la naturaleza y/o destinar recursos energéticos para procesarlos.
        </p>
        <p>
          4. Seleccionar materiales más respetuosos con el medioambiente y con mayor vida útil. Evita los productos lowcost. Por ejemplo, si optamos por materiales textiles con más durabilidad y mejor rendimiento, reducimos la producción de textiles y, sobretodo, la cantidad de ropa que tiramos a la basura por ser ya inservible.
        </p>
        <p>
          5. Busca formas de reutilizar los recursos textiles antes de desecharlos. Conviértelos en trapos, utilízalos para hacer manualidades, como envoltorio de regalos, etc. Si necesitas ideas, aquí te damos alguna.
        </p>
        <p>
          6. Opta por la reparación de objetos. Siempre que sea posible, y económicamente viable, es preferible optar por alargar la vida útil de los objetos.
        </p>
        <p>
          7. Copia buenas prácticas para reutilizar residuos. Ahora que todo se ha hecho virtual, la red nos proporciona estupendos recursos para tener ideas. <a href="https://www.pinterest.com/">Pinterest</a>, páginas como <a href="https://el-recetario.net">el Recetario</a> o personas como <a href="http://diy.2ndfunniestthing.com">2nd funniest thing</a> son referentes para esta tarea. La mayoría de materiales que utilizamos pueden reciclarse, por ello.
        </p>
        <p>
          8. Al depositar los residuos, debemos asegurarnos de hacerlo en el contenedor adecuado.
        </p>
        <p>
          9. Ante las dudas, acudir a herramientas que facilitan la resolución de las mismas como el buscador AIRE  o el propio de la Mancomunidad de la Comarca de Pamplona.
        </p>
        <p>
          10. Visitar plantas de separación y reciclaje. Acercarnos a estas instalaciones no solo nos acerca a los procesos de tratamiento de residuos, sino que nos acerca a los beneficios socioeconómicos y medioambientales de su reciclaje.
        </p>

        <img src={save} alt="girl holding earth" />
      </div>
    </Layout>
  );
};

export default Home;
