import PropTypes from 'prop-types';

// components
// import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

// import {
// 	i18n,
// 	Link as i18Link,
// } from '../../i18n'


// routes
import {
	useRouter
} from 'next/router'

import L, {
	routes,
	APP_ROUTES
} from '../../routes'

// env
import {
	Context
} from '../../context/'


const NextComposed = React.forwardRef(function NextComposed(props, ref) {
	return (
		<a {...props} />
	);
})


function PrefetchLink(props) {
	const {
		innerRef,
		href: getHref,
		link,
		color,
		naked,
		className
	} = props

	const href = link ? link : getHref

	const {
		currentLanguage
	} = React.useContext(Context)

	const getPathname = (v) => {
		let res = v.charAt(0) === '/' ? v.substring(1) : v
		return !res ? 'index' : res
	}

	const pathname = getPathname(href.pathname)

	let buildQuery = href.query

	const getAs = () => {
		for(let r of routes) {
			const name = getPathname(r.name)
			if(name == pathname) {
				buildQuery = {
					...APP_ROUTES[name].params,
					...href.query,
				}
				return `/${currentLanguage}${r.toPath(buildQuery)}`
				break
			}
		}
		return false;
	}


	const params = {
		className,
		color,
		href: getAs(),
		onClick: (e) => {
			e.preventDefault()
			// e.stopPropagation()
			// L.Router.pushRoute(pathname, buildQuery)
			L.Router.push(getAs())
			// return false;
		},
		children: props.children,
		ref: innerRef,
	}

	if(naked) {
		return (
			<NextComposed {...params} />
		)
	}

	return (
		<MuiLink component={NextComposed} {...params} />
	)

}

PrefetchLink.propTypes = {
	naked: PropTypes.bool,
	color: PropTypes.string,
	// route: PropTypes.string.isRequired,
	// params: PropTypes.object.isRequired,
	href: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
		query: PropTypes.object.isRequired,
	}),
}

export default React.forwardRef((props, ref) => {
	// console.warn(i18n);

	return (
		<PrefetchLink {...props} innerRef={ref} />
	)
})