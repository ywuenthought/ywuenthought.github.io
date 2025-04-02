const DEPS: string[] = [
  "react",
  "react-dom",
  "react-redux",
  "react-router-dom",
  "@reduxjs/toolkit",
];

const DEV_DEPS: string[] = [
  "@eslint/js",
  "@types/jest",
  "@types/react",
  "@types/react-dom",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-import",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "globals",
  "jest",
  "jest-environment-jsdom",
  "nodemon",
  "prettier",
  "ts-jest",
  "typescript-eslint",
];

const BUILD_DEPS: string[] = ["esbuild", "serve"];

export { DEPS, DEV_DEPS, BUILD_DEPS };
