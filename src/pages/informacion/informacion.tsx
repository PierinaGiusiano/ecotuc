import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Layout from "../../components/layout/layout";
import CardCategory from "../../components/card-category/card-category";
import CardTip from "../../components/card-tip/card-tip";
import CardModal from "../../components/card-modal/card-modal";

import TipsJSON from "../../JSON/tips.json";
import CategoriesJSON from "../../JSON/categorias.json";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./informacion.module.scss";

const Informacion = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedTipsId, setSelectedTipsId] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const handleTipsClick = (id: number) => {
    setSelectedTipsId(id);
    setIsModalOpen1(true);
  };

  const handleCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
    setIsModalOpen2(true);
  };

  const applyBoldStyle = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  const formatTextWithBoldStyle = (text: string) => {
    return text
      .split("\n")
      .map((line, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: applyBoldStyle(line) }}
        ></div>
      ));
  };

  const category = CategoriesJSON[selectedCategoryId - 1];
  const tip = TipsJSON[selectedTipsId - 1];

  const categoryDescription = category?.content
    ? formatTextWithBoldStyle(category.content)
    : [];

  const tipDescription = tip?.description
    ? formatTextWithBoldStyle(tip.description)
    : [];

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
        <h2>Tipos de materiales: </h2>
        <div className={styles.categoriesWrapper}>
          {CategoriesJSON.map((category) => (
            <CardCategory
              key={category.id}
              title={category.title}
              image={require(`../../assets/images/categories/${category.image}`)}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
          <CardModal
            isOpen={isModalOpen2}
            onClose={() => setIsModalOpen2(false)}
            category
            title={
              selectedCategoryId
                ? CategoriesJSON[selectedCategoryId - 1].title
                : ""
            }
            image={
              selectedCategoryId
                ? require(`../../assets/images/categories/${
                    CategoriesJSON[selectedCategoryId - 1].image
                  }`)
                : "no encuentra la ruta"
            }
          >
            <div className={styles.content}>{categoryDescription}</div>
          </CardModal>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Ideas de reutilización</h2>
        <div className={styles.containerSlider}>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            className={styles.sliderItems}
            breakpoints={{
              567: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1240: { slidesPerView: 4 },
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
                  title={tip.title}
                  description={tip.description}
                  image={require(`../../assets/images/tips/${tip.image}`)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <CardModal
            isOpen={isModalOpen1}
            onClose={() => setIsModalOpen1(false)}
            title={selectedTipsId ? TipsJSON[selectedTipsId - 1].title : ""}
            link={selectedTipsId ? TipsJSON[selectedTipsId - 1].link : ""}
            image={
              selectedTipsId
                ? require(`../../assets/images/tips/${
                    TipsJSON[selectedTipsId - 1].image
                  }`)
                : "no encuentra la ruta"
            }
          >
            <div className={styles.content}>{tipDescription}</div>
          </CardModal>
        </div>
      </div>
    </Layout>
  );
};

export default Informacion;
