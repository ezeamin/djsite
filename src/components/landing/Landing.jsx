import React from 'react';
import './landing.css';
import MainButton from './mainButton/MainButton';

const Landing = () => {
  return (
    <>
      <div className='pt-5 text-center'>
        <img
          className='landing__logo'
          src='/img/logo.webp'
          alt='logo Dj Eze Amin'
        />
      </div>
      <h1 className='main__title landing__name'>Dj Eze Amin</h1>
      <div className='text-light container'>
        <h5 className='mb-0 text-center fw-bold'>Gracias totales ❤️</h5>
        <hr className='my-2' />
        <p className='mb-1'>
          Este proyecto llegó a su fin, y ya no estoy brindando servicio de
          música.
        </p>
        <p className='mb-1'>
          Agradezco a todos los que formaron parte, espero nos podamos volver a ver pronto.
        </p>
        <p className='mb-0'>Hasta entonces, nos podemos encontrar en:</p>
      </div>
      <div className='container mt-2 landing__buttons'>
        <MainButton
          text='Enganchados'
          link='https://www.mixcloud.com/ezeamin/'
          icon=' fa-music'
          type='musica'
        />
        <MainButton
          text='Instagram'
          link='https://www.instagram.com/djezeamin/'
          icon='fa-instagram'
          type='redes'
          brands
        />
      </div>
      <div className='container text-center mt-4 mb-3'>
        <i className='my-0 text-light'>~ Life without music would be a mistake ~</i>
      </div>
    </>
  );
};

export default Landing;
