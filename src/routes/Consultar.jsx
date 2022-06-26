import TextInput from "../components/TextInput";
import { useState } from 'react';
import BackHomeButton from '../components/BackHomeButton';


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
        <h3 className="main-consultar">Consultar Información</h3>
        <TextInput codigo="Codigo" func={setCodigo}  />
        <button onClick={consultarHandler}>Consultar</button>
        <BackHomeButton />
    </div>
    
)
}

export default Consultar;