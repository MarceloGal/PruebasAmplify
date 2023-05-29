import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Link} from "react-router-dom";


import { createBrowserRouter, RouterProvider, } from "react-router-dom";


import {departamentos} from "./infoDirecciones.js";

import {useState} from 'react';

import {useForm} from 'react-hook-form';

import {OptionLists,ListaAnidadaDinamica, ListaDirecciones} from "./listaAnidadaDinamica";

import {FormularioUbicacion} from "./FomularioUbicacion.js";

import ListaDinamicaForm from './listaDinamicaForm';
import ListaDinamicaForm2 from './listaDinamicaForm2';
import ObteniendoPokemon from './pruebaFetch';
import {ConsultandoPlaca} from './pruebaFetch';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rutas = createBrowserRouter([
  {
    path: "/",
    element: inicio(),
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/pagina2",
    element: pag2(),
  },
]);

function inicio() {
  return (
    <>
      <h1>
        Hola Mundo!
      </h1>
      <Link to={"/pagina2"}>A pagina 2</Link>
    </>    
  );
}

function pag1() {
  return <h1>Pagina 1</h1>
}

function pag2() {
  return(
  <>
    <h1>Pagina 2</h1>
    <Link to={"/"}>A casa</Link>
  </>   
  ); 
}

const  buscarPorNombre = (nombre) => {
  return departamentos.find(ubicacion => ubicacion.nombre === nombre);
}

function SelectorDepartamentos(){

  const {register, handleSubmit} = useForm();


  const onSubmit = (data) => {
    console.log(data);
  }

    // const [ubicacion, setUbicacion] = useState('');

    // const setUbicacion = () => {
      
    // }

  const [departamento, setDepartamento] = useState('');


  const [provincia, setProvincia] = useState('');


  const [distrito, setDistrito] = useState('');

  return(
    <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          {departamentos[0].nombre}
        </div>
        <div>
          Nombre Completo: 
          <input type='text' {...register('nombreCompleto')}/>
        </div>
        <div>
          DNI: 
          <input type='text' {...register('Dni')}/>
        </div>
        <div>
          Departamento:
          <select {...register('departamento')} >
            {
              departamentos.map(
                (departamento) =>
                {
                  return(
                    <option value={departamento.nombre} > {departamento.nombre} </option>
                  );
                }
              )
            }
          </select >
        </div>
        <div>
          Provincia:
          <select {...register('provincia')} >
          {
              departamentos[0].provincias.map(
                (provincia) =>
                {
                  return(
                    <option value={provincia.nombre} > {provincia.nombre} </option>
                  );
                }
              )
            }
          </select>
        </div>
        <div>
          Distrito:
          <select {...register('distrito')} >
            {
              departamentos[0].provincias[0].distritos.map(
                (distrito) =>
                {
                  return(
                    <option value={distrito.nombre} > {distrito.nombre} </option>
                  );
                }
              )
            }
          </select>
        </div>
        <div>
          <button type="submit" >Continuar</button> 
        </div>


    </form>
  );

}

function barraSuperior() {
  return 
  <div>
    <table class="default">
        <tr>
          <td>Celda 1</td>
          <td>Celda 2</td>
          <td>Celda 3</td>
        </tr> 
    </table>
  </div>
  
}

root.render( 
  <>
    <RouterProvider router={rutas} />
    {/* <SelectorDepartamentos/> */}
    {/* <ListaAnidadaDinamica/> */}
    {/* <ListaDirecciones/> */}
    
    {/* <SelectorDepartamentos/> */}

    {/* <FormularioUbicacion/> */}
    {/* <OptionLists/> */}
    {/* <ListaDinamicaForm/>
    <ListaDinamicaForm2/>
    <ObteniendoPokemon/> */}
    <ConsultandoPlaca/> 
  </>  
);

reportWebVitals();
