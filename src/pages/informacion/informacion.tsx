import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Layout from "../../components/layout/layout";
import CardCategory from "../../components/card-category/card-category";
import CardTip from "../../components/card-tip/card-tip";

import styles from "./informacion.module.scss";
import CardModal from "../../components/card-modal/card-modal";

import TipsJSON from "../../JSON/tips.json";
import CategoriesJSON from "../../JSON/categorias.json";

const Informacion = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedTipsId, setSelectedTipsId] = useState<number>(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);

  const handleTipsClick = (id: number) => {
    setSelectedTipsId(id);
    setIsModalOpen1(true);
  };

  const handleCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
    setIsModalOpen2(true);
  };

  const selectedCategory = CategoriesJSON[selectedCategoryId - 1];

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
          {CategoriesJSON.map((category) => (
            <CardCategory
              key={category.id}
              title={category.Titulo}
              showDescription={false}
              description="Categorias"
              showImage={true}
              image={require(`../../assets/images/categories/${category.Imagen}`)}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
          <CardModal // Modal para categoria
            isOpen={isModalOpen2}
            onClose={() => setIsModalOpen2(false)}
            showHeader={true}
            showImage={true}
            showDescription={false}
            description={
              selectedCategoryId
                ? CategoriesJSON[selectedCategoryId - 1]?.Descripcion ||
                "EcoTuc1"
                : "EcoTuc2"
            }
            title={
              selectedCategoryId
                ? CategoriesJSON[selectedCategoryId - 1].Titulo
                : ""
            }
            image={
              selectedCategoryId
                ? require(`../../assets/images/categories/${CategoriesJSON[selectedCategoryId - 1].Imagen
                  }`)
                : "no encuentra la ruta"
            }
            imagenSize={"150px"}
          >
            <div className={styles.containerSlider}>
              <Swiper // Swiper para categoria
                cssMode={true}
                navigation={true}
                pagination={true}
                className={styles.sliderItems}
                modules={[Navigation, Pagination]}
              >
                {selectedCategory &&
                  selectedCategory.Subcategoria?.map((subcategory) => (
                    <SwiperSlide key={subcategory.id} className={styles.Items}>
                      <CardCategory
                        title={subcategory.Nombre}
                        showDescription={true}
                        description={subcategory.informacion}
                        showImage={false}
                        image={require(`../../assets/images/categories/${CategoriesJSON[selectedCategoryId - 1].Imagen
                          }`)}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </CardModal>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Tips y curiosidades</h2>
        <div className={styles.containerSlider}>
          <Swiper // Swiper para Tips
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
                  image={require(`../../assets/images/tips/${tip.Imagen}`)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <CardModal // Modal para Tips
            isOpen={isModalOpen1}
            onClose={() => setIsModalOpen1(false)}
            showHeader={true}
            showImage={true}
            showDescription={true}
            title={selectedTipsId ? TipsJSON[selectedTipsId - 1].Titulo : ""}
            description={
              selectedTipsId ? TipsJSON[selectedTipsId - 1].Descripcion : ""
            }
            image={
              selectedTipsId
                ? require(`../../assets/images/tips/${TipsJSON[selectedTipsId - 1].Imagen
                  }`)
                : "no encuentra la ruta"
            }
            imagenSize={"480px"}
          >
            <div>

            </div>
          </CardModal>
        </div>
      </div>
    </Layout>
  );
};

export default Informacion;