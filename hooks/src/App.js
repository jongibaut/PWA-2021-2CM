import React, {useState} from 'react';
import Registro from './components/Registro';
import Listado from './components/Listado';
import Personajes from './components/Personajes/Personajes';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const agregarUsuarios = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  }
  
  return (
    <>
      <div className="container-fluid text-white">
        <div className="row mt-5 justify-content-center">
          <div className="col-5">
            <Registro agregarUsuarios = {agregarUsuarios}/>
          </div>
          <div className="col-5">
            <Listado usuarios = {usuarios}/>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <Personajes />
        </div>
      </div>
    </>
  );
}

export default App;
