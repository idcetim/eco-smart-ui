import { useState } from 'react';
import BackSilButton from '../../components/BackSilButton'
import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import ShowTxHash from '../../components/ShowTxHash';
import {postHeader} from '../../api/fetchHeader'
import { urlSilLotes } from '../../api/endpoints';


import "../..//styles/global.css"
import "../../styles/TextInput.css"

const LotesSilicio = () => {
    const [codigo, setCodigo] = useState("")
    const [fecha, setFecha] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [analisis, setAnalisis] = useState("")
    const [calidad, setCalidad] = useState("")
    const [origen, setOrigen] = useState("")
    const [hash, setHash] = useState("")

    const registrarHandler = async () => {
        let bodyData = JSON.stringify({
            "codigo": codigo,
            "fecha": fecha,
            "cantidad": cantidad,
            "analisis": analisis,
            "calidad": calidad,
            "origen": origen
        })
        const response = await fetch(urlSilLotes, { method: 'POST', headers: postHeader, body: bodyData, })
        setHash(await response.json())
    }
    const selectOptions = ["Calidad", "2N", "3N" , "4N", "5N", "Reciclado"]

return (
<div className='web-wrapper'>
    <h3> Registro de lotes </h3> 
    <TextInput codigo="Código" func={setCodigo} />
    <TextInput codigo="Fecha llegada" func={setFecha} />
    <TextInput codigo="Origen" func={setOrigen} />
    <TextInput codigo="Cantidad (kg)" func={setCantidad} />
    <TextInput codigo="Resultado análisis" func={setAnalisis} />
    <SelectInput options = {selectOptions} func = {setCalidad} />
    <button className='button-registrar' onClick={registrarHandler} disabled={!codigo || !fecha || !origen || !cantidad || !analisis || !calidad}>Registrar</button>
        { hash !== "" && <ShowTxHash hash={hash} text={"Ver transacción"}/>}
    <div className='div-button-back'>
        <BackSilButton />
    </div>
</div>
)

}

export default LotesSilicio;