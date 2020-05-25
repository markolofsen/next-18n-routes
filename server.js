const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({
	dev: process.env.NODE_ENV !== 'production'
})

const routes = require('./routes')
const handler = routes.getRequestHandler(app)

// With express
app.prepare().then(async () => {
	const server = express()

	await nextI18next.initPromise
	server.use(nextI18NextMiddleware(nextI18next))

	await server.use(handler).listen(port)
	console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})
