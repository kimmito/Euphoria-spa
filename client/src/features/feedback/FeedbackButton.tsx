import { AppButton } from '@/components/ui/appButton/AppButton'

type FeedbackButtonProps = {
	onClick: () => void
}

export const FeedbackButton = ({ onClick }: FeedbackButtonProps) => {
	return (
		<AppButton
			htmlType='button'
			appVariant='primary'
			className='feedback-pulse uppercase z-50 fixed bottom-1/20 right-1/20 rounded-full h-20 w-20 text-sm!'
			onClick={onClick}
		>
			Связаться
		</AppButton>
	)
}
