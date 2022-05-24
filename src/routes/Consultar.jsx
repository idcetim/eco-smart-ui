import TextInput from "../components/TextInput";
import { useState } from 'react';
import BackHomeButton from '../components/BackHomeButton';
import { urlCelConsultarTodos } from "../api/endpoints";

const Consultar = () => {
    const [codigo, setCodigo] = useState("")
    const [elementos, setElementos] = useState([])
    console.log(codigo)

    const consultarHandler = async () => {
		const url = urlCelConsultarTodos
		const data = await fetch(url)
		const res = await data.json()
        setElementos(res)
    }
    console.log(elementos)
    
return (
    <div className='web-wrapper'>
        <h3>Consultar Información</h3>
        <TextInput codigo="Codigo" func={setCodigo}  />
        <button onClick={consultarHandler}>Consultar</button>
        <BackHomeButton />
    </div>
    
)
}

export default Consultar;