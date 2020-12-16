import React from "react";
import styles from "styled-components";
import "./styles.css";
import { Image } from "../Image";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

export interface Props {
  items: any[];
  imageWidth: number | string;
  imageHeight: number | string;
}

const CarouselContainer = styles.div`
position: relative;
display: flex;
align-items: center;
overflow-x: scroll;
scroll-snap-type: x mandatory;
padding: 2rem 0;
scroll-behavior: smooth;
scrollbar-color: transparent;
height: 400px;
`;

const Carousel: React.FC<Props> = (props) => {
  const { items, imageHeight, imageWidth } = props;
  const [position, setPosition] = React.useState(0);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" , height: 600}}
    >
      <LeftArrow
        disabled={position === 0}
        goToPrevSlide={() => {
          setPosition(position - 1);
          // @ts-ignore
          document.getElementById("carousel").scrollBy(-parseInt(imageWidth),0);
        }}
      />
      <CarouselContainer id="carousel">
        {[null, ...items, null].map((item, index) =>
          item ? (
            <Image
              key={item.name}
              url={item.image}
              width={imageWidth}
              height={imageHeight}
              index={index}
              setIndex={(position : number)=>setPosition(position)}
            />
          ) : (
            <div
              key={index}
              style={{
                minWidth: "20rem",
                height: imageHeight,
                position: "relative",
              }}
            ></div>
          )
        )}
      </CarouselContainer>
      <RightArrow
        disabled={position === items.length}
        goToNextSlide={() => {
          setPosition(position + 1);
          // @ts-ignore
          document.getElementById("carousel").scrollBy(parseInt(imageWidth),0);
        }}
      />
    </div>
  );
};

export default Carousel;
