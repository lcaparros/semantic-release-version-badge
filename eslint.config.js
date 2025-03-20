import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'

export default [
  {
    files: ['**/*.ts'],
    ignores: ['**/*.test.ts', 'lib/*'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin
    },
    rules: {
      // Custom rules
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Basic standard rules (simplified by plugins)
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      indent: ['error', 2],
      'space-before-function-paren': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'no-multi-spaces': 'error',
      'space-in-parens': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'spaced-comment': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      // Import rules (handled by plugin)
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/export': 'error',
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
      'import/extensions': ['error', 'ignorePackages'],
      // NodeJS specific rules (handled by plugin)
      'n/no-deprecated-api': 'error',
      'n/no-missing-import': 'error',
      'n/no-unpublished-import': 'error',
      'n/no-unsupported-features/es-syntax': 'error',
      'n/prefer-global/process': 'error',
      'n/prefer-global/buffer': 'error',
      // Promises rules (handled by plugin)
      'promise/catch-or-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/no-native': 'off',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'promise/avoid-new': 'warn',
      'promise/prefer-await-to-then': 'warn',
      'promise/prefer-await-to-callbacks': 'warn'
    }
  },
  {
    files: ['src/index.ts'],
    rules: {
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      'no-template-curly-in-string': 'off'
    }
  }
]
