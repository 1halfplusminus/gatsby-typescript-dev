"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var black = "#000";
var colors = {
    black: black,
    h1: "#007acc",
    h2: black,
    a: black,
    main: "red",
};
var theme = {
    breakpoints: ["576px", "768px", "992px", "1200px", "1800px"],
    defaultWidths: [1, 1, 1, 7 / 8, 3 / 4, 1 / 2],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, "3.95285rem"],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    fonts: {
        "serif": "'Merriweather','Georgia',serif",
        "sans-serif": "'Montserrat', sans-serif",
    },
    letterSpacings: {
        normal: "normal",
        tracked: "0.1em",
        tight: "-0.05em",
        mega: "0.25em",
    },
    colors: colors,
};
exports.default = theme;
exports.styled = styled_components_1.default;
