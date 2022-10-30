import React, { useState, useEffect } from "react"
import { entradas, entradasFile, entradasAnalisis } from '../../api/endpointsSilicio';
import { header, postHeader } from '../../api/fetchHeader';
import TextInputFile from "../../components/TextInputFile";
import { Loading } from "../../components/Loading";
import BackCelButton from '../../components/BackCelButton';

import '../../styles/showLotesCodes.css'
import '../../styles/global.css'


export const AddAnalisisEntrada = () => {
  const [lotesCode, setLotesCode] = useState([])
  const [singleLote, setSingleLote] = useState(null)
  const [analisis, setAnalisis] = useState(null)
  const [registerDone, setRegisterDone] = useState('pending')

  useEffect(() => {
    (async () => {
      const res = await fetch(entradas, header)
      const data = await res.json()
      setLotesCode(["Lotes", ...data])
    })()
  }, [])

  const selectHandler = async (e) => {
    setRegisterDone('pending')
    const loteCode = e.target.value
    const res = await fetch(`${entradas}/${loteCode}`, header)
    const data = await res.json()
    setSingleLote(data)
  }

  const registrarHandler = async () => {
    setRegisterDone('loading')
    const file = analisis
    const formData = new FormData();
    formData.append('fileAnalisis', file)
    await fetch(entradasFile, { method: 'POST', body: formData, })
    const analysisUrl = file === undefined ? 'No hay información' : `https://silicio.blob.core.windows.net/analisis-lotes/${file.name}`
    const bodyData = JSON.stringify({
      "code": singleLote.Codigo,
      "analysis": analysisUrl
    })
    const response = await fetch(entradasAnalisis, { method: 'POST', headers: postHeader, body: bodyData, })
    setRegisterDone(await response.json())
  }
  return (
    <>
    <BackCelButton />
    <div className="web-wrapper">
      <section>
        {lotesCode.length > 0 ?
          <>
            <h2 className='title-task silicio'>Lotes de entrada registrados</h2>
            <select className="select-lotes" onChange={selectHandler}>
              {lotesCode.map((lote, i) => <option key={lote}>{lote}</option>)}
            </select>
          </>
          : <Loading text="Cargando" />
        }
      </section>

      {singleLote !== null &&
        <section>
          <div className="div-adding-analisis">
            {(singleLote.Analisis).startsWith("http")
              ? <h2 className="title-add-analisis">Análisis del lote  <span className="lote-color">{singleLote.Codigo}</span> ✅</h2>
              : <>
                <h2 className="title-add-analisis">Añadir análisis del lote <span className="lote-color">{singleLote.Codigo}</span></h2>
                <div className='div-file-title'>
                  <TextInputFile setter={setAnalisis} />
                </div>

                <button onClick={registrarHandler} className='button-registrar' disabled={!analisis}>Registrar</button>

                <div className="div-register">
                  {registerDone.startsWith('0x') && <span className="register-done">Registro realizado correctamente ✅</span>}
                  {registerDone === 'loading' && <Loading text="Registrando" />}
                </div>
              </>
            }
          </div>
        </section>
      }
    </div>
    </>
  )
}