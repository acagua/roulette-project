/// <reference types="vite-plugin-svgr/client" />
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";

interface ButtonInterface {
  name?: string;
  rows?: number;
  columns?: number;
  Icon?: any;
  actions: AnyAction[];
  disabled: boolean;
  colorType: "warning" | "ok";
  gif?: string;
}
export const Button = ({
  name = "",
  rows = 1,
  columns = 1,
  Icon = null,
  actions,
  disabled,
  colorType,
  gif = "",
}: ButtonInterface) => {
  useSelector;
  const dispatch = useDispatch();
  const handleClick = () => {
    actions.map((action) => {
      dispatch(action);
    });
  };

  return (
    <button
      data-columns={columns + 1}
      data-rows={rows + 1}
      className={`col-${columns} ${colorType}-button`}
      onDoubleClick={handleClick}
      disabled={disabled}
    >
      <img src={gif} />
      {Icon && <Icon fill="white" />}
      {name}
    </button>
  );
};
