import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {opciones} from "./opciones.js"

export function FormularioUbicacion() {
    const {register,handleSubmit} = useForm();
    
    //Departamentos
    const [opcionDepartamento, setOpcionDepartamento] = useState('');
    //Provincias
    const [opcionProvincia, setOpcionProvincia] = useState('');
    const [listaProvincias, setListaProvincias] = useState([]);
    //Distritos
    const [opcionDistrito, setOpcionDistrito] = useState('');
    const [listaDistritos, setListaDistritos] = useState([]);
  
    const onSubmit = (data) => {
        console.log(data);
        alert(JSON.stringify(data));
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        //Actualizar opciones que cambian valores
        if(name === 'opcionDepartamento'){
            setOpcionDepartamento(value);
        }else if(name === 'opcionProvincia'){
            setOpcionProvincia(value);
        }
        // let nuevasProvincias = [];  
        // nuevasProvincias = opciones.find((departamento)  => departamento.nombre === opcionDepartamento).provincias;
        // setListaProvincias(nuevasProvincias);
        // let nuevosDistritos = []; 
        // nuevosDistritos = nuevasProvincias[0].distritos;
        // setListaDistritos(nuevosDistritos);

    }

    return(
      <>      
        <form onSubmit={handleSubmit(onSubmit)}>
          <select {...register("departamento")} onChange={handleChange}  >
              {opciones.map((option) => (
                  <option key={option.nombre} value={option.nombre}>
                      {option.nombre}
                  </option>
              ))}
          </select>
          <select {...register("provincia")} >
              {listaProvincias.map((option) => (
                  <option key={option.nombre} value={option.nombre}>
                      {option.nombre}
                  </option>
              ))}
          </select>
          {/* <select {...register("distrito")}>
              {listaDistritos.map((option) => (
                  <option key={option.nombre} value={option.nombre} >
                      {option.nombre}
                  </option>
              ))}
          </select>         */}
          <button type='submit'>guardar</button>
        </form>
        
        </>
    );
  
  
  }