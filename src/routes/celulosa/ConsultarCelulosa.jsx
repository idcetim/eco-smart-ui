import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackCelButton from '../../components/BackCelButton';
import TableCelulosaData from '../../components/TableCelulosaData';
import ShowTxHash from '../../components/ShowTxHash';
import { urlCelOrigen, urlCelProceso, urlCelProducto, urlCelOrigenHash, urlCelProcesosHash, urlCelProductoHash } from '../../api/endpoints'
import { header } from '../../api/fetchHeader'

import "../../styles/global.css"
import "../../styles/TextInput.css"
import { Loading } from '../../components/Loading';


const ConsultarCelulosa = () => {
  const [codigo, setCodigo] = useState("")
  const [origenData, setOrigenData] = useState(undefined)
  const [procesosData, setProcesosData] = useState(undefined)
  const [productoData, setProductoData] = useState(undefined)
  const [origenHash, setOrigenHash] = useState("")
  const [procesosHash, setProcesosHash] = useState("")
  const [productoHash, setProductoHash] = useState("")
  const [btPulsado, setBtPulsado] = useState(false)

  const consultarHandler = async () => {
    setBtPulsado(true)
    const urlOrigen = `${urlCelOrigen}?code=${codigo}`
    const dataOrigen = await fetch(urlOrigen, header)
    setOrigenData(await dataOrigen.json())

    const urlProcesos = `${urlCelProceso}?code=${codigo}`
    const dataProcesos = await fetch(urlProcesos, header)
    setProcesosData(await dataProcesos.json())

    const urlProducto = `${urlCelProducto}?code=${codigo}`
    const dataProducto = await fetch(urlProducto, header)
    setProductoData(await dataProducto.json())

    const urlHashOrigen = `${urlCelOrigenHash}?code=${codigo}`
    const hashOrigen = await fetch(urlHashOrigen, header)
    setOrigenHash(await hashOrigen.json())

    const urlHashProcesos = `${urlCelProcesosHash}?code=${codigo}`
    const hashProcesos = await fetch(urlHashProcesos, header)
    setProcesosHash(await hashProcesos.json())

    const urlHashProducto = `${urlCelProductoHash}?code=${codigo}`
    const hashProducto = await fetch(urlHashProducto, header)
    setProductoHash(await hashProducto.json())
    setBtPulsado(false)
  }

  const hashCondition = origenHash.length > 0 && procesosHash.length > 0 && productoHash.length > 0
  const dataCondition = origenData !== undefined && procesosData !== undefined && productoData !== undefined

  return (
    <div className='web-wrapper'>
      <div className='div-button-back'>
        <BackCelButton />
      </div>
      <section>
        <h3>Consultar informaci??n sobre nanocelulosa</h3>
        <div className='div-consultar-1lote'>
          <TextInput type="Codigo" setter={setCodigo} value={codigo} />
          <button className='button-registrar-inline' onClick={consultarHandler} disabled={!codigo}>Consultar lote ????</button>
        </div>
      </section>
      <section>
        {hashCondition && dataCondition &&
          <div>
            {origenHash.length > 0 && procesosHash.length > 0 && productoHash.length > 0 ?
              <TableCelulosaData origenData={origenData} procesosData={procesosData} productoData={productoData} codigo={codigo} /> :
              (codigo !== "" && btPulsado && <h4>No hay informaci??n disponible para ese lote</h4>)
            }
            <div className='div-blockchain-info'>
              {origenHash !== "" && codigo !== "" && <span className="span-title"> Informaci??n blockchain del lote <span className="span-title-green">{codigo}</span></span>}
              {origenHash !== "" && codigo !== "" && <ShowTxHash hash={origenHash} text={"Transacci??n origen"} />}
              {procesosHash !== "" && codigo !== "" && <ShowTxHash hash={procesosHash} text={"Transacci??n procesos"} />}
              {productoHash !== "" && codigo !== "" && <ShowTxHash hash={productoHash} text={"Transacci??n producto"} />}
            </div>
          </div>}
        {(!hashCondition || !dataCondition) && btPulsado && <Loading text={"Cargando"} />}
      </section>
    </div>

  )
}

export default ConsultarCelulosa;