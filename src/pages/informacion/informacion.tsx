import React, { useState } from "react";
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
import CardModal from "../../components/card-modal/card-modal";

import TipsJSON from "../../Tips/tips.json"

const categories = [
  { id: 1, title: "Baterías", image: battery },
  { id: 2, title: "Cartón", image: cardboard },
  { id: 3, title: "Electrónicos", image: electronic },
  { id: 4, title: "Metal", image: metal },
  { id: 5, title: "Orgánico", image: organic },
  { id: 6, title: "Papel", image: paper },
  { id: 7, title: "Plástico", image: plastic },
  { id: 8, title: "Vidrio", image: glass },
];

/*
const tips = [
  {
    id: 1,
    title: "Recicla de esta manera",
    image: recicla,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    id: 2,
    title: "Recicla de esta manera",
    image: recicla1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    id: 3,
    title: "Recicla de esta manera",
    image: recicla2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus",
  },
  {
    id: 4,
    title: "Recicla de esta manera",
    image: recicla,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    id: 5,
    title: "Recicla de esta manera",
    image: recicla1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.",
  },
  {
    id: 6,
    title: "Recicla de esta manera",
    image: recicla2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nihil. Minima beatae perferendis facere illum velit qui aperiam enim necessitatibus",
  },
];
*/

const Informacion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTipsId, setSelectedTipsId] = useState<number | null>(null);

  const handleTipsClick = (id: number) => {
    setSelectedTipsId(id);
    setIsModalOpen(true);
  }
  return (
    <Layout>
      <div className={styles.section}>
        <h1>Datos, tips y curiosidades 🤓✏️</h1>
        <p>
          Aquí encontrarás valiosos recursos e inspiración para llevar un estilo
          de vida más sostenible y contribuir al cuidado de nuestro planeta.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Categorias</h2>
        <div className={styles.categoriesWrapper}>
          {categories.map((category) => (
            <CardCategory
              key={category.id}
              title={category.title}
              image={category.image}
              //onClick={() => handleTipsClick(category.id)}  
              // necesito buscar desde otro json para cargar en el mismo modal
            />
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
            {TipsJSON.map((tip) => (
              <SwiperSlide 
                key={tip.id} 
                className={styles.item} 
                onClick={() => handleTipsClick(tip.id)}
              >
                <CardTip
                  title={tip.Titulo}
                  description={tip.Descripcion}
                  image={require(`../../Tips/Imagenes/${tip.Imagen}`)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <CardModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={selectedTipsId ? TipsJSON[selectedTipsId - 1].Titulo : ""}
            image={
              selectedTipsId
                ? require(`../../Tips/Imagenes/${TipsJSON[selectedTipsId - 1].Imagen}`)
                : "no encuentra la ruta"
            }
            description={selectedTipsId ? TipsJSON[selectedTipsId - 1].Descripcion : ""}
          >
        <p>*/☻\* ECOTUC */☻\*</p>
      </CardModal>
        </div>
      </div>
    </Layout>
          
  );
};

export default Informacion;

