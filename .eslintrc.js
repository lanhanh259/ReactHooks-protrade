module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: 'off',
		'react/react-in-jsx-scope': 'off',
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		// indent: ['error', 2, { SwitchCase: 1 }],
		'no-debugger': 'off',
		quotes: ['error', 'single'],
		// semi: ['warn', 'always'],
		'no-unused-vars': ['warn'],
		'react/no-unused-prop-types': ['warn'],
		'react/prop-types': 'off',
	},
}
