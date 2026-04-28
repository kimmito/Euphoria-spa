import CurvedLoop from '@/components/ui/CurvedLoop'

import { portfolioBrowsData } from '@/data/portfolio/portfolio-brows-data'
import { portfolioLashesData } from '@/data/portfolio/portfolio-lashers-data'
import { portfolioNailsData } from '@/data/portfolio/portfolio-nails-data'

const PortfolioSection = () => {
	return (
		<section>
			<h2 className='text-8xl font-bold text-left my-16 ml-50 uppercase'>
				Портфолио
			</h2>
			<div className='relative'>
				<CurvedLoop items={portfolioNailsData} direction='left' />
				<p className='pointer-events-none uppercase overflow-hidden text-nowrap mix-blend-overlay select-none text-[250px] font-title text-center absolute z-1 top-17 -left-20'>
					nailsnailsnailsnails
				</p>
			</div>
			<div className='relative'>
				<CurvedLoop items={portfolioBrowsData} direction='right' />
				<p className='pointer-events-none uppercase overflow-hidden text-nowrap mix-blend-multiply text-[250px] font-title text-center absolute z-1 top-17 -left-20'>
					browsbrowsbrowsbrows
				</p>
			</div>
			<div className='relative'>
				<CurvedLoop items={portfolioLashesData} direction='left' />
				<p className='pointer-events-none uppercase overflow-hidden text-nowrap mix-blend-color-burn text-[250px] font-title text-center absolute z-1 top-17 -left-20'>
					lasheslasheslasheslashes
				</p>
			</div>
		</section>
	)
}

export default PortfolioSection
