module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    'airbnb-base'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    "import/prefer-default-export": "off",
    "import/named": "off",
    'comma-dangle': 'off',
    'prefer-destructuring': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'arrow-parens': 'off',
    'for-direction': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    "no-param-reassign": "off"
  }
}
