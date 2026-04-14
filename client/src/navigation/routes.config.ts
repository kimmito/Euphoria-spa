import type { ComponentType } from 'react'

import Home from '@screens/home/Home'
import NotFound from '@screens/not-found/NotFound'
import Profile from '@screens/profile/Profile'

export interface IRoute {
	path: string
	title: string
	component: ComponentType
}

export const appRoutes: IRoute[] = [
	{
		path: '/',
		title: 'Главная',
		component: Home
	},
	{
		path: '/profile',
		title: 'Профиль',
		component: Profile
	},

	{
		path: '/not-found',
		title: 'Страница не найдена',
		component: NotFound
	}
]
