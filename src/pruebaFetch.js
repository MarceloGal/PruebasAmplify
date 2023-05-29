import { useEffect, useState } from "react";

export default function ObteniendoPokemon () {
    const [lista, setLista] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);

    // fetch("https://pokeapi.co/api/v2/ability")
    //   .then((response) => response.json())
    //   .then((info) => setListaAbilidades(info.results));
    //   .then((info) => console.log(info));

    useEffect(() => {

        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch("https://pokeapi.co/api/v2/ability")
          ).json();    
          // set state when the data received
          setLista(data.results);
          console.log(data.results);
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
                {lista.map((habilidad) => (
                <li value={habilidad.name}>
                    {habilidad.name}
                </li>
                ))}
            </ul>
        </div>
    );
}

export function ConsultandoPlaca () {
  
  const [respuesta, setRespuesta] = useState();

  useEffect(() => {

    const dataFetch = async (placaBuscada) => {
      const data = await(
        await fetch('http://54.157.43.171:8080/api/auto/buscar',
            {
              method: "POST",
              headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify({placa: placaBuscada})
            }
          )
        ).json();
        setRespuesta(data);
        console.log(data);
      
      // set state when the data received
      
    };    

    dataFetch("ABC-123");
    

  }, []);

  return (
    <div >
        {respuesta.placa}
        algo
    </div>
);

}
