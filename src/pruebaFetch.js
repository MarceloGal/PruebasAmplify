import { useEffect, useState } from "react";

export default function ObteniendoPokemon () {
    const [listaAutos, setListaAutos] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);

    // fetch("https://pokeapi.co/api/v2/ability")
    //   .then((response) => response.json())
    //   .then((info) => setListaAbilidades(info.results));
    //   .then((info) => console.log(info));

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch("http://3.89.34.248:8080/api/auto/listar")
          ).json();    
          // set state when the data received
          setListaAutos(data);
          console.log(data);
        };    
        dataFetch();
      }, []);

    


    // useEffect(() => {
    //   dataFetch();
    //   // fetchData();
    // }, []);
    

    return (
        <div >
            <ul>
                {listaAutos.map((auto) => (
                <li key={auto.placa} value={auto.placa}>
                    {auto.placa}
                </li>
                ))}
            </ul>
        </div>
    );
}

export function ConsultandoPlaca () {
  
  const [respuesta, setRespuesta] = useState();
  // https://mi-api.com/endpoint?placa=ABC-123
  useEffect(() => {

    const dataFetch = async () => {
      const data = await(
        await fetch('http://3.89.34.248:8080/api/auto/buscar?placa=ABC-123')
        ).json();
        setRespuesta(data);
        console.log(data);
      
      // set state when the data received
      
    };    

    dataFetch();
    

  }, []);

  return (
    <div >
        {/* {respuesta} */}
        algo
    </div>
);

}
