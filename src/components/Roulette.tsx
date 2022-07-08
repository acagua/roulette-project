import { Board } from "./Board";
import { History } from "./History";
import { useSearchParams } from 'react-router-dom'
import { Settings } from "./Settings";

export const Roulette = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const backgroundColor = searchParams.get('color')||'black'; 
  const zoneBase = searchParams.get('zonebase');
  const numberBase = searchParams.get('numberbase');
  return (
    <>
      <main className={`main ${backgroundColor}-background-number`}>
        <History />
        <Board />
        <Settings/>
      </main>
    </>
  );
};
