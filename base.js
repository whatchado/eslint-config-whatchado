module.exports = {
	extends: ['airbnb-base'],
	rules: {
		// general rules
		requireSemicolons: 'off',
		'no-tabs': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true, }],
		'no-console': ['warn', { allow: ['error'], }],
		'no-param-reassign': ['error', { props: false, }],
		'max-len': ['off', 200],
		semi: ['error', 'never'],
		'func-names': ['error', 'never'],
		'comma-dangle': [
			'error',
			{
				arrays: 'never',
				objects: 'always',
				imports: 'never',
				exports: 'never',
				functions: 'ignore',
			}
		],
	},
}
