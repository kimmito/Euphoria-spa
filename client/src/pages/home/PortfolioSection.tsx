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
			<CurvedLoop items={portfolioNailsData} direction='left' />
			<CurvedLoop items={portfolioBrowsData} direction='right' />
			<CurvedLoop items={portfolioLashesData} direction='left' />
		</section>
	)
}

export default PortfolioSection
