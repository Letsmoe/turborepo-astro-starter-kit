module.exports = {
	extends: ["prettier"],
	plugins: ["simple-import-sort", "prettier"],
	parser: "@babel/eslint-parser",
	parserOptions: {
		requireConfigFile: false,
	},
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"no-unused-vars": "error",
		"prefer-const": "error",
		"no-irregular-whitespace": "error",
		"no-trailing-spaces": "error",
		semi: "error",
		"no-empty-function": "error",
		"no-duplicate-imports": "error",
		"newline-after-var": "error",
		camelcase: "error",
	},
};