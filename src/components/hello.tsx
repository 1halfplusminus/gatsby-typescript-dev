import React from "react";
import { Title1 } from "../theme/title";

export type HelloProps = Partial<typeof defaultProps> & {
  /**
   * Name to display
   *
   * @default " "
   *
   */
  name?: string,
};

const defaultProps = {
  name: "World",
};

export const Hello = ({ name }: HelloProps) => <Title1> Hello {name}</Title1>;

Hello.defaultProps = defaultProps;

export default Hello;
