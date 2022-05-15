import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProducto } from '../../api/endpoints';
import ShowTxHash from '../../components/ShowTxHash';
import SelectInput from '../../components/SelectInput';

const ProductoFinal = () => {
    const [codigo, setCodigo] = useState("")
    const [suspension , setSuspension] = useState("")
    const [anchoMedio, setAnchoMedio] = useState("")
    const [conductividad, setConductividad] = useState("")
    const [porcentajeSusp, setPorcentajeSusp] = useState("")
    const [hash, setHash] = useState("")
    
    const selectOptions = ["Formato", "Seca", "Suspension"]
    const registrarHandler = async () => {
        const url = urlCelProducto
        const urlParameters = `${url}?code=${codigo}&susp=${suspension}&cond=${conductividad}&ancho=${anchoMedio}&porce=${porcentajeSusp}`
		const data = await fetch(urlParameters,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        })
		const res = await data.json()
        setHash(res.transactionHash)
    }
   
    return (
        <div>
            <TextInput codigo="Codigo" func={setCodigo} />
            <TextInput codigo="Conductividad iónica" func={setConductividad} />
            <TextInput codigo="Ancho medio partícula" func={setAnchoMedio} />
            <SelectInput options = {selectOptions} func = {setSuspension} />
            {suspension === selectOptions[2] && <TextInput codigo="Porcentaje suspension" func={setPorcentajeSusp} />}
            <button onClick={registrarHandler}>Registrar</button>
            <BackHomeButton />
            <BackCelButton />
            { hash !== "" && <ShowTxHash hash={hash}/>}
        </div>
    ) 
}

export default ProductoFinal;