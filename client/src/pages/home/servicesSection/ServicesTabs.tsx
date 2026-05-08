import { AppButton } from '@/components/ui/AppButton'

import type { Category } from '@/types/category.type'

type ServicesTabsProps = {
	ref: React.Ref<HTMLDivElement>
	categories: Category[]
	selectedCategory: string | null
	onSelectCategory: (categoryId: string) => void
	buttonRefs: React.RefObject<Record<string, HTMLDivElement | null>>
}

export const ServicesTabs = ({
	ref,
	categories,
	selectedCategory,
	onSelectCategory,
	buttonRefs
}: ServicesTabsProps) => {
	return (
		<div
			ref={ref}
			role='tablist'
			aria-label='Выбор услуги'
			className='w-full mx-auto flex justify-between mb-10 gap-4'
		>
			{categories.map(category => (
				<div
					key={category.id}
					ref={node => {
						buttonRefs.current[category.id] = node
					}}
				>
					<AppButton
						role='tab'
						aria-selected={selectedCategory === category.id}
						onClick={() => onSelectCategory(category.id)}
						appVariant={selectedCategory === category.id ? 'active' : 'primary'}
						className='px-20 text-head py-6 text-2xl! hover:bg-transparent hover:text-accent! hover:border-accent hover:opacity-75'
					>
						{category.name}
					</AppButton>
				</div>
			))}
		</div>
	)
}
