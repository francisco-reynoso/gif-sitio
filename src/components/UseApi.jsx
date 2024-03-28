import { useEffect, useState } from "react";

const UseApi= (url) =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);

    const fetchApi= ( ) => {
        fetch(url)
        .then(respuesta  => respuesta.json())
        .then(respuestaJson =>{
            setLoading(true);
            setData(respuestaJson.data);
        })
        .catch(error => console.log(error))
    }
    useEffect(() =>{
        fetchApi();
    },[url]);

    return{loading,data};
}
export default UseApi;