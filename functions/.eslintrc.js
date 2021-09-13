module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    indent: [1, 2],
    'quote-props': [1, 'as-needed'],
    quotes: [1, 'single'],
    'import/no-unresolved': 0,
    'object-curly-spacing': [1, 'always', { objectsInObjects: false }],
    'max-len': [2, 160, 2],
    'no-unused-vars': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'no-tabs': 1,
  },
};
