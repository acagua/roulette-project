import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";

interface ButtonInterface {
  name: string;
  rows?: number;
  columns?: number;
  action: AnyAction;
}
export const Button = ({
  name,
  rows = 1,
  columns = 1,
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
    </button>
  );
};
