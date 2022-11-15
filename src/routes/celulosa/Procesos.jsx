import TextInput from '../../components/TextInput'
import CheckBox from '../../components/CheckBox'
import { useState, useEffect } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProceso } from '../../api/endpoints'
import { postHeader } from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';
import LoadingTxHash from '../../components/LoadingTxHash';

import "../../styles/global.css"
import "../../styles/TextInput.css"

const Procesos = () => {
  const [codigo, setCodigo] = useState("")
  const [preMecanico, setPreMecanico] = useState(false)
  const [preEnzimatico, setPreEnzimatico] = useState(false)
  const [preQuimico, setPreQuimico] = useState(false)
  const [homogenizacion, setHomogenizacion] = useState(false)
  const [hash, setHash] = useState(undefined)
  const [isRegisterOngoing, setIsRegisterOnGoing] = useState(false)

  useEffect(() => {
    if (hash === undefined) setIsRegisterOnGoing(false)
  }, [hash])

  const registrarHandler = async () => {
    setIsRegisterOnGoing(true)
    const bodyData = JSON.stringify({
      "codigo": codigo,
      "mecanico": preMecanico ? "1" : "0",
      "enzimatico": preEnzimatico ? "1" : "0",
      "quimico": preQuimico ? "1" : "0",
      "homogenizacion": homogenizacion ? "1" : "0"
    })
    const response = await fetch(urlCelProceso, { method: 'POST', headers: postHeader, body: bodyData, })
    setHash(await response.json())
  }

  return (
    <>
      <BackCelButton />

      <div className='web-wrapper'>
        <h3 className='title-task celulosa'> Registro de procesos  </h3>
        <TextInput type="Código" setter={setCodigo} value={codigo} />
        <h4 className='title-task celulosa'>Procesos realizados</h4>
          <CheckBox label={"Pretratamiento mecánico"} value={preMecanico} setChange={setPreMecanico} />
          <CheckBox label={"Pretratamiento enzimático"} value={preEnzimatico} setChange={setPreEnzimatico} />
          <CheckBox label={"Pretratamiento químico"} value={preQuimico} setChange={setPreQuimico} />
          <CheckBox label={"Homogenización"} value={homogenizacion} setChange={setHomogenizacion} />
        <button className='button-registrar' onClick={registrarHandler} disabled={!codigo}>Registrar</button>
        {hash !== undefined && isRegisterOngoing && <ShowTxHash hash={hash} text={"Ver transacción"} />}
        {hash === undefined && isRegisterOngoing && <LoadingTxHash/>}
      </div>
    </>
  )

}

export default Procesos;