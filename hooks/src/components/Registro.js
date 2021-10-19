import React, {useState} from 'react';
const shortid = require('shortid');

const Registro = ({agregarUsuarios}) => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
    });
    const handlerInput = (e) => {
        const {value} = e.target;
        setUsuario({
            ...usuario,
            [e.target.id] : value
        });
    }
    const registro = (e) => {
        e.preventDefault();
        const {nombre, apellido, email} = usuario;
        const usuarioAgregar = {
            id: shortid.generate(),
            nombre,
            apellido,
            email
        }
        agregarUsuarios(usuarioAgregar);
        setUsuario({
            nombre: '',
            apellido: '',
            email: '',
        });
    }
    return (
        <>
            <form onSubmit={registro}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre<span className="text-danger">*</span></label>
                    <input type="text" id="nombre" className="form-control" onChange={handlerInput} value= {usuario.nombre} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido<span className="text-danger">*</span></label>
                    <input type="text" id="apellido" className="form-control" onChange={handlerInput} value= {usuario.apellido} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Mail<span className="text-danger">*</span></label>
                    <input type="email" id="email" className="form-control" onChange={handlerInput} value= {usuario.email} />
                </div>
                <div className="d-grid gap-2 mt-2">
                    <button type="submit" className="btn btn-info">Enviar</button>
                </div>
            </form>
        </>
    )
}

export default Registro
