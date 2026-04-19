import { useContext } from 'react'

import { HeroSection } from './HeroSection'
import { ServicesSection } from './ServicesSection'
import { ServicesRefContext } from '@/contexts/servicesRefContext'
import MapSection from '@/screens/home/MapSection'

const Home = () => {
	const servicesRef = useContext(ServicesRefContext)

	return (
		<>
			<HeroSection servicesRef={servicesRef} />
			<ServicesSection
				ref={servicesRef as React.Ref<HTMLDivElement>}
			/>
			<MapSection />
		</>
	)
}

export default Home
