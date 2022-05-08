const Checkbox = (props) => {
    const label = props.label
    const value = props.value
    const setChange = props.setChange

    const changeValueHandler = () => {
        setChange(!value)
    }
    return (
      <label>
        <input type="checkbox" checked={value} onChange={() => changeValueHandler()} />
        {label}
      </label>
    );
  };

  export default Checkbox;