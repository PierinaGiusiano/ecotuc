import React, { useEffect, useState } from 'react';

import Layout from "../../components/layout/layout";

import hero from "../../assets/images/hero.png";
import steps from "../../assets/images/steps.png";
import save from "../../assets/images/save.png";

import styles from "./home.module.scss";

import Onboarding from '../onboarding/onboarding';

const Home = () => {

  const [showOnboarding, setShowOnboarding] = useState(false);
  useEffect(() => {
    const visitoAntes = localStorage.getItem('visitoAntes');
    if (!visitoAntes) {
      // Si el usuario es nuevo, muestra el onboarding
      setShowOnboarding(true);
      localStorage.setItem('visitoAntes', 'true'); //
    }
  }, []);
  
  return (
    <>
      <Layout>
        <div className={styles.hero}>
          <h1>
            Aprendamos a cuidar <br />
            <span className={styles.accent}>nuestro hogar</span>
          </h1>
          <img src={hero} alt="girl holding earth" />
        </div>

          <div className={styles.aboutUsSection}>
        <div className="menu">
            <h2>Somos ECOTUC!</h2>
            <p>
              En un mundo cada vez más consciente de la importancia de cuidar nuestro planeta,
              EcoTuc surge como tu aliado en la búsqueda de prácticas amigables con el medio ambiente.
              Somos una plataforma dedicada a promover el reciclaje, la reutilización y la reducción de residuos.
              En EcoTuc, creemos que cada pequeño esfuerzo cuenta y puede marcar una gran diferencia.
              <br />
              Nuestra misión es proporcionarte información valiosa, consejos prácticos y recursos útiles
              para que puedas tomar decisiones más sostenibles en tu vida diaria. Aquí encontrarás todo lo
              que necesitas saber sobre cómo reducir tu huella ecológica, contribuir al bienestar de nuestro
              planeta y crear un futuro más limpio y saludable para las generaciones venideras.
              <br />
              Explora nuestro sitio web y descubre artículos, guías paso a paso, noticias sobre iniciativas
              ecológicas, y mucho más. Únete a la comunidad de EcoTuc y juntos trabajaremos para hacer del
              mundo un lugar más verde y sostenible.
              <br />
              ¡Comencemos juntos este emocionante viaje hacia un estilo de vida más ecológico!
            </p>
          </div>
        </div>

        <br />
        <br />

        <h2>Tu Guía para una Vida más Verde: </h2>
        <div className={styles.stepsSection}>
          <img src={steps} alt="girl holding earth" />
          <div className={styles.stepsWrapper}>
            <div className="paso1">
              <h3>Aprender sobre prácticas sostenibles:</h3>
              <p>
                Las prácticas sostenibles se refieren a acciones que buscan reducir
                el impacto negativo en el medio ambiente y, al mismo tiempo, promover
                un estilo de vida más equitativo y saludable. Estas prácticas se basan
                en tres pilares fundamentales: reciclar, reutilizar y reducir.
              </p>
            </div>
            <br />
            <div className="paso2">
              <h3>Guías de reciclaje:</h3>
              <p>
                En EcoTuc, creemos que el reciclaje es una de las prácticas más importantes
                para reducir nuestro impacto ambiental. Sin embargo, para que el reciclaje
                sea efectivo, es fundamental conocer cómo hacerlo correctamente. En esta sección,
                te proporcionaremos guías detalladas sobre cómo reciclar diferentes tipos de
                materiales y te ayudaremos a convertirte en un reciclador experto.
              </p>
            </div>
            <br />
            <div className="paso3">
              <h3>Ideas de reutilización:</h3>
              <p>
                En EcoTuc, creemos en la magia de dar nueva vida a objetos cotidianos
                en lugar de desecharlos. La reutilización es una de las formas más
                creativas y efectivas de reducir residuos y contribuir a un planeta
                más sostenible. En esta sección, te presentamos una variedad de ideas
                ingeniosas y proyectos DIY (hazlo tú mismo) que te inspirarán a
                reutilizar y reciclar de manera creativa.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.saveSection}>
          <br />
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
          <h2 className="consejo">Consejos:</h2>
          <p>
            <b>1.</b> Reducir los envases o productos de usar y tirar. El catálogo de acciones que se pueden realizar es infinito: desde optar con el consumo de productos a granel, hasta optar por productos envasados en materiales que después se pueden reciclar con mayor facilidad: papel o cartón o vidrio.
          </p>
          <p>
            <b>2.</b> Reducir el despilfarro de alimentos.  Comprando sólo lo que necesitamos, cuidando la conservación y preparación de alimentos, aprovechando las sobras para hacer nuevas recetas y optando por el compostaje orgánico en alguna de sus múltiples opciones: 4º contenedor, compostaje doméstico, compostaje comunitario, etc.
          </p>
          <p>
            <b>3.</b> Decantarnos preferiblemente por productos de origen reciclado. De esta forma reducimos la necesidad de extraer materiales nuevos de la naturaleza y/o destinar recursos energéticos para procesarlos.
          </p>
          <p>
            <b>4.</b> Seleccionar materiales más respetuosos con el medioambiente y con mayor vida útil. Evita los productos lowcost. Por ejemplo, si optamos por materiales textiles con más durabilidad y mejor rendimiento, reducimos la producción de textiles y, sobretodo, la cantidad de ropa que tiramos a la basura por ser ya inservible.
          </p>
          <p>
            <b>5.</b> Busca formas de reutilizar los recursos textiles antes de desecharlos. Conviértelos en trapos, utilízalos para hacer manualidades, como envoltorio de regalos, etc. Si necesitas ideas, aquí te damos alguna.
          </p>
          <p>
            <b>6.</b> Opta por la reparación de objetos. Siempre que sea posible, y económicamente viable, es preferible optar por alargar la vida útil de los objetos.
          </p>
          <p>
            <b>7.</b> Copia buenas prácticas para reutilizar residuos. Ahora que todo se ha hecho virtual, la red nos proporciona estupendos recursos para tener ideas. <a href="https://www.pinterest.com/">Pinterest</a>, páginas como <a href="https://el-recetario.net">el Recetario</a> o personas como <a href="http://diy.2ndfunniestthing.com">2nd funniest thing</a> son referentes para esta tarea. La mayoría de materiales que utilizamos pueden reciclarse, por ello.
          </p>
          <p>
            <b>8.</b> Al depositar los residuos, debemos asegurarnos de hacerlo en el contenedor adecuado.
          </p>
          <p>
            <b>9.</b> Ante las dudas, acudir a herramientas que facilitan la resolución de las mismas como el buscador AIRE  o el propio de la Mancomunidad de la Comarca de Pamplona.
          </p>
          <p>
            <b>10.</b> Visitar plantas de separación y reciclaje. Acercarnos a estas instalaciones no solo nos acerca a los procesos de tratamiento de residuos, sino que nos acerca a los beneficios socioeconómicos y medioambientales de su reciclaje.
          </p>

          <img src={save} alt="girl holding earth" />
        </div>
      </Layout>
    {showOnboarding && <Onboarding />}
    </>
  );
}
export default Home;

