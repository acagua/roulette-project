import { IZone } from "../redux/reducers/rouletteReducer";

export const getMaxZone = (zoneCounter: IZone[]) => {
  return zoneCounter.reduce(
    (maxCounterZone, zone) =>
      zone.counter > maxCounterZone.counter ? zone : maxCounterZone,
    zoneCounter[0]
  );
};
