import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import { useState } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelOrigen } from '../../api/endpoints'
import { postHeader } from '../../api/fetchHeader'
import { ShowHash } from '../../components/ShowHash';
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
  const buttonDisabledCondition = !codigo || !celulosa || !hemicelulosa || !origen || !lignina

  const registrarHandler = async () => {
    setHash('loading')
    const bodyData = JSON.stringify({
      "codigo": codigo,
      "celulosa": celulosa,
      "hemicelulosa": hemicelulosa,
      "lignina": lignina,
      "origen": origen
    })

    const response = await fetch(urlCelOrigen, { method: 'POST', headers: postHeader, body: bodyData, })
    if (response.ok) {
      setHash(await response.json())
      setCelulosa('')
      setCodigo('')
      setHemicelulosa('')
      setLignina('')
    } else {
      setHash(undefined)
      alert(`
      Error registrando información del lote ${codigo}.
      Revisa que ese lote no haya sido registrado`)
      return (
        <div className='web-wrapper'>
          <h3>Error al registrar en la blockchain</h3>
          <h4><i>Realiza la operación más tarde</i></h4>
        </div>
      )
    }

  }
  const selectOptions = ["Origen", "Abeto", "Pino", "Eucalipto"]

  return (
    <>
      <BackCelButton />
      <div className='web-wrapper'>
        <h3 className='title-task celulosa'> Registro de pasta de celulosa </h3>
        <TextInput type="Código" setter={setCodigo} value={codigo} />
        <TextInput type="Celulosa(%)" setter={setCelulosa} value={celulosa} />
        <TextInput type="Hemicelulosa(%)" setter={setHemicelulosa} value={hemicelulosa} />
        <TextInput type="Lignina(%)" setter={setLignina} value={lignina} />
        <SelectInput options={selectOptions} setter={setOrigen} />
        <button className='button-registrar' onClick={registrarHandler} disabled={buttonDisabledCondition}>Registrar</button>
        {hash !== undefined && hash.startsWith('0x') && <ShowHash txHash={hash} />}
        {hash === 'loading' && <Loading text={"Registrando"} />}
        <br />
      </div>
    </>
  )

}

export default Origen;