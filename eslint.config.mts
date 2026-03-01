// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([// Базовый JS (без plugins!)
js.configs.recommended, // TypeScript
...tseslint.configs.recommended, // React
pluginReact.configs.flat.recommended, // JSONC
{
  files: ["**/*.jsonc"],
  language: "json/jsonc",
  ...json.configs.recommended,
}, {
  files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  languageOptions: {
    globals: globals.browser,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
}, eslintConfigPrettier, ...storybook.configs["flat/recommended"]]);
