/// <reference types="vite-plugin-svgr/client" />
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";

interface ButtonInterface {
  name?: string;
  rows?: number;
  columns?: number;
  Icon: any;
  action: AnyAction;
}
export const Button = ({
  name = "",
  rows = 1,
  columns = 1,
  Icon = null,
  action,
}: ButtonInterface) => {
  useSelector;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(action);
  };

  return (
    <button
      data-columns={columns + 1}
      data-rows={rows + 1}
      className={`col-${columns}`}
      onClick={handleClick}
    >
      {name}
      {<Icon fill="white" />}
    </button>
  );
};
