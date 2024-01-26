import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({ setListadoState }) => {

    const tituloComponente = "Añadir película"

    const [peliState, setPeliState] = useState({
        title: "",
        description: ""
    })

    const { title, description } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        let peli = {
            id: new Date().getTime(),
            title,
            description,
        }

        setPeliState(peli)

        setListadoState(elemento => {
            return [...elemento, peli];
        })

        GuardarEnStorage("pelis", peli)
    }

    return (
        <div className="add">
            <h3 className="title"> {tituloComponente} </h3>
            <form onSubmit={conseguirDatosForm}>
                {/*<h4> {(title && description) && "Has creado la película " + title} </h4>*/}
                <input type="text" id="title" name="title" placeholder="Título" />
                <textarea id="description" name="description" placeholder="descripción"></textarea>
                <input type="submit" id="save" value="guardar" />
            </form>
        </div>
    )
}

export default Crear