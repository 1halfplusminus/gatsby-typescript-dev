import styled from "styled-components";
import {
  color,
  fontFamily,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
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
  FontFamilyProps &
  FontWeightProps;

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
  :hover {
    color: ${(props) => props.theme.black};
  }
`;

Link.defaultProps = {
  color: "black",
};

export default Text;
