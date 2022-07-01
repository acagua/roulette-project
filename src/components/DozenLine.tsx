
interface DozenLineProps {
  name: string;
  // highlighted: boolean;
  counter?:number
}

export const DozenLine = ({
  name,
  // highlighted,
  counter=2,
}: DozenLineProps) => {
  // const highlightedStyle = highlighted ? "highlight-bet-zone" : "";

  let highlightStyle = 'conservative-bet-zone';

  if (counter <= 5){
    highlightStyle = 'medium-bet-zone';
  }

  if (counter <= 3){
    highlightStyle = 'risky-bet-zone';
  }

  return (
    <div className={`board-dozens-dozen center-content ${highlightStyle}`}>
      <div>{name}</div>
      <div>({counter})</div>
    </div>
  );
};
