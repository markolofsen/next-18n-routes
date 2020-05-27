const routes = require('next-routes')

let setRoutes = routes()
setRoutes.APP_ROUTES = {
	index: {
    page: 'index',
    pattern: '/',
    params: {
    }
	},
  second: {
    page: '/second/index',
		pattern: `/icons/:slug/:page([0-9]+)?`,
		params: {
			slug: 'all',
			// page: 1,
		},
  },
	icon: {
		page: '/second/index',
		pattern: `/icon/:slug/`,
		params: {
			slug: ''
		}
	},
}

Object.entries(setRoutes.APP_ROUTES).map(({
	0: key,
	1: value
}) => {

	const name = key
	const page = value.page && value.page.length > 0 ? value.page : key

	const init = {
		...value,
		name,
		page,
	}

	setRoutes.add(init)

})


module.exports = setRoutes
