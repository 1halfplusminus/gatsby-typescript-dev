import React from "react";
import styled from "styled-components";

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

const Title = styled.h1`
  margin: 0 0 12px 0;
  padding: 0;
  color: red;
`;

export const Hello = ({ name }: HelloProps) => <Title> Hello {name}</Title>;

Hello.defaultProps = defaultProps;

export default Hello;
