const language = {
	'pt-br': {
		__itsTimeTo: 'É tempo de',
		__journey: 'Viagens'
	},
	'en-us': {
		__itsTimeTo: 'It\'s time to',
		__journey: 'Journeys'
	},
	get: function( lang, text ) {
		return ( this[lang] && this[lang][text] ) || '';
	}
};

export default language;