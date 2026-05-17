import { useState } from 'react'

import { AppButton } from '@/components/ui/appButton/AppButton'
import { AppModal } from '@/components/ui/appModal/AppModal'

import { FeedbackForm } from './FeedbackForm'

type FeedbackModalProps = {
	open: boolean
	onClose: () => void
}

export const FeedbackModal = ({ open, onClose }: FeedbackModalProps) => {
	const [isClosing, setIsClosing] = useState(false)
	const onSuccess = () => {
		setIsClosing(true)
		setTimeout(() => {
			setIsClosing(false)
			onClose()
		}, 3000)
	}
	return (
		<AppModal open={open} onCancel={onClose} className='relative'>
			{isClosing ? (
				<div className='max-w-3/4 m-auto text-center leading-none h-full flex flex-col justify-center items-center relative'>
					<p className='text-5xl mb-5'>Спасибо за заявку!</p>
					<p className='text-2xl'>Мы свяжемся с вами в ближайшее время.</p>
					<AppButton onClick={() => {
						onClose()
					}}
						appVariant='outline'
						className='text-xl! mt-15'
					>
						Закрыть форму
					</AppButton>
				</div>
			) : (
				<div className=''>
					<h2 className='uppercase font-title text-[64px] text-center leading-none mb-1'>
						Thrill
					</h2>
					<p className='text-[32px] max-w-2/3 m-auto text-center leading-none mb-20'>
						Заполните форму и мы свяжемся с вами
					</p>
					<FeedbackForm onSuccess={onSuccess} />
				</div>
			)}
		</AppModal>
	)
}
