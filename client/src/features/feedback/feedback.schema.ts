import { z } from 'zod'

export const feedbackSchema = z.object({
	name: z.string().trim().min(2, 'Введите имя').max(50, 'Имя слишком длинное'),

	phone: z
		.string()
		.trim()
		.min(10, 'Введите корректный номер телефона')
		.max(15, 'Введите корректный номер телефона')
		.regex(/^\+?[0-9\s\-()]+$/, 'Введите корректный номер телефона')
})

export type FeedbackFormValues = z.infer<typeof feedbackSchema>
