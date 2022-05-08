import { useNavigate } from "react-router-dom"
const BackBatButton = () => {
    const navigate = useNavigate()
    const backBatHandler = () => {
        navigate('/baterias/')
    }
    return (
        <button onClick={backBatHandler}>Volver Inicio</button>
    )
    
}

export default BackBatButton;