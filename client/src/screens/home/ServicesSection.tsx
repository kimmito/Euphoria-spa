import { Button } from 'antd'
import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '@/store/store'

import { categories } from '@/data/categories'
import { offers } from '@/data/offers'
import { services } from '@/data/services'
import { setCategory, setService } from '@/features/priceTabs/priceTabsSlice'

export const ServicesSection = forwardRef<HTMLDivElement>((_, ref) => {
	const category = useSelector((state: RootState) => state.priceTabs.category)
	const service = useSelector((state: RootState) => state.priceTabs.service)
	const dispatch = useDispatch()

	return (
		<section ref={ref} className='mt-16'>
			<h2 className='text-6xl text-center mb-16 text-primary'>
				Давайте наведем красоту
			</h2>
			<div
				role='tablist'
				aria-label='Выбор категории услуг'
				className='max-w-3/4 w-full	mx-auto flex justify-center gap-10 mb-10'
			>
				{categories.map(cat => (
					<Button
						key={cat.id}
						role='tab'
						aria-selected={category === cat.id}
						onClick={() => dispatch(setCategory(cat.id))}
						variant='filled'
						className={`px-16! py-5! bg-violet-300! text-lg! rounded-2xl text-primary! hover:border-primary! ${category === cat.id ? 'bg-violet-400!' : 'bg-violet-300!'}`}
					>
						{cat.name}
					</Button>
				))}
			</div>
			<div
				role='tablist'
				aria-label='Выбор услуги'
				className='max-w-4/5 w-full mx-auto flex justify-center gap-10 mb-10'
			>
				{category === 'offers'
					? offers.map(offer => (
							<Button
								key={offer.id}
								role='tab'
								aria-selected={service === offer.id}
								onClick={() => dispatch(setService(offer.id))}
								className={`px-16! py-5! bg-violet-300! text-lg! text-primary! hover:border-primary! ${offer.id === service ? 'bg-violet-400!' : 'bg-violet-300!'}`}
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
									className={`px-16! py-5! bg-violet-300! text-lg! text-primary! hover:border-primary! ${s.id === service ? 'bg-violet-400!' : 'bg-violet-300!'}`}
								>
									{s.name}
								</Button>
							))}
			</div>
		</section>
	)
})
