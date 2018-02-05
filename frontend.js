module.exports = {
	extends: ['airbnb', 'whatchado/base'],
	plugins: ['react'],
	rules: {
		// react rules
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'react/prop-types': 1,
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-forbid-prop-types': ['off'],
		'react/prefer-stateless-function': ['off'],
		'react/jsx-max-props-per-line': ['warn', { when: 'multiline', }],
		'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
		'react/jsx-closing-bracket-location': [
			'warn',
			{
				nonEmpty: 'after-props',
				selfClosing: 'after-props',
			}
		],
		'react/jsx-tag-spacing': [
			'warn',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'never',
				afterOpening: 'never',
			}
		],
		'class-methods-use-this': [
			'error',
			{
				'exceptMethods': [
					'componentDidMount',
					'componentDidUpdate',
					'componentWillMount',
					'componentWillReceiveProps',
					'componentWillUnmount',
					'componentWillUpdate',
					'render',
					'shouldComponentUpdate',
				]
			}
		],
	},
}
