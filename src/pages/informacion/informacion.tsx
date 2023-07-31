import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions, Navigation } from "swiper";

import Layout from "../../components/layout/layout";
import CardCategory from "../../components/card-category/card-category";
import CardTip from "../../components/card-tip/card-tip";

import cardboard from "../../assets/images/categories/cardboard.png";
import battery from "../../assets/images/categories/battery.png";
import electronic from "../../assets/images/categories/electric.png";
import metal from "../../assets/images/categories/metal.png";
import organic from "../../assets/images/categories/organic.png";
import paper from "../../assets/images/categories/paper.png";
import plastic from "../../assets/images/categories/plastic.png";
import glass from "../../assets/images/categories/glass.png";
import recicla from "../../assets/images/recicla.jpg";
import recicla1 from "../../assets/images/recicla-1.jpg";
import recicla2 from "../../assets/images/recicla-2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./informacion.module.scss";

const categories = [
  { title: "Baterías", image: battery },
  { title: "Cartón", image: cardboard },
  { title: "Electrónicos", image: electronic },
  { title: "Metal", image: metal },
  { title: "Orgánico", image: organic },
  { title: "Papel", image: paper },
  { title: "Plástico", image: plastic },
  { title: "Vidrio", image: glass },
];

const tips = [
  {
    title: "Recicla de esta manera",
    image: recicla,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    title: "Recicla de esta manera",
    image: recicla1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    title: "Recicla de esta manera",
    image: recicla2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus",
  },
  {
    title: "Recicla de esta manera",
    image: recicla,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    title: "Recicla de esta manera",
    image: recicla1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    title: "Recicla de esta manera",
    image: recicla2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus",
  },
];

const Informacion = () => {
  return (
    <Layout>
      <div className={styles.section}>
        <h1>Datos, tips y curiosidades</h1>
        <p>
          Aquí encontrarás valiosos recursos e inspiración para llevar un estilo
          de vida más sostenible y contribuir al cuidado de nuestro planeta.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Categorias</h2>
        <div className={styles.categoriesWrapper}>
          {categories.map((category) => (
            <CardCategory title={category.title} image={category.image} />
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h2>Tips y curiosidades</h2>
        <div className={styles.containerSlider}>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            className={styles.sliderItems}
            breakpoints={{
              567: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
              1240: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {tips.map((tip) => (
              <SwiperSlide className={styles.item}>
                <CardTip
                  image={tip.image}
                  title={tip.title}
                  description={tip.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Informacion;
