import React from 'react';
const Listado = ({usuarios}) => {
    return ( 
        <>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(
                        ({id, nombre, apellido, email}) => (
                            <tr key={id}>
                                <th scope="row">{id}</th>
                                <td>{nombre}</td>
                                <td>{apellido}</td>
                                <td>{email}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    );
}
 
export default Listado;