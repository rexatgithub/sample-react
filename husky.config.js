module.exports = {
  hooks: {
    'pre-commit': 'npm run lint',
    'pre-push': 'npm run test:ci',
    'commit-msg': 'commitlint --env HUSKY_GIT_PARAMS',
  },
}
