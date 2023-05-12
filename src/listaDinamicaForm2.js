import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import ubicacionesJSON from "./ubicaciones.json";

export default function ListaDinamicaForm2 () {

    

    const { control, register,handleSubmit } = useForm();


    const [departamento,setdepartamento] = useState(ubicacionesJSON[0].nombre);
    const [listaDepartamentos,setListaDepartamentos] = useState(ubicacionesJSON);
    const [provincia,setProvincia] = useState(ubicacionesJSON[0].provincias[0].nombre);
    const [listaProvincias, setListaProvincias] = useState(ubicacionesJSON[0].provincias);
    const [distrito,setDistrito] = useState(ubicacionesJSON[0].provincias[0].distritos[0]);
    const [listaDistritos, setListaDistritos] = useState(ubicacionesJSON[0].provincias[0].distritos);

    const ubicacion = {
        departamento: departamento,
        provincia: provincia,
        distrito: distrito
    };

    const cambioDepartamento = (depSelec) => {
        const depObtenido = ubicacionesJSON.find( (departamento)  => departamento.nombre === depSelec);
        setdepartamento(depObtenido.nombre);
        setProvincia(depObtenido.provincias[0].nombre);
        setListaProvincias( depObtenido.provincias );
        setDistrito(depObtenido.provincias[0].distritos[0]);
        setListaDistritos( depObtenido.provincias[0].distritos);
    };

    const cambioProvincia = (provSelec) => {
        const provObtenida = listaProvincias.find( (provincia)  => provincia.nombre === provSelec);
        setProvincia(provObtenida.nombre);
        setListaDistritos( provObtenida.distritos );
        setDistrito(provObtenida.distritos[0]);
    };

    const cambioDistrito = (distSelec) => {
        setDistrito(distSelec);
    };

    useEffect(() => {
        setListaDepartamentos( ubicacionesJSON );
    }, []);

    const onSubmit = (data) => {
        console.log(ubicacion.departamento," ",ubicacion.provincia," ",ubicacion.distrito);
        alert(`departamento: ${ubicacion.departamento}, provincia: ${ubicacion.provincia}, distrito: ${ubicacion.distrito}`);
        // navigate("/cotizacion2");
    }

    return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <label >Departamento:</label>
        <Controller
            name="departamento"
            control={control}
            render={({ field: { onChange } }) => (
                <select onChange={(e) => {
                    onChange(e.target.value);
                    cambioDepartamento(e.target.value);
                }}>
                {listaDepartamentos.map((option) => (
                    <option key={option.nombre} value={option.nombre}>
                        {option.nombre}
                    </option>
                ))}
                </select>
            )}
        />

        <label>Provincia:</label>
        <Controller
            name="provincia"
            control={control}
            render={({ field: { onChange } }) => (
                <select onChange={(e) => {
                    onChange(e.target.value);
                    cambioProvincia(e.target.value);
                }}>
                {listaProvincias.map((option) => (
                    <option key={option.nombre} value={option.nombre}>
                        {option.nombre}
                    </option>
                ))}
                </select>
            )}
        />

        <label >Distrito:</label>
        <Controller
            name="distrito"
            control={control}
            render={({ field: { onChange } }) => (
                <select 
                    onChange={(e) => { 
                        onChange(e.target.value); 
                        cambioDistrito(e.target.value);
                    }}>
                {listaDistritos.map((distrito) => (
                    <option key={distrito} value={distrito}>
                        {distrito}
                    </option>
                ))}
                </select>
            )}  
        />
        
        <button type="submit">Probar</button>
    </form>
    );
}