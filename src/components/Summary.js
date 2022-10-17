import { formatPrice } from "../formatPrice";

const Summary = ({ subTotal, tipAmount, total }) => {
  const summary = {
    subtotal: {
      title: "Subtotal",
      value: subTotal,
    },
    tipAmount: {
      title: "Tip Amount",
      value: tipAmount,
    },
    total: {
      title: "Total",
      value: total,
    },
  };

  return (
    <div className="summary">
      {Object.entries(summary).map(([key, { title, value }]) => (
        <div key={key} className="entry">
          <div className="title">{title}</div>
          <div>{formatPrice(value)}</div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
