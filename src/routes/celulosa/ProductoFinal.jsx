import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProducto } from '../../api/endpoints';
import { postHeader} from '../../api/fetchHeader'
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
        const bodyData = JSON.stringify({
            "codigo": codigo,
            "suspension": suspension,
            "conductividad": conductividad,
            "ancho": anchoMedio,
            "porcentaje": porcentajeSusp
        })
		const response = await fetch(urlCelProducto, { method: 'POST', headers: postHeader, body: bodyData, })
        setHash(await response.json())
    }
   
    return (
        <div className='web-wrapper'>
            <h3> Registro de características de nanocelulosa </h3> 
            <TextInput codigo="Código" func={setCodigo} />
            <TextInput codigo="Conductividad iónica" func={setConductividad} />
            <TextInput codigo="Ancho medio partícula" func={setAnchoMedio} />
            <SelectInput options = {selectOptions} func = {setSuspension} />
            {suspension === selectOptions[2] && <TextInput codigo="Porcentaje suspension" func={setPorcentajeSusp} />}
            <button className='button-registrar' onClick={registrarHandler} disabled={!codigo|| !anchoMedio || !suspension || !conductividad}>Registrar</button>
            { hash !== "" && <ShowTxHash hash={hash} text={"Ver transacción"}/>}
            <div className='div-button-back'>
                <BackHomeButton />
                <BackCelButton />
            </div>
        </div>
    ) 
}

export default ProductoFinal;