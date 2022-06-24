import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackSilButton from '../../components/BackSilButton'
import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import ShowTxHash from '../../components/ShowTxHash';

import {postHeader} from '../../api/fetchHeader'
import { urlSilProducto } from '../../api/endpoints';
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
        let bodyData = JSON.stringify({
            "codigo": codigo,
            "fecha": fecha,
            "cantidad": cantidad,
            "granulometria": granulometria,
            "quimico": quimico,
            "tipo": tipo
        })
        const response = await fetch(urlSilProducto, { method: 'POST', headers: postHeader, body: bodyData, })
        console.log(await response.json())
        setHash(response)
    }
    const selectOptions = ["Tipo producto final", "0.2 mm - 2 mm", "<0.5 mm"]
    return(
        <div className='web-wrapper'>
            <h3> Registro de producto final </h3> 
            <TextInput codigo="Código" func={setCodigo} />
            <TextInput codigo="Fecha llegada" func={setFecha} />
            <TextInput codigo="Cantidad (kg)" func={setCantidad} />
            <SelectInput options = {selectOptions} func = {setTipo} />
            <TextInput codigo="Análisis granulométrico" func={setGranulometria} />
            <TextInput codigo="Análisis químico" func={setQuimico} />
            <button className='button-registrar' onClick={registrarHandler} disabled={!codigo || !fecha || !granulometria || !cantidad || !quimico || !tipo}>Registrar</button>
                { hash !== "" && <ShowTxHash hash={hash} text={"Ver transacción"}/>}
        <div className='div-button-back'>
            <BackHomeButton />
            <BackSilButton />
        </div>
        </div>
        )
}

export default ProductoSilicio;