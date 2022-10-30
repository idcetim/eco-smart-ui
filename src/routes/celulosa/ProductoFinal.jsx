import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProducto } from '../../api/endpoints';
import { postHeader } from '../../api/fetchHeader'
import { ShowHash } from '../../components/ShowHash';
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

  const selectOptions = ["Formato", "Seca", "Suspension"]

  const registrarHandler = async () => {
    setHash('loading')
    const bodyData = JSON.stringify({
      "codigo": codigo,
      "suspension": suspension,
      "conductividad": conductividad,
      "ancho": anchoMedio,
      "porcentaje": porcentajeSusp
    })
    const response = await fetch(urlCelProducto, { method: 'POST', headers: postHeader, body: bodyData, })
    if (response.ok) {
      setHash(await response.json())
    } else {
      alert("Error con el registro")
      setHash(undefined)
    }
  }

  return (
    <>
      <BackCelButton />
      <div className='web-wrapper'>
        <h3 className='title-task celulosa'> Registro de características de nanocelulosa </h3>
        <TextInput type="Código" setter={setCodigo} value={codigo} />
        <TextInput type="Conductividad iónica" setter={setConductividad} value={conductividad} />
        <TextInput type="Ancho medio partícula" setter={setAnchoMedio} value={anchoMedio} />
        <SelectInput options={selectOptions} setter={setSuspension} />
        {suspension === selectOptions[2] && <TextInput type="Porcentaje suspension" setter={setPorcentajeSusp} value={porcentajeSusp} />}
        <button className='button-registrar' onClick={registrarHandler} disabled={!codigo || !anchoMedio || !suspension || !conductividad}>Registrar</button>
        {hash !== undefined && hash.startsWith('0x') && <ShowHash txHash={hash} />}
        {hash === 'loading' && <Loading text={"Registrando"} />}
      </div>
    </>
  )
}

export default ProductoFinal;