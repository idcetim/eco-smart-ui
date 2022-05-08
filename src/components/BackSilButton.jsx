import { useNavigate } from "react-router-dom"
const BackSilButton = () => {
    const navigate = useNavigate()
    const backSilHandler = () => {
        navigate('/silicio/')
    }
    return (
        <button onClick={backSilHandler}>Volver Inicio</button>
    )
    
}

export default BackSilButton;