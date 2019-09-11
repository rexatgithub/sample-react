module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
  },
}
