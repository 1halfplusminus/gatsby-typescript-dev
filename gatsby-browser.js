"use strict";
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// You can delete this file if you're not using it
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var theme_1 = __importDefault(require("./src/theme"));
exports.wrapRootElement = function (_a) {
    var element = _a.element;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default }, element));
};
