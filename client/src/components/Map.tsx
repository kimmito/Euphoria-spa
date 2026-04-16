import { FaPhoneAlt } from 'react-icons/fa'
import { FaCalendarCheck } from 'react-icons/fa'
import { IoMdMailOpen } from 'react-icons/io'

const Map = () => {
	return (
		<div className='flex shadow-fuchsia-950/20 shadow-lg rounded-lg overflow-hidden'>
			<div className='flex flex-col justify-center w-full h-100 bg-gray-200 p-10 gap-1 pl-20'>
				<h3 className='text-2xl font-bold mb-3'>Краеведа Соловьёва</h3>
				<p className='text-sm text-gray-500 mb-10'>
					Краснодар, ул. Краеведа Соловьёва 6, к. 3
				</p>
				<p className='text-xl font-bold'>
					<FaPhoneAlt className='inline mr-2' size={14} />
					<a href='tel:+79615177332'>+7 (961) 517-73-32</a>
				</p>
				<p className='text-sm'>
					<IoMdMailOpen className='inline mr-2 bottom-0.5 relative' size={17} />
					thrill@gmail.com
				</p>
				<p className='text-sm'>
					<FaCalendarCheck
						className='inline mr-1.5 bottom-0.5 relative'
						size={17}
					/>
					Пн-Вс: 10:00-22:00
				</p>
			</div>
			<div style={{ width: '600px', height: '400px' }}>
				<iframe
					src='https://yandex.ru/map-widget/v1/?um=constructor%3A5954de921996fd1651ff9984439f336ea9a5b19c669b94d1a66cf1fe9f11064d&amp;source=constructor'
					width='600'
					height='400'
				></iframe>
			</div>
		</div>
	)
}
export default Map
