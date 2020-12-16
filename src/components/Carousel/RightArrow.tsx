import React from "react";
import next from "../../assets/next.svg";

export interface Props {
  disabled: boolean;
  goToNextSlide: () => void;
}
const LeftArrow: React.FC<Props> = ({ goToNextSlide, disabled }) => {
  return (
    <input
      type="image"
      disabled={disabled}
      style={{
        height: 80,
        width: 80,
        backgroundColor: "transparent",
        border: "0px solid",
        outlineWidth: 0,
      }}
      src={next}
      alt={"next"}
      onClick={() => goToNextSlide()}
    />
  );
};
export default LeftArrow;
