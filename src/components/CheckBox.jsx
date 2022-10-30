import "../styles/TextInput.css"

const Checkbox = (props) => {
  const label = props.label
  const value = props.value
  const setChange = props.setChange

  const changeValueHandler = () => {
    setChange(!value)
  }
  return (
    <label>
      <div id="check-box-input-div">
        <input className="checkbox-design" type="checkbox" checked={value} onChange={() => changeValueHandler()} />
      </div>
      <div id="check-box-label-div">
        {label}
      </div>
    </label>
  );
};

export default Checkbox;