export const Line = ({
  name,
  highlighted,
}: {
  name: string;
  highlighted: boolean;
}) => {
  const highlightedStyle = highlighted ? "highlight-bet-zone" : "";
  return (
    <div className={`board-lines-line center-content ${highlightedStyle}`}>
      {name}
    </div>
  );
};
