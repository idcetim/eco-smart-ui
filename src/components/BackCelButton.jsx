import { useNavigate } from "react-router-dom"
const BackCelButton = () => {
    const navigate = useNavigate()
    const backCelHandler = () => {
        navigate('/celulosa/')
    }
    return (
        <button onClick={backCelHandler}>Volver Celulosa</button>
    )
    
}

export default BackCelButton;