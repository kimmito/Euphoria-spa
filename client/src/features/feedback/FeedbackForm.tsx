import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'

import { AppButton } from '@/components/ui/appButton/AppButton'

import { sendFeedback } from './feedback.api'
import type { FeedbackFormValues } from './feedback.schema'
import { feedbackSchema } from './feedback.schema'

type FeedbackFormProps = {
	onSuccess?: () => void
}

export const FeedbackForm = ({ onSuccess }: FeedbackFormProps) => {
	const {
		control,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isSubmitting }
	} = useForm<FeedbackFormValues>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: {
			name: '',
			phone: ''
		}
	})
	const onSubmit = async (values: FeedbackFormValues) => {
		try {
			await sendFeedback(values)
			reset()
			onSuccess?.()
		} catch {
			setError('root', {
				message: 'Не удалось отправить заявку. Пожалуйста, попробуйте позже.'
			})
		}
	}
	type FormInput = {
		name: keyof FeedbackFormValues
		placeholder: string
	}
	const formInputList: FormInput[] = [
		{
			name: 'name',
			placeholder: 'Имя'
		},
		{
			name: 'phone',
			placeholder: 'Телефон'
		}
	]
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='max-w-100 mx-auto'>
			{formInputList.map(({ name, placeholder }) => (
				<Controller
					key={name}
					name={name}
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							placeholder={placeholder}
							status={errors[name] ? 'error' : undefined}
							variant='borderless'
							className='bg-transparent text-[24px] text-copy mb-2 border-b w-100 mx-auto block text-center placeholder-copy/80'
						/>
					)}
				/>
			))}
			<AppButton
				htmlType='submit'
				disabled={isSubmitting}
				appVariant='primary'
				className='uppercase w-full text-[24px]! mt-10 py-6!'
			>
				Жду звонка
			</AppButton>
			<div>
				<p className='text-center max-w-100 mx-auto mt-10'>
					Нажимая на кнопку “жду звонка”, вы соглашаетесь с <a href='/privacy-policy' className='text-copy underline'>политикой конфиденциальности</a> и <a className='text-copy underline' href="/data-processing-policy">политикой обработки персональных данных</a>.
				</p>
			</div>
		</form>
	)
}
