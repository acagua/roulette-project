import { IZone } from "../redux/reducers/rouletteReducer";

export const getMaxZone = (zones: IZone[]) => {
  return zones.reduce(
    (maxCounterZone, zone) =>
      zone.counter > maxCounterZone.counter ? zone : maxCounterZone,
    zones[0]
  );
};
