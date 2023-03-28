import React from 'react'

import AccessibilityForm from '../components/AccessibilityForm'

const Accessibility: React.FC = () => {

	return (
		<form className='accessibility'>
			<legend>Режим отображения</legend>
			<AccessibilityForm />
		</form>
	)
}

export default Accessibility