import { useEffect, useMemo, useState } from 'react'


import { categories } from '@/data/categories'
import { useServiceConnectorLine } from '@/pages/home/servicesSection/useServiceConnectorLine'
import { ServicesTabs } from './ServicesTabs'
import { ServicesPriceTable } from './ServicesPriceTable'
import { ServicesConnectorLine } from './ServicesConnectorLine'

const PRICE_HASH_PREFIX = 'services-price-'

export const ServicesSection = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		categories.length > 0 ? categories[0].id : null
	)
	const categoryIds = useMemo(() => categories.map(category => category.id), [categories])
	const { sectionRef, tabsRef, priceRef, buttonRefs, line } =
		useServiceConnectorLine({ selectedCategory, categoryIds })

	useEffect(() => {
		const applyPriceHash = () => {
			const hash = window.location.hash.replace('#', '')
			const categoryId = hash.startsWith(PRICE_HASH_PREFIX)
				? hash.slice(PRICE_HASH_PREFIX.length)
				: null
			const category = categories.find(item => item.id === categoryId)

			if (category) {
				setSelectedCategory(category.id)
			}

			if (category || hash === 'services-price') {
				requestAnimationFrame(() => {
					sectionRef.current?.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					})
				})
			}
		}

		applyPriceHash()
		window.addEventListener('hashchange', applyPriceHash)

		return () => {
			window.removeEventListener('hashchange', applyPriceHash)
		}
	}, [sectionRef])

	return (
		<section
			id='services'
			className='relative mt-16 before:absolute before:inset-0 before:bg-[url("/src/assets/images/group1.png")] before:overflow-visible before:pb-120 before:-mb-120 before:bg-position-[right_top_3rem] before:bg-no-repeat before:content-[""] before:opacity-80 before:mix-blend-overlay'
		>
			<div ref={sectionRef} className='relative max-w-400 mx-auto px-4'>
				<h2 className='text-head uppercase font-bold text-8xl text-end mb-26'>
					Услуги
				</h2>
				<ServicesTabs ref={tabsRef} categories={categories} buttonRefs={buttonRefs} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
				<ServicesPriceTable ref={priceRef} />
				<ServicesConnectorLine line={line} />


			</div>
		</section>
	)
}
