import { Button } from 'antd'
import type { RefObject } from 'react'
import { useDispatch } from 'react-redux'

import hallImage from '@/assets/images/hall.jpg'

import { services } from '@/data/services'
import { setCategory, setService } from '@/features/priceTabs/priceTabsSlice'

export type HeroSectionProps = {
	servicesRef?: RefObject<HTMLDivElement | null> | null
}

export const HeroSection = ({ servicesRef }: HeroSectionProps) => {
	const dispatch = useDispatch()
	const handleServiceClick = (serviceId: string, categoryId: string) => {
		dispatch(setCategory(categoryId))
		dispatch(setService(serviceId))
		servicesRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
	return (
		<section className='flex'>
			<div className='flex w-1/2 mx-20 text-center items-center justify-center flex-col '>
				<nav className='w-full'>
					<ul className='flex justify-center gap-10 mb-10 w-full'>
						{services.map(service => (
							<li key={service.name}>
								<Button
									type='text'
									variant='outlined'
									color='purple'
									ghost={true}
									size='large'
									onClick={() =>
										handleServiceClick(service.id, service.categoryId)
									}
								>
									{service.name}
								</Button>
							</li>
						))}
					</ul>
				</nav>
				<h2 className='text-3xl'>Салон красоты в Краснодаре</h2>
				<h1 className='text-7xl font-title font-semibold uppercase'>Thrill</h1>
				<ul className='flex mt-6 justify-center text-xl [&>li]:after:content-["|"] [&>li]:after:mx-4 [&>li]:last:after:content-[""]'>
					{services.map(service => (
						<li key={service.name}>
							<span className='lowercase'>{service.name}</span>
						</li>
					))}
				</ul>
				<div className='mt-12 flex gap-10 justify-center'>
					<Button
						variant='solid'
						color='purple'
						size='large'
						style={{ width: '200px' }}
					>
						Онлайн-запись
					</Button>
					<Button
						variant='solid'
						color='purple'
						size='large'
						style={{ width: '200px' }}
					>
						Прайс
					</Button>
				</div>
			</div>
			<div className='flex-1 '>
				<img
					src={hallImage}
					alt='Салон красоты THRILL'
					className='h-[90vh] relative right-0 -top-14 shadow-lg shadow-fuchsia-950/20 rounded-b-lg overflow-hidden w-full object-cover'
				/>
			</div>
		</section>
	)
}
