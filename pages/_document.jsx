import React from 'react'
import Document, {
	Head,
	Main,
	NextScript
} from 'next/document'

class MyDocument extends Document {

	render() {

		const lang = this.props.__NEXT_DATA__.props.initialLanguage

		return (
			<html dir="ltr" lang={lang}>
        <Head>

					<meta charSet="utf-8" />

          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={`user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1, width=device-width height=device-height`}
          />

					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-title" content="Add to Home" />

        </Head>
        <body>
          <Main />
          <NextScript />
					lang: {lang}
					<br />
        </body>
      </html>
		)
	}
}

MyDocument.getInitialProps = async ctx => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// // Render app and page and get the context of the page with collected side effects.
	// const sheets = new ServerStyleSheets()
	// const originalRenderPage = ctx.renderPage
	//
	// ctx.renderPage = () =>
	// 	originalRenderPage({
	// 		enhanceApp: App => props => sheets.collect(<App {...props} />)
	// 	})

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		// styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	}
}


export default MyDocument