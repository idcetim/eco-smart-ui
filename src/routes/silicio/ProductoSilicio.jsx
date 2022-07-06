import { useState } from 'react';
import BackSilButton from '../../components/BackSilButton'
import TextInput from '../../components/TextInput'
import TextInputFile from '../../components/TextInputFile'
import TextInputDate from '../../components/TextInputDate'
import SelectInput from '../../components/SelectInput'
import ShowTxHash from '../../components/ShowTxHash';

import {postHeader} from '../../api/fetchHeader'
import { urlSilProducto, urlSilGranulometriaProducto, urlSilQuimicoProducto } from '../../api/endpoints';
import "../..//styles/global.css"
import "../../styles/TextInput.css"
const ProductoSilicio = () => {

    const [codigo, setCodigo] = useState("")
    const [fecha, setFecha] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [granulometria, setGranulometria] = useState("")
    const [quimico, setQuimico] = useState("")
    const [tipo, setTipo] = useState("")
    const [hash, setHash] = useState("")

    const registrarHandler = async () => {
        const fileGranulometria = granulometria
        const formData = new FormData();
        formData.append('fileGranulometria', fileGranulometria)
        await fetch(urlSilGranulometriaProducto, { method: 'POST',  body: formData, })
        const granulometriaUrl = `https://silicio.blob.core.windows.net/granulometria-producto/${fileGranulometria.name}`

        const fileQuimico = quimico
        const formDataQuimico = new FormData();
        formDataQuimico.append('fileQuimico', fileQuimico)
        await fetch(urlSilQuimicoProducto, { method: 'POST',  body: formDataQuimico, })
        const quimicoUrl = `https://silicio.blob.core.windows.net/granulometria-producto/${fileQuimico.name}`
        const bodyData = JSON.stringify({
            "codigo": codigo,
            "fecha": fecha,
            "cantidad": cantidad,
            "tipo": tipo,
            "granulometria": granulometriaUrl,
            "quimico": quimicoUrl
        })
        const response = await fetch(urlSilProducto, { method: 'POST', headers: postHeader, body: bodyData, })
        setHash(await response.json())
    }
    const selectOptions = ["Tipo producto final", "0.2 mm - 2 mm", "<0.5 mm"]
    return(
        <div className='web-wrapper'>
            <div className='div-button-back'>
                <BackSilButton />
            </div>
            <h3> Registro de producto final </h3> 
            <TextInput codigo="Código" func={setCodigo} />
            <TextInputDate  func={setFecha} />
            <TextInput codigo="Cantidad (kg)" func={setCantidad} />
            <SelectInput options = {selectOptions} func = {setTipo} />
            <label>Análisis granulométrico</label>
            <TextInputFile  func={setGranulometria} />
            <label>Análisis químico</label>
            <TextInputFile  func={setQuimico} />
            <button className='button-registrar' onClick={registrarHandler} 
            disabled={!codigo || !fecha || !granulometria || !cantidad || !quimico || !tipo} >Registrar</button>
                { hash !== "" && <ShowTxHash hash={hash} text={"Ver transacción"}/>}
        </div>
        )
}

export default ProductoSilicio;