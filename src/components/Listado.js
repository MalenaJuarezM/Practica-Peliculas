import React, { useEffect, useState } from 'react'
import EditarPeli from './EditarPeli';

const Listado = ({ listadoState, setListadoState }) => {

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    function conseguirPeliculas() {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        let peliculas_almacenadas = conseguirPeliculas()

        let nuevo_array_pelis = peliculas_almacenadas.filter(peli => peli.id !== parseInt(id))

        setListadoState(nuevo_array_pelis);

        localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis))
    }

    return (
        <>
            {listadoState != null ?

                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.title}</h3>
                            <p className="description">{peli.description}</p>
                            <button onClick={() => setEditar(peli.id)} className="edit">Editar</button>
                            <button onClick={() => borrarPeli(peli.id)} className="delete">Borrar</button>

                            {editar === peli.id && (<EditarPeli
                                peli={peli}
                                conseguirPeliculas={conseguirPeliculas}
                                setEditar={setEditar}
                                setListadoState={setListadoState} />)}

                        </article>
                    )
                })
                :
                < h2 > No hay peliculas para mostar.</h2 >
            }
        </>
    )
}

export default Listado