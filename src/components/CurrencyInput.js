const CurrencyInput = ({ htmlFor, id, value, isReadOnly, onChange }) => {
  return (
    <label htmlFor={htmlFor}>
      Price
      <div className="currencyinput">
        <span>$</span>
        <input
          type="number"
          id={id}
          readOnly={isReadOnly}
          value={value}
          onChange={onChange}
        />
      </div>
    </label>
  );
};

export default CurrencyInput;
