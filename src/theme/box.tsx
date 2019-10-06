import styled from "styled-components";
import {
  color,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";
import { ColorProps } from ".";

export type BoxProps = SpaceProps & WidthProps & FontSizeProps & ColorProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
