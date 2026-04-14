import { AppRouter } from '@navigation/AppRouter'
import { appRoutes } from '@navigation/routes.config'
import { useRouteTitle } from '@navigation/useRouteTitle'

import './global.css'

function App() {
	useRouteTitle(appRoutes)

	return <AppRouter />
}

export default App
