module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['node_modules', 'src'],
      },
    },
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'react-app'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'prettier',
    'react-hooks',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'func-names': 'off',
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    semi: [
      'error',
      'never',
    ],
    yoda: [
      'error',
      'always',
      {
        exceptRange: true,
      },
    ],
    'no-console': [
      'error', {
        allow: [
          'warn',
          'error',
          'info',
        ],
      },
    ],
    'no-nested-ternary': 'off',
    'no-multi-assign': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'react/forbid-prop-types': 'off',
    'react/jsx-indent': [
      2,
      2,
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        when: 'multiline',
      },
    ],
    'react/no-danger': 'off',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always'
      }
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'import/no-absolute-path': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
      },
    ],
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
  },
}
