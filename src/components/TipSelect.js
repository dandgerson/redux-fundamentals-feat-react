import { useEffect, useState } from "react";

const TipSelect = ({ tipPercentage, updateTip }) => {
  const tipOptions = [0, 10, 15, 20, 25];
  const [tip, setTip] = useState(tipPercentage);

  useEffect(() => {
    updateTip(tip);
  }, [tip]);

  return (
    <div className="tipSelect">
      <form>
        <label htmlFor="tip">How much would you like to tip?</label>
        <select
          name="tip"
          id="tip"
          value={tip}
          onChange={(e) => setTip(Number.parseInt(e.target.value))}
        >
          {tipOptions.map((tipOption) => (
            <option key={tipOption} value={tipOption}>{`${tipOption}%`}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default TipSelect;
