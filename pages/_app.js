import React from 'react'
import App from 'next/app'
import {
	i18n,
	appWithTranslation
} from '../i18n'

// helpers
import {
	Context,
} from '../context/'

class MyApp extends App {

	// Fetching serialized(JSON) store state
	static async getInitialProps(appContext) {
		const appProps = await App.getInitialProps(appContext)

		const {
			res,
			req,
			query
		} = appContext.ctx

		const currentLanguage = req ? req.language : i18n.language
		console.warn('currentLanguage', currentLanguage);

		return {
			...appProps,
			query,
			currentLanguage,
		};
	}
	render() {
		const {
			Component,
			pageProps,
			query,
			currentLanguage,
		} = this.props

		// console.warn('pageProps', pageProps);
		// console.warn('query', query);

		const contextDataServer = {
			currentLanguage,
			query,
		}

		return (
			<Context.Provider value={contextDataServer}>
				<Component {...pageProps} />
			</Context.Provider>
		)
	}
}

export default appWithTranslation(MyApp)