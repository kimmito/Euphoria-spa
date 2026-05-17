import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

import { staff } from '@/data/staff'

import { StaffGrid } from './StaffGrid'
import { StaffSlide } from './StaffSlide'

const StaffSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const isSliderEnabled = staff.length > 3

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop: isSliderEnabled,
		drag: isSliderEnabled,
		slides: {
			perView: isSliderEnabled ? 3.5 : staff.length,
			origin: 'center',
			spacing: 48
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		}
	})

	return (
		<section id='staff' className='mb-10'>
			<h2 className='block text-head mb-10 max-w-370 mx-auto text-right text-[96px] font-bold uppercase'>
				Наши мастера
			</h2>
			{isSliderEnabled ? (
				<StaffSlide
					sliderRef={sliderRef}
					instanceRef={instanceRef}
					currentSlide={currentSlide}
					staff={staff}
				/>
			) : (
				<StaffGrid staff={staff} />
			)}
		</section>
	)
}

export default StaffSection
