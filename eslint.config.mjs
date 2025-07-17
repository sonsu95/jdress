import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import react from 'eslint-plugin-react-x';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const ignoresConfig = {
  ignores: [
    'dist/**',
    'node_modules/**',
    'build/**',
    '.next/**',
    'coverage/**',
    '*.min.js',
    '**/*.d.ts',
    '.history/**',
    '**/.git/**',
  ],
};

const customConfig = {
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};

const eslintConfig = [
  ignoresConfig,
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript'],
  }),
  react.configs.recommended,
  customConfig,
  eslintConfigPrettier,
];

export default eslintConfig;
