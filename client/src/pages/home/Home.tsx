import { useContext } from 'react'

import ScrollVelocity from '@/components/ScrollVelocity'

import { HeroSection } from './HeroSection'
import { ServicesSection } from './ServicesSection'
import { ServicesRefContext } from '@/contexts/servicesRefContext'
import MapSection from '@/pages/home/MapSection'
import AboutSection from './AboutSection'

const Home = () => {
	const servicesRef = useContext(ServicesRefContext)

	return (
		<>
			<HeroSection />
			<ScrollVelocity
				texts={['THRILL', 'THRILL', 'THRILL']}
				velocity={30}
				className='custom-scroll-text'
				numCopies={50}
				damping={75}
				stiffness={500}
			/>
			<AboutSection />

			<ServicesSection ref={servicesRef as React.Ref<HTMLDivElement>} />
			<MapSection />
		</>
	)
}

export default Home
