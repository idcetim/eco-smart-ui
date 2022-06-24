import { useState } from 'react';
import {urlSilLotes ,  urlSilProducto, urlSilLotesHash, urlSilProductoHash  } from '../api/endpoints'
import "../styles/showLotes.css"
import { header} from '../api/fetchHeader'
import ShowSilicioIndividual from './ShowCelulosaData';
import ShowTxHash from './ShowTxHash';

const ShowSilicioTodos = (props) => {
 const {lotes } = props
 const [currentCode, setCurrentCode] = useState("")
 const [loteInicial, setLoteInicial] = useState([])
 const [productoFinal, setProductoFinal] = useState([])
 const [loteInicialHash, setLoteInicialHash] = useState("")
 const [productoHash, setProductoHash] = useState("")

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
    <div className="div-bt-lotes">
        {lotes.map((lote, index)=>
        <button className="bt-lotes" key={index} onClick={() => searchLoteInfo(lote)}>{lote}</button>)}
        {lotes.length > 0 && <hr/>} 
        <ShowSilicioIndividual loteData={loteInicial}  productoData={productoFinal} codigo={currentCode}/>
        <div className='div-blockchain-info'>
        {loteInicialHash!== "" &&  <span className="span-title"> Información blockchain del lote <span className="span-title-green">{currentCode}</span></span> }
            {loteInicialHash!== "" &&  <ShowTxHash hash={loteInicialHash} text={"Transacción origen"}/> }
            {productoHash!== "" && <ShowTxHash hash={productoHash} text={"Transacción producto"} /> }
        </div>
    </div>
)
}

export default ShowSilicioTodos;