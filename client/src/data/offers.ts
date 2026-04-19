export type Offer = {
	id: string
	name: string
	categoryId?: string
}

export const offers: Offer[] = [
	{ id: '1', name: 'Вау-часы', categoryId: 'offers' },
	{ id: '2', name: 'Комплексы услуг "Вместе"', categoryId: 'offers' },
	{ id: '3', name: 'Комплексы услуг брови и ресницы', categoryId: 'offers' }
]
