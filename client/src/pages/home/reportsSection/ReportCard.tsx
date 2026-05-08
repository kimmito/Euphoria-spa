import { RxAvatar } from 'react-icons/rx'

import type { Report } from '@/data/reports'

type ReportCardProps = {
	report: Report
}

export const ReportCard = ({ report }: ReportCardProps) => {
	return (
		<div className='keen-slider__slide min-w-0'>
			<div className='box-border h-full w-full max-w-full px-15 py-15 pr-25'>
				<div className='flex min-w-0 flex-row items-center gap-5'>
					<div className='mt-3 shrink-0'>
						{report.image ? (
							<img
								src={report.image}
								alt={report.author}
								className='h-16 w-16 rounded-full'
							/>
						) : (
							<RxAvatar className='h-16 w-16' />
						)}
					</div>

					<div className='min-w-0'>
						<p className='text-head truncate text-[32px] font-bold'>
							{report.author}
						</p>
						<p className='text-head text-[24px] leading-none'>{report.date}</p>
					</div>
				</div>
				<div className='mb-5'>
					{[...Array(report.stars)].map((_, i) => (
						<span key={i} className='text-yellow-500 text-[32px]'>
							★
						</span>
					))}
					{[...Array(5 - report.stars)].map((_, i) => (
						<span key={i} className='text-gray-300 text-[32px]'>
							★
						</span>
					))}
				</div>
				<p className='text-head max-w-full overflow-hidden break-words text-2xl font-bold leading-snug'>
					{report.text}
				</p>
			</div>
		</div>
	)
}
