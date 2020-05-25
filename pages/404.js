import React from 'react'
import PropTypes from 'prop-types'

import {
	withTranslation
} from '../i18n'

const Page404 = ({
	// t
}) => (
	<p>
		<h1>404 - Page Not Found</h1>
  </p>
)


Page404.defaultProps = {
	// namespacesRequired: ['common'],
}

Page404.propTypes = {
	// t: PropTypes.func.isRequired,
	// namespacesRequired: PropTypes.array.isRequired,
}

// export default withTranslation('common')(Page404)
export default Page404