import TextInput from '../../components/TextInput'
import CheckBox from '../../components/CheckBox'
import { useState, useEffect } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelProceso } from '../../api/endpoints'
import { postHeader } from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';
import { Loading } from '../../components/Loading';

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
    if(hash === undefined) setIsRegisterOnGoing(false)
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
    <div className='web-wrapper'>
      <div className='div-button-back'>
        <BackCelButton />
      </div>
      <h3> Registro de procesos  </h3>
      <TextInput codigo="Código" func={setCodigo} />
      <h4>Procesos realizados</h4>
      <div>
        <CheckBox label={"Pretratamiento mecánico"} value={preMecanico} setChange={setPreMecanico} />
        <CheckBox label={"Pretratamiento enzimático"} value={preEnzimatico} setChange={setPreEnzimatico} />
        <CheckBox label={"Pretratamiento químico"} value={preQuimico} setChange={setPreQuimico} />
        <CheckBox label={"Homogenización"} value={homogenizacion} setChange={setHomogenizacion} />
      </div>
      <button className='button-registrar' onClick={registrarHandler} disabled={!codigo}>Registrar</button>
      {hash !== undefined && isRegisterOngoing && <ShowTxHash hash={hash} text={"Ver transacción"} />}
      {hash === undefined && isRegisterOngoing &&  <Loading text={"Registrando"} />}
    </div>
  )

}

export default Procesos;