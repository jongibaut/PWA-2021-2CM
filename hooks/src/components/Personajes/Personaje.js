import React from 'react';
const Personaje = ({id, name, image, status, species}) => {
    return (   
    <div className="col-4 mt-3" key={id}>
        <div className="card">
            <img src={image} alt={id} className="card-img-top"/>
                <div className="card-body text-dark">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Estado: {status}</p>
                    <p className="card-text">Especio: {species}</p>
                </div>
        </div>
    </div>
    );
}
 
export default Personaje;