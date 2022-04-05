import Style from "./Meteo.module.scss";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Meteo = () => {

    const { meteo } = useSelector(state => state.meteo)
    const { ville } = useSelector(state => state.app)











    console.log(meteo.main.temp_)
    console.log(ville)


    return (
        <div className={ Style.containerMeteo }>
            <h1>{ville}</h1>
            <p>température minimum : { meteo.main.temp_min }</p>
            <p>température maximum : { meteo.main.temp_max }</p>
        </div>
    )
}

export default Meteo;