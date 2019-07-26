module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  rootDir: __dirname,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
