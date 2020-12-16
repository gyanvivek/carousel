import React from "react";
import styled from "styled-components";

export interface Props {
  url: string;
  index: number;
  width: string | number;
  height: string | number;
  setIndex: Function;
}

const ImageContainer = styled.div<{
  width: string | number;
  height: string | number;
}>`
  display: flex;
  flex: none;
  justify-content: center;
  max-width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  scroll-snap-align: center;
  padding: 0 3rem;
  border-radius: 8px;
  transition: 0.5s;
`;

const Img = styled.img`
  opacity: 1;
  transition: 0.5s opacity;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;


export const Image: React.FC<Props> = (props) => {
  const { url, width, height, index} = props;
  const imageRef = React.useRef<HTMLImageElement>(null);

  return (
    <ImageContainer
      id={"image-container-" + index}
      height={height}
      width={width}
    >
      <Img
        id={"img"}
        key={index}
        ref={imageRef}
        alt={"url not loaded"}
        src={url}
      />
    </ImageContainer>
  );
};
