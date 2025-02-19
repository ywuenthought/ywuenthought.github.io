import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,  // standard JS rules
  ...tseslint.configs.recommended,  // TS rules
  pluginReact.configs.flat.recommended,  // React rules
  prettier,  // disable conflicting ESLint rules
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error",  // enforce Prettier formatting via ESLint
      "no-unused-vars": "warn",  // warn about unused variables
      "no-console": "off",  // allow console logs
    },
  },
];