import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import Joyride, { Step } from 'react-joyride';


const tourSteps: Step[] = [
  {
    target: 'body',
    placement: 'center',
    title: 'Bienvenido!',
    content:
      'Parece que es tu primera vez aquí. Sigue esta breve introducción para aprender cómo moverte por nuestra Aplicacion.',
    disableBeacon: true,
  },
  {
    target: '.inicio',
    content: 'En el boton INICIO tienes informacion sobre nuestra pagina, quies somos y unos consejos.',
    placement: 'top',
    disableBeacon: true,
  },
  {
    target: '.ecopuntos',
    content: 'En el boton ECOPUNTOS tienes disponible un mapa con los Eco Puntos y Puntos verdes de Tucumán.',
    placement: 'top',
    disableBeacon: true,
  },
  {
    target: '.informacion',
    content: 'En el botón INFORMACIÓN encontrarás tips y curiosidades que te enseña que puedes y no puedes reciclar.',
    disableBeacon: true,
  },
];

const Onboarding = () => {
  const [steps] = useState(tourSteps);

  return (
    <>
      <div>
        <Joyride
            steps={steps}
            continuous
            showSkipButton={true}
            scrollOffset={200}
            locale={{
              skip: 'Omitir',
              next: 'Siguiente',
              back: 'Anterior',
              last: 'Finalizar'
            }}
        />
      </div>
    </>
  );
}
export default Onboarding;
