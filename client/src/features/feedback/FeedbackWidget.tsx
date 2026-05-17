import { useEffect, useState } from 'react'

import { FeedbackButton } from './FeedbackButton'
import { FeedbackModal } from './FeedbackModal'

export const FeedbackWidget = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
	}
	const closeModal = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		const alreadyShown = sessionStorage.getItem('feedback-modal-shown')
		if (alreadyShown) return

		const timerId = window.setTimeout(() => {
			setIsOpen(true)
			sessionStorage.setItem('feedback-modal-shown', 'true')
		}, 20000)

		return () => window.clearTimeout(timerId)
	}, [])

	return (
		<>
			<FeedbackButton onClick={openModal} />
			<FeedbackModal open={isOpen} onClose={closeModal} />
		</>
	)
}
