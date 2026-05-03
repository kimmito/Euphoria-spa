import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { IoChevronBack } from 'react-icons/io5'

import { AppButton } from '@/components/ui/AppButton'

import { staff } from '@/data/staff'

const StaffSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const isSliderEnabled = staff.length > 3
	const sliderStaff = isSliderEnabled ? [...staff, ...staff] : staff
	const activePerson = staff[currentSlide % staff.length]
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop: isSliderEnabled,
		drag: true,
		slides: {
			perView: isSliderEnabled ? 3.5 : staff.length,
			origin: 'center',
			spacing: 48
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		}
	})

	if (!isSliderEnabled) {
		return (
			<section id='staff' className='mb-10'>
				<h2 className='text-head text-[96px] max-w-435 text-right font-bold uppercase mb-10'>
					Наши мастера
				</h2>
				<div className='flex flex-wrap justify-center gap-8'>
					{staff.map(member => (
						<article
							className='w-full max-w-[470px] text-center sm:w-[calc(50%-16px)] lg:w-[calc((100%-64px)/3)]'
							key={member.id}
						>
							<img
								src={member.photo}
								alt={member.name}
								className='w-full aspect-6/7 object-cover'
							/>
							<div className='mt-5'>
								<h3 className='text-head text-[24px] lg:text-[32px] leading-tight'>
									{member.name}
								</h3>
								<p className='mt-1 text-copy text-[16px] lg:text-[20px] leading-tight'>
									{member.position}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>
		)
	}

	return (
		<section id='staff' className='mb-10'>
			<h2 className='text-head text-[96px] max-w-435 text-right font-bold uppercase mb-10'>
				Наши мастера
			</h2>
			<div
				{...(isSliderEnabled ? { ref: sliderRef } : {})}
				className='keen-slider'
			>
				{sliderStaff.map((member, index) => (
					<div
						className='keen-slider__slide w-[clamp(280px,24.5vw,470px)] min-w-[clamp(280px,24.5vw,470px)]'
						key={`${member.id}-${index}`}
					>
						<img
							src={member.photo}
							alt={member.name}
							className={`w-full aspect-6/7 object-cover ${currentSlide === index ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300 ease`}
						/>
					</div>
				))}
			</div>
			<div className='keep-slider-controls flex justify-center items-center gap-16 mt-10 relative'>
				<AppButton
					aria-label='Предыдущий мастер'
					appVariant='icon'
					className='group absolute 2xl:left-3/8 lg:left-2/7 left-1/8 lg:bottom-4 bottom-1 h-10! w-10! min-w-10! rounded-none! p-0!'
					onClick={() => instanceRef.current?.prev()}
				>
					<IoChevronBack className='text-xl text-line transition-colors duration-200 ease group-hover:text-accent' />
				</AppButton>
				<div className='text-center'>
					<div className='lg:text-[32px] text-[20px] text-head'>{activePerson.name}</div>
					<div className='lg:text-[20px] text-[14px] text-head'>{activePerson.position}</div>
				</div>
				<AppButton
					aria-label='Следующий мастер'
					appVariant='icon'
					className='group absolute 2xl:right-3/8 lg:right-2/7 right-1/8 lg:bottom-4 bottom-1 h-10! w-10! min-w-10! rounded-none! p-0!'
					onClick={() => instanceRef.current?.next()}
				>
					<IoChevronBack className='rotate-180 text-xl text-line transition-colors duration-200 ease group-hover:text-accent' />
				</AppButton>
			</div>
		</section>
	)
}

export default StaffSection
