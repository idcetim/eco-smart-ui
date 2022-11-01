import React, { useState, useEffect } from "react"
import { produccion, produccionGranulometricoFile, produccionQuimicoFile, produccionOrdenFile, produccionGra, produccionQui, produccionOrden } from '../../api/endpointsSilicio';
import { header, postHeader } from '../../api/fetchHeader';
import TextInputFile from "../../components/TextInputFile";
import { Loading } from "../../components/Loading";

import '../../styles/showLotesCodes.css'
import '../../styles/global.css'

export const AddAnalisisProduct = () => {
  const [lotesCode, setLotesCode] = useState([])
  const [singleLote, setSingleLote] = useState(null)
  const [analisis, setAnalisis] = useState(null)
  const [registerDone, setRegisterDone] = useState('pending')

  useEffect(() => {
    (async () => {
      const res = await fetch(produccion, header)
      const data = await res.json()
      setLotesCode(["Productos", ...data])
    })()
  }, [])

  const selectHandler = async (e) => {
    const loteCode = e.target.value
    const res = await fetch(`${produccion}/${loteCode}`, header)
    const data = await res.json()
    setSingleLote(data)
  }

  const registrarHandler = async (type) => {
    setRegisterDone('loading')
    const file = analisis
    const formData = new FormData();
    if (type === "granu") {
      formData.append('fileGranulometria', file)
      await fetch(produccionGranulometricoFile, { method: 'POST', body: formData, })
      const analysisUrl = file === undefined ? 'No hay información' : `https://silicio.blob.core.windows.net/granulometria-producto/${file.name}`
      const bodyData = JSON.stringify({
        "code": singleLote.Codigo,
        "analysis": analysisUrl
      })
      const response = await fetch(produccionGra, { method: 'POST', headers: postHeader, body: bodyData, })
      if (response.ok) setRegisterDone("granu")

    } else if (type === "quimico") {
      formData.append('fileQuimico', file)
      await fetch(produccionQuimicoFile, { method: 'POST', body: formData, })
      const analysisUrl = file === undefined ? 'No hay información' : `https://silicio.blob.core.windows.net/quimico-producto/${file.name}`
      const bodyData = JSON.stringify({
        "code": singleLote.Codigo,
        "analysis": analysisUrl
      })
      const response = await fetch(produccionQui, { method: 'POST', headers: postHeader, body: bodyData, })
      if (response.ok) setRegisterDone("quimico")
    } else {
      formData.append('fileOrden', file)
      await fetch(produccionOrdenFile, { method: 'POST', body: formData, })
      const analysisUrl = file === undefined ? 'No hay información' : `https://silicio.blob.core.windows.net/orden-trabajo/${file.name}`
      const bodyData = JSON.stringify({
        "code": singleLote.Codigo,
        "analysis": analysisUrl
      })
      const response = await fetch(produccionOrden, { method: 'POST', headers: postHeader, body: bodyData, })
      if (response.ok) setRegisterDone("orden")
    }
  }

  return (
    <div className="web-wrapper">
      <section>
        {lotesCode.length > 0 ?
          <>
            <h2 className='title-task silicio'>Productos registrados</h2>
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
            {(singleLote?.GranulometriaUrl).startsWith("http")
              ? <h2 className="title-add-analisis"> Granulometría del Lote <span className="lote-color">{singleLote.Codigo}</span> ✅</h2>
              : <>
                <h2 className="title-add-analisis">Añadir granulometría del lote <span className="lote-color">{singleLote.Codigo}</span></h2>
                <div className='div-file-title'>
                  <TextInputFile setter={setAnalisis} value={analisis} />
                </div>
                <button onClick={() => { registrarHandler("granu") }} className='button-registrar' disabled={!analisis}>Registrar</button>
                <div className="div-register">
                  {registerDone === "granu" && <span className="register-done">Registro realizado correctamente ✅</span>}
                  {registerDone === 'loading' && <Loading text="Registrando" />}
                </div>
              </>
            }

          </div>

          <div className="div-adding-analisis">
            {(singleLote.QuimicoUrl).startsWith("http")
              ? <h2 className="title-add-analisis">Análisis químico del lote <span className="lote-color">{singleLote.Codigo}</span> ✅</h2>
              : <>
                <h2 className="title-add-analisis">Añadir análisis químico del lote <span className="lote-color">{singleLote.Codigo}</span></h2>
                <div className='div-file-title'>
                  <TextInputFile setter={setAnalisis} value={analisis} />
                </div>
                <button onClick={() => { registrarHandler("quimico") }} className='bt-registrar' disabled={!analisis}>Registrar</button>
                <div className="div-register">
                  {registerDone === "quimico" && <span className="register-done">Registro realizado correctamente ✅</span>}
                  {registerDone === 'loading' && <Loading text="Registrando" />}
                </div>
              </>
            }
          </div>

          <div className="div-adding-analisis">
            {(singleLote.OrdenUrl).startsWith("http")
              ? <h2 className="title-add-analisis">Orden de trabajo del lote  <span className="lote-color">{singleLote.Codigo}</span> ✅</h2>
              : <>
                <h2 className="title-add-analisis">Añadir orden de trabajo al lote <span className="lote-color">{singleLote.Codigo}</span></h2>
                <div className='div-file-title'>
                  <TextInputFile setter={setAnalisis} value={analisis} />
                </div>
                <button onClick={() => { registrarHandler("orden") }} className='button-registrar' disabled={!analisis}>Registrar</button>
                <div className="div-register">
                  {registerDone === "orden" && <span className="register-done">Registro realizado correctamente ✅</span>}
                  {registerDone === 'loading' && <Loading text="Registrando" />}
                </div>
              </>
            }
          </div>
        </section>
      }

    </div>
  )
}