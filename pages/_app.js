import React from 'react'
import App from 'next/app'
import i18n, {
	appWithTranslation
} from '../i18n'

// console.warn(i18n);

class MyApp extends App {

	// Fetching serialized(JSON) store state
	static async getInitialProps(appContext) {
		const appProps = await App.getInitialProps(appContext)

		const {
			res,
			req,
			query
		} = appContext.ctx

		return {
			...appProps,
			query,
		};
	}
	render() {
		const {
			Component,
			pageProps,
			query
		} = this.props

		console.warn('pageProps', pageProps);
		console.warn('query', query);
		return (
			<Component {...pageProps} />
		)
	}
}

export default appWithTranslation(MyApp)