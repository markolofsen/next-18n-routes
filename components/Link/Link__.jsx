/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Router, {
	useRouter
} from 'next/router'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

// env
import {
	Context
} from '~/context/'

// helpers
import {
	routes
} from '~/server/routes/'
import APP_ROUTES from '~/server/routes/routes.lib'
import {
	defaultLanguage
} from '~/server/configs/languages'


const NextComposed = React.forwardRef(function NextComposed(props, ref) {
	const {
		as,
		href,
		prefetch,
		...other
	} = props

	return (
		<NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
	)
})

NextComposed.propTypes = {
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	prefetch: PropTypes.bool
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {

	const router = useRouter()
	const {
		query
	} = React.useContext(Context)
	const [lang, setLang] = React.useState(query.lang || defaultLanguage);

	const {
		link,
		activeClassName = 'active',
		className: classNameProps,
		innerRef,
		naked,
		href: getHer,
		as: getAs,
		...other
	} = props


	// console.warn(props);

	let href = link ? link : getHer
	let as = getAs

	// Variables reacher

	if(typeof href === 'object') {

		href.pathname = href.pathname.charAt(0) === '/' ? href.pathname.substring(1) : href.pathname

		for(let i of routes) {

			// Wrap pathname if without slash


			if(i.name == href.pathname) {

				let getQuery = {
					...APP_ROUTES[i.name].params,
					...href.query,
					lang,
				}

				let makePath = i.toPath(getQuery)

				const query_extra = Object.keys(getQuery).filter(a => !i.keys.map(item => item.name).includes(a)).map(a => `${a}=${getQuery[a]}`)
				if(query_extra.length > 0) {
					makePath = encodeURI(`${makePath}?${query_extra.join('&')}`)
				}

				// Apply modifies
				href.query = getQuery
				as = makePath

				break;
			}
		}


	}



	// query
	const pathname = typeof href === 'string' ? href : href.pathname
	const className = clsx(classNameProps, {
		[activeClassName]: router.pathname.substring(1) === pathname && activeClassName
	})

	const params = {
		...other,
		href,
		as,
	}

	if(naked) {
		return <NextComposed className={className} ref={innerRef} {...params} />
	}

	return (
		<MuiLink component={NextComposed} className={className} ref={innerRef} {...params} />
	)
}

Link.propTypes = {
	activeClassName: PropTypes.string,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	className: PropTypes.string,
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	naked: PropTypes.bool,
	onClick: PropTypes.func,
	prefetch: PropTypes.bool
}


export default React.forwardRef((props, ref) => {
	return (
		<Link {...props} innerRef={ref} />
	)
})