import { Button, Col, Row } from 'antd'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTelegramPlane, FaVk } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white flex w-full justify-center py-10 gap-20'>
			<div className='w-1/5'>
				<p className='text-xl tracking-wide text-gray-400'>
					&copy; 2026 THRILL. Все права защищены. <br />
					Цены на нашем сайте не являются публичной офертой, актуальные цены
					можно узнать при записи.
				</p>
			</div>

			<div>
				<Row gutter={[16, 24]} className='font-semibold'>
					<Col span={6}>
						<a
							href='#'
							className='text-white/60! decoration-0! inline-block text-xl hover:text-white!'
						>
							Брови
						</a>
					</Col>
					<Col span={6}>
						<a
							href='#'
							className='text-white/60! decoration-0! inline-block text-xl hover:text-white!'
						>
							Наши работы
						</a>
					</Col>
					<Col span={6}>
						<a
							href='#'
							className='text-white/60! decoration-0! inline-block text-xl hover:text-white!'
						>
							Прайс
						</a>
					</Col>
					<Col span={6}>
						<a
							href='#'
							className='text-white/60! decoration-0! inline-block text-xl hover:text-white!'
						>
							Контакты
						</a>
					</Col>

					<Col span={6}>
						<a
							href='#'
							className='text-white/60! decoration-0! inline-block text-xl hover:text-white!'
						>
							Маникюр
						</a>
					</Col>
					<Col span={6}>
						<a
							href='#'
							className='text-white/60! decoration-0! inline-block text-xl hover:text-white!'
						>
							Фотогаллерея
						</a>
					</Col>
					<Col span={12}></Col>

					<Col span={6}>
						<a
							href='#'
							className='text-white/60! decoration-0! inline-block text-xl hover:text-white!'
						>
							Педикюр
						</a>
					</Col>
				</Row>
			</div>
			<div>
				<div className='flex gap-3 bottom-1 mb-2 relative'>
					<Button
						type='text'
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						icon={<AiFillInstagram size={20} className='relative top-0.5' />}
						className='rounded-full! bg-white! text-black/50 hover:text-primary!'
					/>
					<Button
						type='text'
						href='https://vk.com'
						target='_blank'
						rel='noopener noreferrer'
						icon={<FaVk size={20} className='relative top-0.5' />}
						className='rounded-full! bg-white! text-black/50 hover:text-primary!'
					/>
					<Button
						type='text'
						href='https://telegram.com'
						target='_blank'
						rel='noopener noreferrer'
						icon={<FaTelegramPlane size={20} className='relative top-0.5' />}
						className='rounded-full! bg-white! text-black/50 hover:text-primary!'
					/>
				</div>
				<div>
					<Button
						type='text'
						href='https://telegram.com'
						target='_blank'
						rel='noopener noreferrer'
						icon={<IoIosMail size={20} className='relative top-0.5' />}
						className='rounded-full! bg-white! text-black/50 hover:text-primary!'
					/>
				</div>
			</div>
		</footer>
	)
}
export default Footer
