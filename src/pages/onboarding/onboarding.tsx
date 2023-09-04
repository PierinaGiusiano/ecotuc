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
    target: '.menu',
    content: 'Nuestra perspeciva',
    placement: 'top',
    disableBeacon: true,
  },
  {
    target: '.paso1',
    content: 'PASO 1.',
    disableBeacon: true,
  },
  {
    target: '.paso2',
    content: 'PASO 2.',
    disableBeacon: true,
  },
  {
    target: '.paso3',
    content: 'PASO 3.',
    disableBeacon: true,
  },
  {
    target: '.informacion',
    content: 'En el botón INFORMACIÓN encontrarás tips y curiosidades.',
    disableBeacon: true,
  },
  {
    target: '.consejo',
    content: 'Por ultimo, tenemos 10 consejos para brindarte.',
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
