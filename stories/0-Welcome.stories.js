"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var hello_1 = require("../src/components/hello");
var theme_1 = __importDefault(require("../src/theme"));
var stories = react_1.storiesOf("Components", module);
stories.add("Hello", function () { return react_2.default.createElement(hello_1.Hello, null); });
stories.add("Hello with theme", function () { return (react_2.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
    react_2.default.createElement(hello_1.Hello, null))); });
