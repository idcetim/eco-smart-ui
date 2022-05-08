import { useNavigate } from "react-router-dom"
const BackHomeButton = () => {
    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/')
    }
    return (
        <button onClick={backHandler}>Volver Inicio</button>
    )
    
}

export default BackHomeButton;