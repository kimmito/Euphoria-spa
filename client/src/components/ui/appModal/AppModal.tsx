import { Modal } from 'antd'
import type { ModalProps } from 'antd'
import clsx from 'clsx'

import './AppModal.css'

export const AppModal = ({
	className,
	width = '33.33%',
	footer = null,
	children,
	...props
}: ModalProps) => {
	return (
		<Modal
			{...props}
			className={clsx('app-modal', className)}
			classNames={{
				wrapper: 'app-modal__wrapper',
				container: 'app-modal__container',
				body: 'app-modal__body'
			}}
			footer={footer}
			width={width}
		>
			{children}
		</Modal>
	)
}
