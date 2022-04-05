import React, { useState, useEffect } from "react";
import Style from "./Menu.module.scss";
import { useDispatch } from 'react-redux';
import { setVilleAll } from '../store/appSlice'
import { setMeteoAll } from '../store/appMeteo'
import { useSelector } from 'react-redux';
import * as axios from 'axios';


const Menu = () => {

    const dispatch = useDispatch()

    const [listVilles, setListVille] = useState([]);
    const { ville } = useSelector(state => state.app)
    const [values, setValues] = useState({
        ville: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values)
    }

    useEffect(() => {
        const villeUrl = window.location.href
        const ville = villeUrl.substr(29, 80);
        console.log(ville)
        dispatch(setVilleAll(ville))
    }, []);


    console.log(ville)
    const [ villeUrl, setVilleUrl] = useState('http://api.openweathermap.org/geo/1.0/direct?q=' + ville + '&limit=1&appid=5c6302fc42aa4dca4ba4317f10f90784');




    useEffect(() => {
        axios.get(villeUrl, {
        })
            .then( response => {
                console.log(response.data) 
                setListVille(response.data)
                const lattitude = Math.round(response.data[0].lat)
                const longitude = Math.round(response.data[0].lon)

                axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+ lattitude +'&lon='+ longitude +'&appid=5c6302fc42aa4dca4ba4317f10f90784', {
                })
                    .then( response => {
                        console.log(response.data) 
                        dispatch(setMeteoAll(response.data))
                    })
                    .catch( err => console.log(err));
            })
            .catch( err => console.log(err));
    }, [])


    return (
        <div className={ Style.containerMenu }>
            <form>
                <input onChange={handleChange('ville')} name='ville' type='text' placeholder="Nom d'une ville" value={values.ville} />
                <button type='submit'>Ajouter</button>
            </form>
            <h3>ville sélectionné :</h3>
            <ul>
                <li>{ville}</li>
            </ul>
            <h3>ville affiché :</h3>
            <ul>
            { listVilles.map((ville, index) => (
                    <li key={ index } className={ Style.listVilles}>
                        { ville.name }
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default Menu;