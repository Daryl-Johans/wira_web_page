// @ts-check
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,js,mjs}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      globals: { node: true, browser: true, es2022: true },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsparser,
        extraFileExtensions: ['.astro'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { node: true, browser: true, es2022: true },
    },
    plugins: { astro: astroPlugin, '@typescript-eslint': tseslint },
    rules: {
      'astro/no-set-html-directive': 'warn',
      'astro/no-unused-css-selector': 'warn',
    },
  },
  {
    files: ['src/components/FAQ.astro'],
    rules: {
      // FAQ usa <details>/<summary> nativos; el selector [open] solo aplica
      // en runtime y el linter lo reporta como no usado estaticamente.
      'astro/no-unused-css-selector': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
];