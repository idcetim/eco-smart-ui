import "../styles/tables.css"

const ShowSilicioIndividual = (props) => {
 const loteData = props.loteData
 const productoData = props.productoData
 console.log(productoData)
 const codigo = props.codigo

    return (
       Object.keys(productoData).length!== 0 && <div>
       <div className="div-title">
        <span className="span-title">Información  del lote <span className="span-title-green">{codigo}</span> </span>
        </div> 

        <table className="table-celulosa">
        <thead>
        <tr>
            <th>Características</th>
            <th>Datos</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Fecha</td>
            {loteData[0] !== "" ? <td>{loteData[0]}</td>: <td></td> }  
         </tr>
        <tr>
           
            <td>Calidad</td>
            {loteData[1] !== "" ? <td>{loteData[1]}</td>: <td></td> }  
        </tr>
        <tr>
            
            <td>Origen</td>
            {loteData[2] !== "" ? <td>{loteData[2]}</td>: <td></td> }  
        </tr>
        <tr>
            <td>Cantidad</td>
            {loteData[3] !== "" ? <td>{loteData[3]} kg</td>: <td></td> }  
        </tr>
        <tr>
            
            <td>Análisis</td>
            {loteData[4] !== "" ? <td>{loteData[4]}</td>: <td></td> }  
        </tr>
       
          <tr> 
            <td>-----------------</td>
            <td>-----------------</td>
         </tr>

        <tr>
            <td>Fecha</td>
            <td>{productoData[0]}</td>
        </tr>
        <tr>
            <td>Tipo</td>
            <td>{productoData[1]}</td>
        </tr>
        <tr>
            <td>Granulometría</td>
            <td>{productoData[2]}</td>
        </tr>
        <tr>
            <td>Quimico</td>
            <td>{productoData[3]}</td>
        </tr>
        <tr>
            <td>Cantidad</td>
            <td>{productoData[4]}</td>
        </tr>
    </tbody>
</table>
</div>
    )
}


export default ShowSilicioIndividual;