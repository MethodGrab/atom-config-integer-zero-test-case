'use babel';

export default {

	config: {
		someInt: {
			type: 'integer',
			default: 11,
		},
		someString: {
			type: 'string',
			default: '12',
		},
	},

	activate( state ) {
		let options = [
			{
				name: 'someInt',
				value: atom.config.get( 'atom-config-integer-zero.someInt' ),
			},
			{
				name: 'someString',
				value: atom.config.get( 'atom-config-integer-zero.someString' ),
			}
		];

		options = options.map( option => {
			option.type = typeof option.value;
			return option;
		});

		console.log( 'atom-config-integer-zero-test-case', { options }, JSON.stringify( options, true, 2 ) );
	},

	deactivate() {},

};
