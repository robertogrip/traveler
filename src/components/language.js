const language = {
	'pt-br': {
		__itsTimeTo: 'É tempo de'
	},
	'en-us': {
		__itsTimeTo: 'It\'s time to'
	},
	get: function( lang, text ) {
		return ( this[lang] && this[lang][text] ) || '';
	}
};

export default language;