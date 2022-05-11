import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelOrigen} from '../../api/endpoints'
import ShowTxHash from '../../components/ShowTxHash';

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
		const data = await fetch(urlParameters)
		const res = await data.json()
        setHash(res.transactionHash)
    }
    
    return (
        <div>
            <TextInput codigo="Codigo" func={setCodigo} />
            <TextInput codigo="Lignina" func={setLignina} />
            <TextInput codigo="Hemicelulosa" func={setHemicelulosa} />
            <TextInput codigo="Celulosa" func={setCelulosa} />
            <TextInput codigo="Origen" func={setOrigen} />
            <button onClick={registrarHandler}>Registrar</button>
            <BackHomeButton />
            <BackCelButton />
            { hash !== "" && <ShowTxHash hash={hash}/>}

        </div>
    )

}

export default Origen;