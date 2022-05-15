import TextInput from '../../components/TextInput'
import CheckBox from '../../components/CheckBox'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProceso} from '../../api/endpoints'
import ShowTxHash from '../../components/ShowTxHash';

const Procesos = () => {
    const [codigo, setCodigo] = useState("")
    const [preMecanico, setPreMecanico] = useState(false)
    const [preEnzimatico, setPreEnzimatico] = useState(false)
    const [preQuimico, setPreQuimico] = useState(false)
    const [homogenizacion, setHomogenizacion] = useState(false)
    const [hash, setHash] = useState("")

    const registrarHandler = async () => {
        const url = urlCelProceso
        const urlParameters = `${url}?code=${codigo}&mec=${preMecanico}&enz=${preEnzimatico}&qui=${preQuimico}&homo=${homogenizacion}`
		const data = await fetch(urlParameters)
		const res = await data.json()
        setHash(res.transactionHash)
    }
   

    return (
        <div>
            <TextInput codigo="Codigo" func={setCodigo} />
            <CheckBox label={"Pretratamiento mecánico"} value={preMecanico} setChange ={setPreMecanico} />
            <CheckBox label={"Pretratamiento enzimático"} value={preEnzimatico} setChange ={setPreEnzimatico} />
            <CheckBox label={"Pretratamiento químico"} value={preQuimico} setChange ={setPreQuimico} />
            <CheckBox label={"Homogenización"} value={homogenizacion} setChange ={setHomogenizacion} />
            <button onClick={registrarHandler}>Registrar</button>
            <BackHomeButton />
            <BackCelButton />
            { hash !== "" && <ShowTxHash hash={hash}/>}
        </div>
    )

}

export default Procesos;