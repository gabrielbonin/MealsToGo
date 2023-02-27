import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../../../infrastructure/theme";

type Position = "top" | "bottom" | "left" | "right";
type Size = "small" | "medium" | "large";

interface SpacerProps extends View {
  position: Position;
  size: Size;
  children: React.ReactNode;
}

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position: Position, size: Size) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpaceView = styled.View<{
  variant: string;
}>`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }: SpacerProps) => {
  const variant = getVariant(position, size);
  return <SpaceView variant={variant}>{children}</SpaceView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
