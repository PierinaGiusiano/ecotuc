import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Onboarding from "../onboarding/onboarding";
import hero from "../../assets/images/hero.png";
import steps from "../../assets/images/steps.png";
import save from "../../assets/images/save.png";
import styles from "./home.module.scss";

const Home = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  useEffect(() => {
    const visitoAntes = localStorage.getItem("visitoAntes");
    if (!visitoAntes) {
      // Si el usuario es nuevo, muestra el onboarding
      setShowOnboarding(true);
      localStorage.setItem("visitoAntes", "true"); //
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
          <div>
            <h2>¡Somos ECOTUC! 🌱🌞</h2>
            <p>
              En un mundo cada vez{" "}
              <b>más consciente de la importancia de cuidar nuestro planeta</b>,
              EcoTuc surge como tu aliado en la búsqueda de prácticas amigables
              con el medio ambiente 🤝. Somos una plataforma dedicada a promover{" "}
              <b>el reciclaje, la reutilización y la reducción</b> ♻️ de
              residuos. En EcoTuc, creemos que cada pequeño esfuerzo cuenta y
              puede marcar una gran diferencia.
              <br />
              <br />
              Nuestra misión es proporcionarte información valiosa, consejos
              prácticos y recursos útiles para que puedas tomar decisiones más
              sostenibles en tu vida diaria 📚. Aquí encontrarás todo lo que
              necesitas saber sobre cómo reducir tu huella ecológica, contribuir
              al bienestar de nuestro planeta 💚 y{" "}
              <b>crear un futuro más limpio y saludable</b> para las
              generaciones venideras.
              <br />
              <br />
              Explora nuestro sitio web y descubre 🔍{" "}
              <b>
                artículos, guías paso a paso, noticias sobre iniciativas
                ecológicas
              </b>{" "}
              , y mucho más. Únete a la comunidad de EcoTuc y juntos
              trabajaremos para hacer del mundo un lugar más verde y sostenible
              💪.
              <br />
              <br />
              <b>
                ¡Comencemos juntos este emocionante viaje hacia un estilo de
                vida más ecológico!
              </b>{" "}
              🚀🌿
            </p>
          </div>
        </div>

        <div className={styles.stepsSection}>
          <img src={steps} alt="girl holding earth" />
          <div className={styles.stepsWrapper}>
            <h2>Tu guía para una vida más verde: 🌟🌿</h2>
            <div>
              <h3>Aprender sobre prácticas sostenibles: 📚</h3>
              <p>
                Las prácticas sostenibles se refieren a{" "}
                <b>
                  acciones que buscan reducir el impacto negativo en el medio
                  ambiente
                </b>{" "}
                y, al mismo tiempo,{" "}
                <b>promover un estilo de vida más equitativo y saludable</b>.
                Estas prácticas se basan en tres pilares fundamentales:
                reciclar, reutilizar y reducir.
              </p>
            </div>
            <br />
            <div>
              <h3>Guías de reciclaje: ♻️</h3>
              <p>
                En EcoTuc, creemos que el reciclaje es una de las prácticas más
                importantes para reducir nuestro impacto ambiental. Sin embargo,{" "}
                <b>
                  para que el reciclaje sea efectivo, es fundamental conocer
                  cómo hacerlo correctamente
                </b>
                . En esta pagina, te proporcionaremos guías detalladas sobre
                cómo reciclar diferentes tipos de materiales y te ayudaremos a{" "}
                <b>convertirte en un reciclador experto</b>.
              </p>
            </div>
            <br />
            <div>
              <h3>Ideas de reutilización:💡</h3>
              <p>
                En EcoTuc, creemos en la magia de dar nueva vida a objetos
                cotidianos en lugar de desecharlos. La reutilización{" "}
                <b>
                  es una de las formas más creativas y efectivas de reducir
                  residuos
                </b>{" "}
                y contribuir a un planeta más sostenible. En esta pagina, te
                presentamos una variedad de ideas ingeniosas y proyectos DIY
                (hazlo tú mismo) que te inspirarán a reutilizar y reciclar de
                manera creativa.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.saveSection}>
          <h2>Ayuda empezando por aqui: 👋🚨</h2>
          <p>
            <b>Las 3 R: Reutilizar, Reducir y Reciclar</b>. Son las tres reinas
            del consumo responsable 👑, una forma de ayudar a preservar el medio
            ambiente que se puede practicar tanto desde empresas o instituciones
            como de forma individual, desde el propio hogar 🏡.
          </p>
          <br />
          <p>
            De hecho, hoy nos gustaría darte algunas recomendaciones para{" "}
            <b>
              reutilizar productos cotidianos con el objetivo de darles una
              segunda vida útil
            </b>{" "}
            🌍 que puedes poner en práctica desde ya mismo y organizar, incluso,
            actividades en familia a su alrededor 👨‍👩‍👧‍👦.
          </p>
          <br />
          <p>
            <b>
              Reutilizar es una de las mejores formas de contribuir a ayudar al
              medio ambiente
            </b>{" "}
            🌱, por eso todas las ideas que puedas tener para dar una segunda
            vida útil a objetos que usas todos los días son un granito de arena
            que aportar a esta causa.
          </p>
        </div>
        <div className={styles.saveSection}>
          <h2>Consejos: 🤓💚</h2>
          <ol>
            <li>
              <strong>Reduce el consumo de agua y energía: 💧⚡️</strong> Instala
              dispositivos de ahorro de agua en tu hogar, como grifos de bajo
              flujo y duchas eficientes, y utiliza bombillas LED de bajo consumo
              energético para reducir tu huella de carbono.
            </li>
            <br />
            <li>
              <strong>Recicla conscientemente: 🙌</strong> Asegúrate de reciclar
              correctamente separando los materiales reciclables de los no
              reciclables. Infórmate sobre los programas de reciclaje locales y
              sigue las pautas establecidas.
            </li>
            <br />
            <li>
              <strong>Reduce el uso de plástico: 🥤</strong> Evita el uso de
              productos desechables de plástico, como botellas de agua, bolsas
              de plástico y utensilios de un solo uso. Opta por alternativas
              reutilizables, como botellas de acero inoxidable y bolsas de tela.
            </li>
            <br />
            <li>
              <strong>Compra productos de segunda mano: 🧸</strong> En lugar de
              comprar productos nuevos, considera la posibilidad de adquirir
              artículos usados o de segunda mano. Esto ayuda a reducir la
              demanda de nuevos recursos.
            </li>
            <br />
            <li>
              <strong>Reutiliza envases y recipientes: 🫙</strong> Lava y reutiliza
              frascos de vidrio, contenedores de plástico y otros envases en
              lugar de desecharlos. Pueden servir para almacenar alimentos o
              crear proyectos de bricolaje.
            </li>
            <br />
            <li>
              <strong>Reduce el desperdicio de alimentos: 🍔</strong> Planifica tus
              comidas, compra con una lista y almacena adecuadamente los
              alimentos para evitar el desperdicio. Compostar los desechos de
              cocina también es una excelente manera de reducir la basura.
            </li>
            <br />
            <li>
              <strong>Utiliza transporte sostenible: 🚌</strong> Opta por caminar,
              andar en bicicleta o utilizar el transporte público en lugar de
              conducir tu propio automóvil siempre que sea posible. Esto reduce
              las emisiones de carbono y la contaminación del aire.
            </li>
            <br />
            <li>
              <strong>Apoya la energía renovable: 🌞</strong> Si tienes la opción,
              elige proveedores de energía que utilicen fuentes renovables como
              la solar o la eólica. Esto contribuye a reducir la dependencia de
              los combustibles fósiles.
            </li>
            <br />
            <li>
              <strong>Fomenta la reutilización de ropa y objetos: 👚👠</strong> Dona
              ropa y objetos que ya no necesitas en lugar de tirarlos. Además,
              busca tiendas de segunda mano para comprar ropa y artículos
              usados.
            </li>
            <br />
            <li>
              <strong>Difunde la conciencia ambiental: 📢</strong> Comparte
              EcoTuc con amigos y familiares, y participa en actividades
              de sensibilización ambiental en tu comunidad. La educación es
              clave para promover un cambio positivo en la sociedad.
            </li>
          </ol>
        </div>
        <div className={styles.ending}>
          <img src={save} alt="girl holding earth" />
          <h1>
            Gracias <br />
            <span className={styles.accent}>por ser parte</span>
          </h1>
        </div>
      </Layout>
      {showOnboarding && <Onboarding />}
    </>
  );
};
export default Home;
