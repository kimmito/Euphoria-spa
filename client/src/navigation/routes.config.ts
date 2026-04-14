import Home from '@screens/home/Home'
import Profile from '@screens/profile/Profile'
import type { ComponentType } from 'react'

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
	}
]
