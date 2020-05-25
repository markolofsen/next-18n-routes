const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
	defaultLanguage: 'en',
	fallbackLng: 'en',
	otherLanguages: ['de'],
	localePath: typeof window === 'undefined' ? 'public/static/locales' : 'static/locales',
	localeSubpaths: {
		en: 'en',
		de: 'de',
	},
  browserLanguageDetection: false,
  serverLanguageDetection: false,
	detection: {
		lookupCookie: 'next-i18next',
		ignoreRoutes: ['/_next/', '/static/', '/public/', '/api/'],
		order: ['path', 'querystring', 'cookie'],
    caches: ['cookie'],
    cookieMinutes: 160,
    lookupQuerystring: 'lang',
    lookupFromPathIndex: 0
	},
	debug: false
})
