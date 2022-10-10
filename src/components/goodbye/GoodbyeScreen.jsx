import React from 'react'
import BackButton from '../backButton/BackButton'
import Title from '../title/Title'

const GoodbyeScreen = () => {
  return (
    <div className="container">
      <div className="presupuestar__header mb-2">
        <BackButton className="my-2" />
      </div>
      <Title text="Gracias" />
      <p className='text-light fw-bold'>Ha sido mucho el tiempo que nos hicimos felices, noche a noche, pero llegó mi hora de despedirme de ustedes. Agradezco a todos los que formaron parte de este hermoso proyecto que duró poco más de 5 años, sumando más de 150 eventos unicos.</p>
      <p className='text-light fw-bold'>A partir del <span className='text-danger'>01/01/2023</span>, no tomaré más fechas.</p>
      <p className='text-light text-end fw-bold'>Hasta siempre, Eze <i className='fa-solid fa-heart text-danger'></i></p>
    </div>
  )
}

export default GoodbyeScreen