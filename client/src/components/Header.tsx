import { AiFillInstagram } from 'react-icons/ai'
import { FaPhoneAlt, FaTelegramPlane, FaVk } from 'react-icons/fa'

import { AppButton } from './AppButton'

const socialLinks = [
	{
		href: 'https://instagram.com',
		icon: <AiFillInstagram size={20} className='relative top-0.5' />,
		label: 'Instagram'
	},
	{
		href: 'https://vk.com',
		icon: <FaVk size={20} className='relative top-0.5' />,
		label: 'VK'
	},
	{
		href: 'https://telegram.com',
		icon: <FaTelegramPlane size={20} className='relative top-0.5' />,
		label: 'Telegram'
	}
]

const Header = () => {
	return (
		<header className='w-full h-14 bg-transparent fixed top-0 left-0 z-1000'>
			<div className='container mx-auto h-full flex items-center justify-end'>
				<div className='flex space-x-2'>
					{socialLinks.map(link => (
						<AppButton
							key={link.href}
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={link.label}
							icon={link.icon}
							appVariant='icon'
							className='w-18'
						/>
					))}
					<AppButton
						href='tel:+79615177332'
						icon={<FaPhoneAlt size={18} />}
						appVariant='icon'
						className='w-full bg-button! text-xl hover:bg-transparent!'
					>
						+7 (961) 517-73-32
					</AppButton>
				</div>
			</div>
		</header>
	)
}

export default Header
