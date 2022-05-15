import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelOrigen} from '../../api/endpoints'
import { header} from '../../api/fetchHeader'
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
		const url = urlCelOrigen
		let urlParameters = `${url}?code=${codigo}&cel=${celulosa}&hemi=${hemicelulosa}&lig=${lignina}&ori=${origen}`
		const data = await fetch(urlParameters, header)
		const res = await data.json()
        setHash(res.transactionHash)
    }
    const selectOptions = ["Origen", "Abeto", "Pino" , "Eucalipto"]
    return (
        <div className='web-wrapper'>
            <h3> Registro de materias primas </h3> 
            <TextInput codigo="Codigo" func={setCodigo} />
            <TextInput codigo="Lignina" func={setLignina} />
            <TextInput codigo="Hemicelulosa" func={setHemicelulosa} />
            <TextInput codigo="Celulosa" func={setCelulosa} />
            <SelectInput options = {selectOptions} func = {setOrigen} />
            <button className='button-registrar' onClick={registrarHandler}>Registrar</button>
                { hash !== "" && <ShowTxHash hash={hash}/>}
            <div className='div-button-back'>
                <BackHomeButton />
                <BackCelButton />
            </div>
            
            

        </div>
    )

}

export default Origen;