module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`],
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "rules": {
    "no-console": "off",
  }
}