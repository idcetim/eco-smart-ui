import { useNavigate } from "react-router-dom"
import "../styles/global.css"
const BackSilButton = () => {
    const navigate = useNavigate()
    const backSilHandler = () => {
        navigate('/silicio/')
    }
    return (
        <button className="button-back-cel" onClick={backSilHandler}>⇦ Atrás</button>
    )
    
}

export default BackSilButton;