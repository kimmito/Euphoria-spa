export type Service = {
	id: string
	name: string
	categoryId: string
}

export const services: Service[] = [
	{ id: '1', name: 'Маникюр', categoryId: 'nails' },
	{ id: '2', name: 'Педикюр', categoryId: 'nails' },
	{ id: '3', name: 'Брови', categoryId: 'face' },
	{ id: '4', name: 'Ресницы', categoryId: 'face' },
]
