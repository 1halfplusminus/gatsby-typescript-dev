import React, { ReactNode } from "react";
import { Title1 } from "../../theme/title";

export interface PageTitleProps {
  title: ReactNode;
}

export const PageTitle = ({ title }: PageTitleProps) => (
  <header>
    <Title1 fontFamily="sans-serif"> {title}</Title1>
  </header>
);

export default PageTitle;
