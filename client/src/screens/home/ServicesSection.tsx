import { Button } from 'antd'
import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '@/store/store'

import { categories } from '@/data/categories'
import { offers } from '@/data/offers'
import { services } from '@/data/services'
import { setCategory, setService } from '@/features/priceTabs/priceTabsSlice'

export const ServicesSection = forwardRef<HTMLDivElement>((props, ref) => {
	const category = useSelector((state: RootState) => state.priceTabs.category)
	const service = useSelector((state: RootState) => state.priceTabs.service)
	const dispatch = useDispatch()

	return (
		<section ref={ref}>
			<h2 className=''>Давайте наведем красоту</h2>
			<div role='tablist' aria-label='Выбор категории услуг'>
				{categories.map(cat => (
					<Button
						key={cat.id}
						role='tab'
						aria-selected={category === cat.id}
						onClick={() => dispatch(setCategory(cat.id))}
					>
						{cat.name}
					</Button>
				))}
			</div>
			<div role='tablist' aria-label='Выбор услуги'>
				{category === 'offers'
					? offers.map(offer => (
							<Button
								key={offer.id}
								role='tab'
								aria-selected={service === offer.id}
								onClick={() => dispatch(setService(offer.id))}
							>
								{offer.name}
							</Button>
						))
					: services
							.filter(s => s.categoryId === category)
							.map(s => (
								<Button
									key={s.id}
									role='tab'
									aria-selected={service === s.id}
									onClick={() => dispatch(setService(s.id))}
								>
									{s.name}
								</Button>
							))}
			</div>
		</section>
	)
})
