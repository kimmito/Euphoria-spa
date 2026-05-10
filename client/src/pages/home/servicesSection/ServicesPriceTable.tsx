import { AppButton } from '@/components/ui/AppButton'

type ServicesPriceTableProps = {
	ref: React.RefObject<HTMLDivElement | null>
}
export const ServicesPriceTable = ({ ref }: ServicesPriceTableProps) => {
	return (
		<div id='services-price' ref={ref} className='mt-18'>
			<table className='w-1/2 mb-10 ml-10 border-collapse [&_td]:border-b [&_td]:border-line/35 [&_td]:py-5 [&_td:last-child]:pl-8 [&_td:last-child]:text-right [&_tr:last-child_td]:border-b-0'>
				<tbody>
					<tr>
						<td className='text-2xl max-w-100'>Маникюр</td>
						<td className='text-[32px] font-bold text-center'>1500 ₽</td>
					</tr>
					<tr>
						<td className='text-2xl max-w-100'>Маникюр</td>
						<td className='text-[32px] font-bold text-center'>2000 ₽</td>
					</tr>
					<tr>
						<td className='text-2xl max-w-100'>Маникюр</td>
						<td className='text-[32px] font-bold text-center'>2000 ₽</td>
					</tr>
					<tr>
						<td className='text-2xl max-w-100'>Маникюр</td>
						<td className='text-[32px] font-bold text-center'>2000 ₽</td>
					</tr>
					<tr>
						<td className='text-2xl max-w-100'>Маникюр</td>
						<td className='text-[32px] font-bold text-center'>2000 ₽</td>
					</tr>
				</tbody>
			</table>
			<div className='flex flex-row gap-3 ml-10 w-1/2 *:flex *:px-20 *:py-6 *:text-2xl'>
				<AppButton
					className='flex-2 hover:bg-transparent hover:text-accent! hover:border-accent'
					appVariant='primary'
				>
					Онлайн-запись
				</AppButton>
				<AppButton className='flex-1' appVariant='outline'>
					Портфолио
				</AppButton>
			</div>
		</div>
	)
}
