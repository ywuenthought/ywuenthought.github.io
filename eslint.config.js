import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      prettierConfig,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
      prettier: prettier,
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
      'import/no-unresolved': 'error',
      'import/order': [
        'warn',
        {
          alphabetize: { caseInsensitive: true, order: 'asc' },
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'prettier/prettier': 'warn',
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
  }
);
