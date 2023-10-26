import React, { useState } from 'react';
import Joyride, { Step } from 'react-joyride';


const tourSteps: Step[] = [
  {
    target: 'body',
    placement: 'center',
    title: '¡Bienvenido!',
    content:
      'Parece que es tu primera vez por aquí 👀. Sigue esta breve introducción para aprender cómo moverte por nuestra Aplicación.',
    disableBeacon: true,
  },
  {
    target: '.inicio',
    content: 'En el botón INICIO tienes información sobre nuestra página ✍️, quiénes somos 👥 y unos consejos 🧠.',
    disableBeacon: true,
  },
  {
    target: '.ecopuntos',
    content: 'En el botón ECOPUNTOS tienes disponible un mapa 🗺️ con los Eco Puntos y Puntos verdes de Tucumán 📌.',
    disableBeacon: true,
  },
  {
    target: '.informacion',
    content: 'En el botón INFORMACIÓN encontrarás tips y curiosidades 🤓 que te enseñan qué puedes y no puedes reciclar.',
    disableBeacon: true,
  }  
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
            styles={{
              options: {
                arrowColor: '#92be87',
                backgroundColor: '#fff',
                overlayColor: 'rgba(0, 0, 0, 0.7)',
                primaryColor: '#92be87',
                textColor: '#235130',
                zIndex: 1000,
              }
            }}
        />
      </div>
    </>
  );
}
export default Onboarding;