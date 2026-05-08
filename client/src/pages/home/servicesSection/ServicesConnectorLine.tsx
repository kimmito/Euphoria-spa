import type { LineGeometry } from './useServiceConnectorLine'

type ServicesConnectorLineProps = {
	line: LineGeometry | null
}
export const ServicesConnectorLine = ({ line }: ServicesConnectorLineProps) => {
	if (!line) return null
	return (
		<div className='pointer-events-none absolute inset-0'>
			<div
				className='absolute bg-accent'
				style={{
					left: `${line.railX}px`,
					top: `${line.railTop}px`,
					width: '1px',
					height: `${line.railHeight}px`
				}}
			/>
			{line.hasConnector ? (
				<>
					<div
						className='absolute bg-accent'
						style={{
							left: `${line.branchLeft}px`,
							top: `${line.branchY}px`,
							width: `${line.branchWidth}px`,
							height: '1px'
						}}
					/>
					<div
						className='absolute bg-accent'
						style={{
							left: `${line.linkX}px`,
							top: `${line.linkTop}px`,
							width: '1px',
							height: `${line.linkHeight}px`
						}}
					/>
				</>
			) : null}
		</div>
	)
}
