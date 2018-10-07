module.exports = {
  // The directory where Jest should output its coverage files

  "verbose": false,
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "globals": {
    "NODE_ENV": "test"
  },
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  "moduleDirectories": [
    "node_modules/",
    "src/",
  ],
  setupFiles: ['./setupTest.js'],

}

//transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],