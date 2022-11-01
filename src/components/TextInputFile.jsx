import React, { useRef } from "react"
import '../styles/TextInput.css'

const TextInputFile = (props) => {
    const setValueState = props.setter
    const value = props.value
    const inputValueHandler = (event) => { setValueState(fileInputRef.current.files[0]) }
    const fileInputRef = useRef()
    return (
        <div id="div-input-file">
            <input className="inputfile" type="file" value="" name="file" ref={fileInputRef} onChange={inputValueHandler} />
            {value === undefined || value === null
            ? <label for="file" class="input-file-btn">Seleccionar archivo</label>
            : <label for="file" class="input-file-btn">{value?.name}</label>
            }
        </div>
    )
}

export default TextInputFile;