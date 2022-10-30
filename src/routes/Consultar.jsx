import TextInput from "../components/TextInput";
import { useState } from 'react';

const Consultar = () => {
    const [codigo, setCodigo] = useState("")
    const [elementos, setElementos] = useState([])
    console.log(codigo)

    const consultarHandler = async () => {
        setElementos(["ola"])
    }
    console.log(elementos)
return (
    <div className='web-wrapper'>
        <h1 className="main-title consultar">Consultar Información</h1>
        <TextInput type="Codigo" setter={setCodigo} value={codigo}  />
        <button onClick={consultarHandler} className="button-registrar" >Consultar</button>
    </div>
)
}

export default Consultar;