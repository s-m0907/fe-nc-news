import React from 'react';
import styled from 'styled-components';

const CircularFrame = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: solid black 4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CircularImageFrame = ({ src, alt, size }) => {
  return (
    <CircularFrame size={size}>
      <Image src={src} alt={alt} />
    </CircularFrame>
  );
};

export default CircularImageFrame;