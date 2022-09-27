import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import { useState, useEffect } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelOrigen } from '../../api/endpoints'
import { postHeader } from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';
import { Loading } from '../../components/Loading';

import "../../styles/global.css"
import "../../styles/TextInput.css"


const Origen = () => {
  const [codigo, setCodigo] = useState("")
  const [celulosa, setCelulosa] = useState("")
  const [hemicelulosa, setHemicelulosa] = useState("")
  const [lignina, setLignina] = useState("")
  const [origen, setOrigen] = useState("")
  const [hash, setHash] = useState(undefined)
  const [isRegisterOngoing, setIsRegisterOnGoing] = useState(false)


  useEffect(() => {
    if(hash === undefined) setIsRegisterOnGoing(false)
  }, [hash])
  const registrarHandler = async () => {
    setIsRegisterOnGoing(true)
    const bodyData = JSON.stringify({
      "codigo": codigo,
      "celulosa": celulosa,
      "hemicelulosa": hemicelulosa,
      "lignina": lignina,
      "origen": origen
    })

    const response = await fetch(urlCelOrigen, { method: 'POST', headers: postHeader, body: bodyData, })
    setHash(await response.json())

  }
  const selectOptions = ["Origen", "Abeto", "Pino", "Eucalipto"]
  return (
    <div className='web-wrapper'>
        <div className='div-button-back'>
          <BackCelButton />
        </div>
        <h3> Registro de pasta de celulosa </h3>
        <TextInput codigo="Código" func={setCodigo} />
        <TextInput codigo="Celulosa(%)" func={setCelulosa} />
        <TextInput codigo="Hemicelulosa(%)" func={setHemicelulosa} />
        <TextInput codigo="Lignina(%)" func={setLignina} />
        <SelectInput options={selectOptions} func={setOrigen} />
        <button className='button-registrar' onClick={registrarHandler} disabled={!codigo || !celulosa || !hemicelulosa || !origen || !lignina}>Registrar</button>
        {hash !== undefined && isRegisterOngoing && <ShowTxHash hash={hash} text={"Ver transacción"} />}
        {hash === undefined && isRegisterOngoing &&  <Loading text={"Registrando"} />}
    </div>
  )

}

export default Origen;