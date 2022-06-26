import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import { useState } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelOrigen} from '../../api/endpoints'
import { postHeader} from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';

import "../../styles/global.css"
import "../../styles/TextInput.css"


const Origen = () => {
    const [codigo, setCodigo] = useState("")
    const [celulosa, setCelulosa] = useState("")
    const [hemicelulosa, setHemicelulosa] = useState("")
    const [lignina, setLignina] = useState("")
    const [origen, setOrigen] = useState("")
    const [hash, setHash] = useState("")

    
    const registrarHandler = async () => {
     
        let bodyData = JSON.stringify({
            "codigo": codigo,
            "celulosa": celulosa,
            "hemicelulosa": hemicelulosa,
            "lignina": lignina,
            "origen": origen
        })
        
		const response = await fetch(urlCelOrigen, { method: 'POST', headers: postHeader, body: bodyData, })
        setHash(await response.json())
        
    }
    const selectOptions = ["Origen", "Abeto", "Pino" , "Eucalipto"]
    return (
        <div className='web-wrapper'>
            <div className='div-button-back'> 
                <BackCelButton />
            </div>
            <h3> Registro de materias primas </h3> 
            <TextInput codigo="Código" func={setCodigo} />
            <TextInput codigo="Celulosa(%)" func={setCelulosa} />
            <TextInput codigo="Hemicelulosa(%)" func={setHemicelulosa} />
            <TextInput codigo="Lignina(%)" func={setLignina} />
            <SelectInput options = {selectOptions} func = {setOrigen} />
            <button className='button-registrar' onClick={registrarHandler} disabled={!codigo}>Registrar</button>
                { hash !== "" && <ShowTxHash hash={hash} text={"Ver transacción"}/>}
        </div>
    )

}

export default Origen;