import { ColorResult, SliderPicker } from "react-color";
import { ISettingsState } from "../redux/reducers/settingsReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers/index";
import { settingsActions } from "../redux/actions/settingsActions";

export const ColorPicker = () => {
  const dispatch = useDispatch();

  const { backgroundColor }: ISettingsState = useSelector(
    (state: RootState) => state.settings
  );

  const handleColorChange = (color: ColorResult) => {
    dispatch(settingsActions.changeBackgroundColor(color.hex));
  };

  return (
    <SliderPicker
      color={backgroundColor}
      onChangeComplete={handleColorChange}
    />
  );
};
