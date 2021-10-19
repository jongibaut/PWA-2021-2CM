import React from 'react';
import useGet from './../../utils/useHttp';
import Personaje from './Personaje';
import Loading from './../Loading/Loading';
const Personajes = () => {
    const[personajes, cargando] = useGet({url: "https://rickandmortyapi.com/api/character"});
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-info">Personajes:</h1>
                    </div>
                {cargando ? (
                    <Loading />
                ) : (
                    personajes.map( personaje =>(
                        <Personaje key={personaje.id} {...personaje} />
                        )
                    )
                )          
                }
                </div>
            </div>
        </>
     );
}
 
export default Personajes;