import TextInput from '../../components/TextInput'
import CheckBox from '../../components/CheckBox'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProceso} from '../../api/endpoints'
import { header} from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';

import "../../styles/global.css"
import "../../styles/TextInput.css"

const Procesos = () => {
    const [codigo, setCodigo] = useState("")
    const [preMecanico, setPreMecanico] = useState(false)
    const [preEnzimatico, setPreEnzimatico] = useState(false)
    const [preQuimico, setPreQuimico] = useState(false)
    const [homogenizacion, setHomogenizacion] = useState(false)
    const [hash, setHash] = useState("")

    const registrarHandler = async () => {
        const url = urlCelProceso
        const arrayData = helperProcesos()
        const urlParameters = `${url}?code=${codigo}&mec=${arrayData[0]}&enz=${arrayData[1]}&qui=${arrayData[2]}&homo=${arrayData[3]}`
		const data = await fetch(urlParameters, header)
		const res = await data.json()
        setHash(res.transactionHash)
    }
   
    const helperProcesos = () => {
        let arrayData = []
        if(preMecanico)  arrayData.push("1")
        else arrayData.push("0")
        if(preEnzimatico)  arrayData.push("1")
        else arrayData.push("0")
        if(preQuimico)  arrayData.push("1")
        else arrayData.push("0")
        if(homogenizacion)  arrayData.push("1")
        else arrayData.push("0")
        return arrayData
    }
    return (
        <div className='web-wrapper'>
            <h3> Registro de procesos  </h3> 
            <TextInput codigo="Código" func={setCodigo} />
            <h4>Procesos realizados</h4>
            <div>
                <CheckBox label={"Pretratamiento mecánico"} value={preMecanico} setChange ={setPreMecanico} />
                <CheckBox label={"Pretratamiento enzimático"} value={preEnzimatico} setChange ={setPreEnzimatico} />
                <CheckBox label={"Pretratamiento químico"} value={preQuimico} setChange ={setPreQuimico} />
                <CheckBox label={"Homogenización"} value={homogenizacion} setChange ={setHomogenizacion} />
            </div>
            <button className='button-registrar' onClick={registrarHandler} disabled={!codigo}>Registrar</button>
            { hash !== "" && <ShowTxHash hash={hash} text={"Ver transacción"}/>}

            <div className='div-button-back'>
                <BackHomeButton />
                <BackCelButton />
            </div>
            
        </div>
    )

}

export default Procesos;