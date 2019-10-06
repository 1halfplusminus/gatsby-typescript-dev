import { Text } from "./text";

export const Title1 = Text.withComponent("h1");

Title1.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0,
  fontFamily: "serif",
  color: "h1",
};

export const Title2 = Text.withComponent("h2");

Title2.defaultProps = {
  fontSize: 4,
  lineHeight: 1.5,
  m: 0,
  fontFamily: "serif",
  color: "black",
};
