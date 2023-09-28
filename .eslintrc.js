module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    indent: 'off',
    'function-paren-newline': 'off',
    'react/jsx-indent': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'react/jsx-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'linebreak-style': 0,
    'no-alert': 'off',
    'no-console': 'off',
    'unicode-bom': ['error', 'never'],
    'react/no-children-prop': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': 'off',
    'no-extra-semi': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-unused-vars': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': ['off'],
  },
};
