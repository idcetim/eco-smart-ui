import { useEffect } from 'react'
import { useState } from 'react'
import BackSilButton from '../../components/BackSilButton'
import ShowSilicioIndividual from '../../components/ShowSilicioIndividual'
import ShowTxHash from '../../components/ShowTxHash'
import { urlSilVerTodosInicial, urlSilVerTodosFinal } from '../../api/endpoints'
import { header } from '../../api/fetchHeader'
import { urlSilLotes, urlSilProducto, urlSilLotesHash, urlSilProductoHash } from '../../api/endpoints'
import "../../styles/global.css"
import "../../styles/showLotes.css"

const ConsultarTodosSilicio = () => {

  const [allLotesInicial, setAllLotesInicial] = useState([])
  const [allLotesFinal, setAllLotesFinal] = useState([])
  const [currentCode, setCurrentCode] = useState("")
  const [loteInicial, setLoteInicial] = useState([])
  const [productoFinal, setProductoFinal] = useState([])
  const [loteInicialHash, setLoteInicialHash] = useState("")
  const [productoHash, setProductoHash] = useState("")

  const searchAllLotes = async () => {
    const dataInicial = await fetch(urlSilVerTodosInicial, header)
    setAllLotesInicial(await dataInicial.json())
    const dataFinal = await fetch(urlSilVerTodosFinal, header)
    setAllLotesFinal(await dataFinal.json())
  }

  useEffect(() => {
    searchAllLotes()
  }, [])

  const searchLoteInfo = async (lote) => {
    setCurrentCode(lote)
    const urlOrigen = `${urlSilLotes}?code=${lote}`
    const dataOrigen = await fetch(urlOrigen, header)
    setLoteInicial(await dataOrigen.json())

    const urlProcesos = `${urlSilProducto}?code=${lote}`
    const dataProcesos = await fetch(urlProcesos, header)
    setProductoFinal(await dataProcesos.json())

    const urlHashOrigen = `${urlSilLotesHash}?code=${lote}`
    const hashOrigen = await fetch(urlHashOrigen, header)
    setLoteInicialHash(await hashOrigen.json())

    const urlHashProcesos = `${urlSilProductoHash}?code=${lote}`
    const hashProcesos = await fetch(urlHashProcesos, header)
    setProductoHash(await hashProcesos.json())
  }

  return (
    <div className='web-wrapper'>
      <div className='div-button-back'>
        <BackSilButton />
      </div>

      <h3>Lotes iniciales</h3>
      {allLotesInicial.length > 0 && allLotesInicial.map((lote, i) =>
        <button className="bt-lotes" key={i} onClick={() => searchLoteInfo(lote)}>{lote}</button>)}

      <h3>Lotes Finales</h3>
      {allLotesFinal.length > 0 && allLotesFinal.map((lote, i) =>
        <button className="bt-lotes" key={i} onClick={() => searchLoteInfo(lote)}>{lote}</button>)}

      <ShowSilicioIndividual loteData={loteInicial} productoData={productoFinal} codigo={currentCode} />

      <div className='div-blockchain-info'>
        {loteInicialHash !== "" && <span className="span-title"> Información blockchain del lote <span className="span-title-green">{currentCode}</span></span>}
        {loteInicialHash !== "" && <ShowTxHash hash={loteInicialHash} text={"Transacción del lote"} />}
        {productoHash !== "" && <ShowTxHash hash={productoHash} text={"Transacción producto"} />}
      </div>
    </div>
  )
}

export default ConsultarTodosSilicio;