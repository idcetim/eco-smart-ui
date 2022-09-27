import TextInput from '../../components/TextInput'
import { useState, useEffect } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProducto } from '../../api/endpoints';
import { postHeader } from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';
import SelectInput from '../../components/SelectInput';
import { Loading } from '../../components/Loading';

import "../../styles/global.css"
import "../../styles/TextInput.css"

const ProductoFinal = () => {
  const [codigo, setCodigo] = useState("")
  const [suspension, setSuspension] = useState("")
  const [anchoMedio, setAnchoMedio] = useState("")
  const [conductividad, setConductividad] = useState("")
  const [porcentajeSusp, setPorcentajeSusp] = useState("")
  const [hash, setHash] = useState(undefined)
  const [isRegisterOngoing, setIsRegisterOnGoing] = useState(false)

  const selectOptions = ["Formato", "Seca", "Suspension"]

  useEffect(() => {
    if (hash === undefined) setIsRegisterOnGoing(false)
  }, [hash])

  const registrarHandler = async () => {
    setIsRegisterOnGoing(true)
    const bodyData = JSON.stringify({
      "codigo": codigo,
      "suspension": suspension,
      "conductividad": conductividad,
      "ancho": anchoMedio,
      "porcentaje": porcentajeSusp
    })
    const response = await fetch(urlCelProducto, { method: 'POST', headers: postHeader, body: bodyData, })
    setHash(await response.json())
  }

  return (
    <div className='web-wrapper'>
      <div className='div-button-back'>
        <BackCelButton />
      </div>
      <h3> Registro de características de nanocelulosa </h3>
      <TextInput codigo="Código" func={setCodigo} />
      <TextInput codigo="Conductividad iónica" func={setConductividad} />
      <TextInput codigo="Ancho medio partícula" func={setAnchoMedio} />
      <SelectInput options={selectOptions} func={setSuspension} />
      {suspension === selectOptions[2] && <TextInput codigo="Porcentaje suspension" func={setPorcentajeSusp} />}
      <button className='button-registrar' onClick={registrarHandler} disabled={!codigo || !anchoMedio || !suspension || !conductividad}>Registrar</button>
      {hash !== undefined && isRegisterOngoing && <ShowTxHash hash={hash} text={"Ver transacción"} />}
      {hash === undefined && isRegisterOngoing && <Loading text={"Registrando"} />}
    </div>
  )
}

export default ProductoFinal;