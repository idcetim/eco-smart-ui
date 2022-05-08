import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const celulosaHandler = () => {navigate('/celulosa/')}
    const silicioHandler = () => {navigate('/silicio/')}
    const bateriasHandler = () => {navigate('/baterias/')}
    const consultarHandler = () => {navigate('/consultar/')}
    return (
        <div>
        <button onClick={celulosaHandler}>Celulosa</button>
        <button onClick={silicioHandler}>Silicio</button>
        <button onClick={bateriasHandler}>Baterias</button>
        <div>
        <button onClick={consultarHandler}>Consultar</button>
        </div>
        
        </div>
    )
    }

export default Home;