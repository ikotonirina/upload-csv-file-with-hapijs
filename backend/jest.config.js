module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
  },
};
