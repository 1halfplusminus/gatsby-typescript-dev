import { storiesOf } from "@storybook/react";
import React from "react";
import { Hello } from "../src/components/hello";

const stories = storiesOf("Components", module);
stories.add("Hello", () => <Hello />);
