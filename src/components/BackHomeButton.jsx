import { useNavigate } from "react-router-dom"

import "../styles/global.css"
const BackHomeButton = () => {
    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/')
    }
    return (
        <button className="button-back-home" onClick={backHandler}>Inicio🏠</button>
    )
    
}

export default BackHomeButton;