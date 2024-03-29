import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import BackButton from '../backButton/BackButton';
import Title from '../title/Title';
import FormPresupuestar from './formPresupuestar/FormPresupuestar';
// import Info from "./info/Info";
import './presupuestar.css';
import Price from './price/Price';

const PanelPresupuestar = () => {
  const [estMay, setEstMay] = React.useState(false);
  const [estMen, setEstMen] = React.useState(false);

  const [price, setPrice] = React.useState('0');

  useEffect(() => {
    Swal.fire({
      title: 'Atencion',
      text: 'Servicio temporalmente no disponible. Por favor, contactar con Ezequiel para presupuestar',
      icon: 'warning',
    });
  }, []);

  return (
    <div className='container'>
      <div className='presupuestar__header mb-2'>
        <BackButton className='my-2' />
        <Price price={price} estMay={estMay} estMen={estMen} />
      </div>
      <Title text='Presupuestar' />
      <FormPresupuestar
        setEstMay={setEstMay}
        setEstMen={setEstMen}
        setPrice={setPrice}
      />
    </div>
  );
};

export default PanelPresupuestar;
