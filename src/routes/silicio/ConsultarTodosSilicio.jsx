import BackSilButton from '../../components/BackSilButton'
import { useEffect } from 'react'
import { useState } from 'react'
import { urlSilVerTodosInicial, urlSilVerTodosFinal  } from '../../api/endpoints'
import { header } from '../../api/fetchHeader'
import "../..//styles/global.css"

const ConsultarTodosSilicio = () => {

    const [lotesInicial, setLotesInicial] = useState([])
    const [lotesFinal, setLotesFinal] = useState([])

    const consultarTodos = async () => {
        const dataInicial = await fetch(urlSilVerTodosInicial,header)
        setLotesInicial(await dataInicial.json())
        const dataFinal = await fetch(urlSilVerTodosFinal,header)
        setLotesFinal(await dataFinal.json())
    }

    useEffect(()=> {
        consultarTodos()
    },[])

    return(
        <div className='web-wrapper'>
            <h3>Lotes iniciales</h3>
            {lotesInicial.length>0 && lotesInicial.map((lote,i) => {return   <button key={i}>{lote}</button>})}
            <h3>Lotes Finales</h3>
            {lotesFinal.length>0 && lotesFinal.map((lote,i) => {return   <button key={i}>{lote}</button>})}
            <div className='div-button-back'>
                <BackSilButton />
            </div>
        </div>
    )
}

export default ConsultarTodosSilicio;