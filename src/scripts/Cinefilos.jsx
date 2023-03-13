import React from 'react'
import { ContainerCinefilo, TitleUser, Information, UserInformation } from '../styles/StyledComponent'
import '../styles/styles.css';

const cinefilos = ({ name, age, country, favouriteMovie }) => {
  return (
    <ContainerCinefilo>
      <TitleUser>Buenas tardes cinefilo<span>!!</span></TitleUser>
      <p style={{fontSize: "20px"}}>perfil cinefilo</p>
      <ContainerCinefilo>
        <Information>Nombre: <UserInformation>{name}</UserInformation></Information>
        <Information>Edad: <UserInformation>{age}</UserInformation></Information>
        <Information>Ciudad: <UserInformation>{country}</UserInformation></Information>
        <Information>Distancia: <UserInformation>{favouriteMovie}</UserInformation></Information>
      </ContainerCinefilo>
    </ContainerCinefilo>
  )
}

export default cinefilos