import { Button } from 'antd'
import type { ButtonProps } from 'antd'
import clsx from 'clsx'

export type AppButtonVariant =
	| 'primary'
	| 'outline'
	| 'active'
	| 'icon'
	| 'link'

type AppButtonProps = ButtonProps & {
	appVariant?: AppButtonVariant
}

const baseClasses =
	'inline-flex items-center justify-center border font-body font-normal shadow-none transition-colors'

const variantClasses: Record<AppButtonVariant, string> = {
	primary:
		'border-line bg-button px-6 py-4 text-[32px] leading-none text-copy uppercase hover:bg-button-hover hover:text-button-hover-text',
	outline:
		'border-line bg-transparent px-6 py-4 text-[32px] leading-none text-copy uppercase hover:border-accent hover:text-accent',
	active:
		'border-accent bg-transparent px-6 py-4 text-[32px] leading-none text-accent uppercase',
	icon: 'h-11 w-11 border-icon bg-transparent p-0 text-copy hover:border-accent hover:text-accent',
	link: 'border-transparent bg-transparent p-0 text-base leading-none text-copy/60 hover:text-copy'
}

export const AppButton = ({
	appVariant = 'primary',
	className,
	...props
}: AppButtonProps) => {
	return (
		<Button
			{...props}
			className={clsx(baseClasses, variantClasses[appVariant], className)}
		/>
	)
}
