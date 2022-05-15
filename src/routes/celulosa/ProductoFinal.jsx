import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProducto } from '../../api/endpoints';
import { header} from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';
import SelectInput from '../../components/SelectInput';

import "../../styles/global.css"
import "../../styles/TextInput.css"

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
		const data = await fetch(urlParameters, header)
		const res = await data.json()
        setHash(res.transactionHash)
    }
   
    return (
        <div className='web-wrapper'>
            <h3> Registro de caraceterísticas de nanocelulosa </h3> 
            <TextInput codigo="Codigo" func={setCodigo} />
            <TextInput codigo="Conductividad iónica" func={setConductividad} />
            <TextInput codigo="Ancho medio partícula" func={setAnchoMedio} />
            <SelectInput options = {selectOptions} func = {setSuspension} />
            {suspension === selectOptions[2] && <TextInput codigo="Porcentaje suspension" func={setPorcentajeSusp} />}
            <button className='button-registrar' onClick={registrarHandler}>Registrar</button>
            { hash !== "" && <ShowTxHash hash={hash}/>}
            <div className='div-button-back'>
                <BackHomeButton />
                <BackCelButton />
            </div>
        </div>
    ) 
}

export default ProductoFinal;