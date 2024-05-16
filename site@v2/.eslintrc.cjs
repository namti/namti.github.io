module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
		"plugin:jsonc/recommended-with-jsonc",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
	overrides: [
		{
			"files": [
				"**/*.ts?(x)"
			],
			"rules": {
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": "error"
			}
		}
	],
	parserOptions: {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		"constructor-super": [
			"error"
		],
		"for-direction": [
			"error"
		],
		"getter-return": [
			"error"
		],
		"no-case-declarations": [
			"error"
		],
		"no-class-assign": [
			"error"
		],
		"no-compare-neg-zero": [
			"error"
		],
		"no-cond-assign": [
			"error"
		],
		"no-const-assign": [
			"error"
		],
		"no-constant-condition": [
			"error"
		],
		"no-control-regex": [
			"error"
		],
		"no-debugger": [
			"error"
		],
		"no-delete-var": [
			"error"
		],
		"no-dupe-args": [
			"error"
		],
		"no-dupe-class-members": [
			"error"
		],
		"no-dupe-else-if": [
			"error"
		],
		"no-dupe-keys": [
			"error"
		],
		"no-duplicate-case": [
			"error"
		],
		"no-empty-character-class": [
			"error"
		],
		"no-empty-pattern": [
			"error"
		],
		"no-ex-assign": [
			"error"
		],
		"no-fallthrough": [
			"error"
		],
		"no-func-assign": [
			"error"
		],
		"no-global-assign": [
			"error"
		],
		"no-import-assign": [
			"error"
		],
		"no-inner-declarations": [
			"error"
		],
		"no-invalid-regexp": [
			"error"
		],
		"no-irregular-whitespace": [
			"error"
		],
		"no-loss-of-precision": [
			"error"
		],
		"no-misleading-character-class": [
			"error"
		],
		"no-new-symbol": [
			"error"
		],
		"no-nonoctal-decimal-escape": [
			"error"
		],
		"no-obj-calls": [
			"error"
		],
		"no-octal": [
			"error"
		],
		"no-redeclare": [
			"error"
		],
		"no-regex-spaces": [
			"error"
		],
		"no-self-assign": [
			"error"
		],
		"no-setter-return": [
			"error"
		],
		"no-shadow-restricted-names": [
			"error"
		],
		"no-sparse-arrays": [
			"error"
		],
		"no-this-before-super": [
			"error"
		],
		"no-undef": [
			"error"
		],
		"no-unexpected-multiline": [
			"error"
		],
		"no-unsafe-finally": [
			"error"
		],
		"no-unsafe-negation": [
			"error"
		],
		"no-unsafe-optional-chaining": [
			"error"
		],
		"no-unused-labels": [
			"error"
		],
		"no-useless-backreference": [
			"error"
		],
		"no-useless-catch": [
			"error"
		],
		"no-useless-escape": [
			"warn"
		],
		"no-with": [
			"error"
		],
		"require-yield": [
			"error"
		],
		"use-isnan": [
			"error"
		],
		"valid-typeof": [
			"error"
		],
		"no-extra-semi": [
			"error"
		],
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs"
		],
		"no-unreachable": [
			"error"
		],
		"no-unused-vars": [
			"error"
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"array-element-newline": [
			"error",
			{
				"multiline": true,
				"minItems": 3
			}
		],
		"block-spacing": [
			"error",
			"always"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"quotes": [
			"error",
			"single",
			{
				"allowTemplateLiterals": true
			}
		],
		"quote-props": [
			"error",
			"consistent-as-needed"
		],
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"comma-style": [
			"error"
		],
		"array-bracket-newline": [
			"error",
			{
				"multiline": true
			}
		],
		"object-curly-newline": [
			"error",
			{
				"multiline": true
			}
		],
		"indent": [
			"warn",
			2,
			{
				"SwitchCase": 1
			}
		],
		"sort-imports": [
			"error",
			{
				"ignoreDeclarationSort": true,
				"allowSeparatedGroups": true
			}
		],
		"semi": [
			"error",
			"always"
		],
		"semi-spacing": [
			"error"
		],
		"semi-style": [
			"error",
			"last"
		],
		"comma-dangle": [
			"error",
			{
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "never"
			}
		],
		"newline-per-chained-call": [
			"error",
			{
				"ignoreChainWithDepth": 1
			}
		],
		"no-extra-boolean-cast": [
			"error"
		],
		"no-empty": [
			"error"
		],
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		"jsonc/sort-keys": [ "error" ],
		"jsonc/indent": [
			"error",
			2,
			{}
		],
		"jsonc/array-bracket-spacing": [
			"error",
			"always"
		],
		"jsonc/array-bracket-newline": [
			"error",
			{
				"multiline": true,
				"minItems": 2
			}
		],
		"jsonc/array-element-newline": [
			"error",
			{
				"multiline": true,
				"minItems": 2
			}
		],
		"jsonc/object-curly-newline": [
			"error",
			{
				"minProperties": 2
			}
		],
		"jsonc/object-curly-spacing": [
			"error",
			"always"
		],
		"jsonc/key-spacing": [
			"error",
			{
				"beforeColon": false,
				"afterColon": true,
				"mode": "strict"
			}
		],
		"jsx-quotes": [
			"error",
			"prefer-double"
		],
		"key-spacing": [
			"error",
			{
				"beforeColon": false,
				"afterColon": true,
				"mode": "strict"
			}
		],
		"arrow-spacing": [
			"error"
		],
		"prefer-arrow-callback": [
			"error"
		],
		"arrow-body-style": [
			"error",
			"as-needed"
		],
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"no-confusing-arrow": [
			"error"
		],
		"no-multi-spaces": [
			"error"
		],
		"no-trailing-spaces": [
			"error"
		],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-before-function-paren": [
			"error",
			{
				"anonymous": "always",
				"named": "never",
				"asyncArrow": "always"
			}
		]
	}
}
