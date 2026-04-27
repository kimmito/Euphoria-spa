interface CurvedLoopItem {
	image: string
	text?: string
}

interface CurvedLoopProps {
	items: CurvedLoopItem[]
	direction?: 'left' | 'right'
}

const ITEM_SIZE = 280
const ITEM_GAP = 24
const PIXELS_PER_SECOND = 80
const HOVER_TRANSITION_SECONDS = 0.2

const CurvedLoop = ({
	items,
	direction = 'left'
}: CurvedLoopProps) => {
	if (items.length === 0) return null

	const loopItems = [...items, ...items]
	const loopDistance = items.length * (ITEM_SIZE + ITEM_GAP)
	const duration = `${loopDistance / PIXELS_PER_SECOND}s`
	const animationName =
		direction === 'right' ? 'portfolio-image-loop-right' : 'portfolio-image-loop-left'

	return (
		<div className='portfolio-loop w-full overflow-hidden my-6 py-10'>
			<style>
				{`
					@keyframes portfolio-image-loop-left {
						from { transform: translateX(0); }
						to { transform: translateX(-50%); }
					}

					@keyframes portfolio-image-loop-right {
						from { transform: translateX(-50%); }
						to { transform: translateX(0); }
					}

					.portfolio-loop:hover .portfolio-loop-track {
						animation-play-state: paused !important;
					}
				`}
			</style>

			<div
				className='portfolio-loop-track flex w-max gap-6 will-change-transform'
				style={{
					animation: `${animationName} ${duration} linear infinite`
				}}
			>
				{loopItems.map((item, index) => (
					<figure
						key={`${item.image}-${index}`}
						className='relative z-0 h-[280px] w-[280px] shrink-0 overflow-hidden bg-panel transition-transform hover:z-10 hover:scale-110'
						style={{
							transitionDuration: `${HOVER_TRANSITION_SECONDS}s`
						}}
					>
						<img
							src={item.image}
							alt={item.text || ''}
							className='h-full w-full object-cover'
						/>
						{item.text ? (
							<figcaption className='absolute inset-x-0 bottom-0 bg-base/75 px-4 py-3 text-xl uppercase text-copy'>
								{item.text}
							</figcaption>
						) : null}
					</figure>
				))}
			</div>
		</div>
	)
}

export default CurvedLoop
