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
    page: 'second',
    pattern: '/second/:id',
    params: {
      id: 'no_id'
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
