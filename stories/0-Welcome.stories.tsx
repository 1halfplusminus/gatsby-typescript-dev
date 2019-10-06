import { storiesOf } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Hello } from "../src/components/hello";
import theme from "../src/theme";

const stories = storiesOf("Components", module);

stories.add("Hello", () => <Hello />);
stories.add("Hello with theme", () => (
  <ThemeProvider theme={theme}>
    <Hello />
  </ThemeProvider>
));
