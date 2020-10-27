import React, { FC, useState } from 'react';
import styled from 'styled-components/native';

import { ContainerProps, Colors } from '../styles';

type ImageType = {
  height: number;
  width: number;
  bgColor?: string;
};

const ImageContainer = styled.View<ImageType>`
  ${ContainerProps.center}
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.bgColor};
`;

const StyledIndicator = styled.ActivityIndicator`
  color: ${Colors.charcoal};
`;

const StyledImage = styled.Image<ImageType>`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
`;

interface IImageLoaderProp {
  height: number;
  width: number;
  source: string | {} | null;
  bgColor?: string;
}

export const ImageLoader: FC<IImageLoaderProp> = ({
  height = 100,
  width = 100,
  bgColor = Colors.transparent,
  source = require('../assets/emptyImage.png'),
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <ImageContainer height={height} width={width} bgColor={bgColor}>
      {loading && <StyledIndicator />}
      <StyledImage
        resizeMode="contain"
        height={loading ? 1 : height}
        width={loading ? 1 : width}
        source={source}
        onLoad={() => setLoading(false)}
      />
    </ImageContainer>
  );
};
