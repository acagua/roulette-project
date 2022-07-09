import { Board } from "./Board";
import { History } from "./History";
// import { useSearchParams } from "react-router-dom";
import { Settings } from "./Settings";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { ISettingsState } from "../redux/reducers/settingsReducer";

export const Roulette = () => {
  // let [searchParams, setSearchParams] = useSearchParams();
  // const backgroundColor = searchParams.get("color") || "black";
  // const zoneBase = searchParams.get("zonebase");
  // const numberBase = searchParams.get("numberbase");

  const { backgroundColor }: ISettingsState = useSelector(
    (state: RootState) => state.settings
  );

  return (
    <>
      <main className={`main`} style={{ backgroundColor }}>
        <History />
        <Board />
        <Settings />
      </main>
    </>
  );
};
