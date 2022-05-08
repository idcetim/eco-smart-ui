import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProducto } from '../../api/endpoints';

const ProductoFinal = () => {
    const [codigo, setCodigo] = useState("")
    const [suspension , setSuspension] = useState("")
    const [conductividad, setConductividad] = useState("")
    
    const registrarHandler = async () => {
        const url = urlCelProducto
        const urlParameters = `${url}?code=${codigo}&susp=${suspension}&cond=${conductividad}`
		const data = await fetch(urlParameters)
		const res = await data.json()
        console.log(res)
    }
   
    return (
        <div>
            <TextInput codigo="Codigo" func={setCodigo} />
            <TextInput codigo="Conductividad" func={setConductividad} />
            <TextInput codigo="Suspension" func={setSuspension} />
            <button onClick={registrarHandler}>Registrar</button>
            <BackHomeButton />
            <BackCelButton />

        </div>
    ) 

}

export default ProductoFinal;