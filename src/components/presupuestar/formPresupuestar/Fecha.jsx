import React, { useRef } from 'react';
import { Badge } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { fetchFecha } from '../../../api/fetchingFunctions';

const Fecha = (props) => {
  // const [badgeStatus, setBadgeStatus] = React.useState("success");
  // const [badgeText, setBadgeText] = React.useState("disponible!");
  const [badgeStatus, setBadgeStatus] = React.useState('');
  const [badgeText, setBadgeText] = React.useState('');

  const fechaInput = useRef();
  const turnoDia = useRef();
  const turnoNoche = useRef();

  const { fecha, turno, setFecha, setTurno } = props;

  React.useEffect(() => {
    if (fecha && turno) {
      const split = fecha.split('-');
      const fechaValue = new Date(split[0], split[1] - 1, split[2]);

      if (fechaValue.getFullYear() >= 2023) {
        Swal.fire({
          title: 'Gracias ❤️',
          text: 'Mi carrera llega a su fin en el 2022, y no tomaré fechas para el 2023. ¡Gracias por acompañarme en este proyecto!',
        });
        return;
      }

      //check if date is available
      fetchFecha(fechaValue, turno).then((res) => {
        if (!res.data?.isAvailable) {
          Swal.fire({
            title: 'Fecha no disponible',
            text: 'Perdon! la fecha seleccionada no esta disponible. Podes igualmente presupuestar para consultar el precio :D',
            icon: 'error',
            confirmButtonText: 'Ok',
            showCancelButton: false,
          });
          fechaInput.current.classList = 'form__input form__input--error';
          setBadgeStatus('danger');
          setBadgeText('no disponible');
        } else {
          fechaInput.current.classList = 'form__input';
          setBadgeStatus('success');
          setBadgeText('disponible');
        }
      });
    }
  }, [fecha, turno]);

  const handleTurno = (e) => {
    setTurno(e.target.value);

    if (e.target.value === 'Dia') {
      turnoDia.current.classList = 'form__button form__button--selected';
      turnoNoche.current.classList = 'form__button';
    } else {
      turnoDia.current.classList = 'form__button';
      turnoNoche.current.classList = 'form__button form__button--selected';
    }
  };

  const handleFechaBlur = (e) => {
    const fecha = e.target.value;

    if (!/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/i.test(fecha)) {
      fechaInput.current.classList = 'form__input form__input--error';
      setBadgeStatus('danger');
      setBadgeText('no valida');
    } else {
      //check if date is in the past
      const date = new Date(fecha);
      const today = new Date();

      if (date < today) {
        fechaInput.current.classList = 'form__input form__input--error';
        setBadgeStatus('danger');
        setBadgeText('no valida');
      } else if (date.getDay() === 4) {
        setBadgeStatus('warning');
        setBadgeText('restringida');
      }
    }
  };

  return (
    <div className='form-group'>
      <div className='form__fechaGroup mb-1'>
        <p className='form__label m-0'>Fecha</p>{' '}
        {((props.fecha && props.turno) || badgeStatus === 'danger') && (
          <Badge bg={badgeStatus} className='mt-1 mb-0 form__fecha__badge'>
            Fecha {badgeText}
          </Badge>
        )}
      </div>
      <input
        type='date'
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        onBlur={handleFechaBlur}
        ref={fechaInput}
        className='form__input form__input__fecha'
        placeholder='dd/mm/aaaa'
      />
      <div className='form__buttons mt-2'>
        <input
          ref={turnoDia}
          className='form__button'
          type='button'
          value='Dia'
          onClick={handleTurno}
        />
        <input
          ref={turnoNoche}
          className='form__button'
          type='button'
          value='Noche'
          onClick={handleTurno}
        />
      </div>
    </div>
  );
};

export default Fecha;
