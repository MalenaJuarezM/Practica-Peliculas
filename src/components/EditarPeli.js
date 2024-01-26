import React from 'react'

const EditarPeli = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {

    const titulo_componente = "Editar película"

    const guardarEdicion = (e, id) => {
        e.preventDefault()

        let target = e.target;

        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id)

        let peli_actualizada = {
            id,
            title: target.title.value,
            description: target.description.value,
        }

        pelis_almacenadas[indice] = peli_actualizada;

        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        setListadoState = (pelis_almacenadas);
        setEditar(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'> {titulo_componente} </h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type="text"
                    name="title"
                    className='titulo_editado'
                    defaultValue={peli.title} />

                <textarea name='description'
                    defaultValue={peli.description}
                    className='descripcion_editada' />

                <input type="submit" className="editar" value="Actualizar" />

            </form>
        </div>
    )
}

export default EditarPeli