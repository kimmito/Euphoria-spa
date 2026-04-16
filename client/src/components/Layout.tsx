import { Outlet } from 'react-router'

import Footer from './Footer'
import Header from './Header'

export const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen pt-14'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
