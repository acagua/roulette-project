export const BetAmountFormatted = ({
  label,
  amount,
}: {
  label: string;
  amount: number;
}) => {
  const options = {
    style: "currency",
    currency: "USD",
    // maximumSignificantDigits: 1,
  };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  const formattedAmount = numberFormat.format(amount).slice(0, -3);
  return (
    <div className="bet-section-item-center">
      {label}: {formattedAmount}
    </div>
  );
};
