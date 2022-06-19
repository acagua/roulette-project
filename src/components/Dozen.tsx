export const Dozen = ({
  name,
  highlighted,
}: {
  name: string;
  highlighted: boolean;
}) => {
  const highlightedStyle = highlighted ? "highlight-bet-zone" : "";
  return (
    <div className={`board-dozens-dozen center-content ${highlightedStyle}`}>
      {name}
    </div>
  );
};
