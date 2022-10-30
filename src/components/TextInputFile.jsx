import React from "react"
import '../styles/TextInput.css'
const TextInputFile = (props) => {
    const setValueState = props.setter
    const inputValueHandler = (event) => { setValueState(fileInput.current.files[0]) }
    const fileInput = React.createRef()
    return (
        <div id="div-input-file">
            <input className="inputfile" type="file" value="" name="file" ref={fileInput} onChange={inputValueHandler} />
            <label for="file" class="input-file-btn">Seleccionar archivo</label>
        </div>
    )
}

export default TextInputFile;