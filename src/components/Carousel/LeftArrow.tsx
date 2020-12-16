import React from "react";
import previos from "../../assets/previous.svg";

export interface Props {
  disabled: boolean;
  goToPrevSlide: () => void;
}
const LeftArrow: React.FC<Props> = ({ goToPrevSlide, disabled }) => {
  return (
    <input
      type="image"
      disabled={disabled}
      style={{
        height: 80,
        width: 80,
        backgroundColor: "transparent",
        border: "0px solid",
      }}
      src={previos}
      alt={"previous"}
      onClick={() => goToPrevSlide()}
    />
  );
};
export default LeftArrow;
