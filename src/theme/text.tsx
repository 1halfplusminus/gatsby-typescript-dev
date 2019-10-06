import styled from "styled-components";
import {
  color,
  fontFamily,
  fontSize,
  FontSizeProps,
  fontWeight,
  lineHeight,
  LineHeightProps,
  space,
  SpaceProps,
} from "styled-system";
import { ColorProps, FontFamilyProps } from ".";

export type TextProps = SpaceProps &
  FontSizeProps &
  LineHeightProps &
  ColorProps &
  FontFamilyProps;

export const Text = styled.div<TextProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${fontFamily}
`;

export const Link = styled(Text.withComponent("a"))`
  text-decoration: none;
`;

export default Text;
