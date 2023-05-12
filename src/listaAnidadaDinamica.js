import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {opciones} from "./opciones.js"

export function ListaAnidadaDinamica () {
  // Define state for the first and second options
  const [firstOption, setFirstOption] = useState('');
  const [secondOptions, setSecondOptions] = useState([]);
  // Define event handler for the first option
  const handleFirstOptionChange = (event) => {
    const selectedOption = event.target.value;
    setFirstOption(selectedOption);
    // Determine the second options based on the selected first option
    let newSecondOptions = [];
    if (selectedOption === 'Option 1') {
      newSecondOptions = ['Option A', 'Option B', 'Option C'];
    } else if (selectedOption === 'Option 2') {
      newSecondOptions = ['Option X', 'Option Y', 'Option Z'];
    }
    setSecondOptions(newSecondOptions);
  };

  return (
    <div>
      <select value={firstOption} onChange={handleFirstOptionChange}>
        {/* <option value="">Select First Option</option> */}
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
      </select>
      <select>
        {secondOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select> 
    </div>
  );
}

export function ListaDirecciones () {
    // Define state for the first and second options
    // const {register,handleSubmit} = useForm();

    const [depSelec, setDepSelec] = useState(opciones[0].nombre);

    const [provSelec, setProvSelec] = useState(opciones[0].provincias[0].nombre);
    const [listaProvincias, setListaProvincias] = useState(opciones[0].provincias);

    const [distSelec,setDistSelec] = useState(opciones[0].provincias[0].distritos[0].nombre);
    const [listaDistritos, setListaDistritos] = useState(opciones[0].provincias[0].distritos);

    const ubicacion = {depSelec,provSelec,distSelec};

    // Define event handler for the first option
    const capturarPrimeraOpcion = (event) => {
        const depSeleccionado = event.target.value;        
        let nuevoDep = [];  
        nuevoDep = opciones.find( (departamento)  => departamento.nombre === depSeleccionado);
        setDepSelec(nuevoDep.nombre);
        setListaProvincias(nuevoDep.provincias);
        setListaDistritos(nuevoDep.provincias[0].distritos);
    };
    const capturarSegundaOpcion = (event) => {
        const provSeleccionada = event.target.value;        
        // Determine the second options based on the selected first option
        let nuevaProvincia = [];  
        nuevaProvincia = listaProvincias.find( (provincia)  => provincia.nombre === provSeleccionada);
        setProvSelec(nuevaProvincia.nombre);
        setListaDistritos(nuevaProvincia.distritos);
    };

    const handleSave = event => {
      // Display an alert with the selected options
      // alert(`Selected Options: ${depSelec.nombre}, ${provSelec.nombre}, ${distSelec.nombre}`);
      // setDepSelec(event);
      alert(depSelec+" "+provSelec+" "+distSelec);
      console.log(JSON.stringify(ubicacion));
    };

    const guardarDepartamento = event => {
      const depNuevo = event.target.value;
      setDepSelec(depNuevo);
      let nuevoDep = [];  
      nuevoDep = opciones.find( (departamento)  => departamento.nombre === depNuevo);
      setListaProvincias(nuevoDep.provincias);
      setProvSelec(nuevoDep.provincias[0].nombre);
      setListaDistritos(nuevoDep.provincias[0].distritos);
      setDistSelec(nuevoDep.provincias[0].distritos[0].nombre);
    }

    const guardarProvincia = event => {
      const provNueva = event.target.value;
      setProvSelec(provNueva);
      let nuevaProv = [];  
      nuevaProv = listaProvincias.find( (provincia)  => provincia.nombre === provNueva);
      setListaDistritos(nuevaProv.distritos);
      setDistSelec(nuevaProv.distritos[0].nombre);
    }

    return (
      <>
      <form >
        <select name='departamento' value={depSelec}  onChange={guardarDepartamento}>
            {opciones.map((departamento) => (
                <option key={departamento.nombre} value={departamento.nombre}>
                    {departamento.nombre}
                </option>
            ))}
        </select>
        <select name='provincia' value={provSelec}  onChange={guardarProvincia} > 
            {listaProvincias.map((option) => (
                <option key={option.nombre} value={option.nombre}>
                    {option.nombre}
                </option>
            ))}
        </select>
        <select name='distrito' value={distSelec} onChange={e => setDistSelec(e.target.value)}>
            {listaDistritos.map((option) => (
                <option key={option.nombre} value={option.nombre} >
                    {option.nombre}
                </option>
            ))}
        </select>        
      </form>
      <button onClick={handleSave}>guardar</button>
      <p>Departamento: {depSelec}</p>
      <p>Provincia:    {provSelec}</p>
      <p>Distrito:     {distSelec}</p>
      </>
    );
  }



export function OptionLists () {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [thirdOptions, setThirdOptions] = useState([]);

  const { register, handleSubmit } = useForm();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'option1') {
      setSelectedOption1(value);
    } else if (name === 'option2') {
      setSelectedOption2(value);
    }
    
    // Update the third options based on the selected options
    if (selectedOption1 === 'Option 1' && selectedOption2 === 'Option A') {
      setThirdOptions(['1', '2', '3']);
    } else if (selectedOption1 === 'Option 1' && selectedOption2 === 'Option B') {
      setThirdOptions(['4', '5', '6']);
    } else if (selectedOption1 === 'Option 2' && selectedOption2 === 'Option C') {
      setThirdOptions(['7', '8', '9']);
    } else {
      setThirdOptions([]);
    }
  };

  const onSubmit = (data) => {
    // Display an alert with the form data
    alert(`Selected Options: ${data.option1}, ${data.option2}, ${data.option3 || 'None'}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label htmlFor="option1">First Option:</label> */}
        <select id="option1" name="option1" value={selectedOption1} onChange={handleChange} ref={register}>
          <option value="">Select First Option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>

        {/* <label htmlFor="option2">Second Option:</label> */}
        <select id="option2" name="option2" value={selectedOption2} onChange={handleChange} ref={register}>
          <option value="">Select Second Option</option>
          {selectedOption1 === 'Option 1' && (
            <>
              <option value="Option A">Option A</option>
              <option value="Option B">Option B</option>
            </>
          )}
          {selectedOption1 === 'Option 2' && (
            <>
              <option value="Option C">Option C</option>
              <option value="Option D">Option D</option>
            </>
          )}
        </select>

        {thirdOptions.length > 0 && (
          <div>
            {/* <label htmlFor="option3">Third Option:</label> */}
            <select id="option3" name="option3" ref={register}>
              <option value="">Select Third Option</option>
              {thirdOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <button type="submit">Save Selection</button>
      </form>
    </div>
  );
}


