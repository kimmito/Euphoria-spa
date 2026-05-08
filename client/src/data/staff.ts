import master01 from '@/assets/images/team/master-01.png'
import master02 from '@/assets/images/team/master-02.png'
import master03 from '@/assets/images/team/master-03.png'
import master04 from '@/assets/images/team/master-04.png'

export type Staff = {
	id: string
	name: string
	position: string
	photo: string
}
export const staff: Staff[] = [
	{
		id: '1',
		name: 'Анна Петрова',
		position: 'Мастер маникюра',
		photo: master01
	},
	{
		id: '2',
		name: 'Светлана Иванова',
		position: 'Мастер педикюра',
		photo: master02
	},
	{
		id: '3',
		name: 'Екатерина Смирнова',
		position: 'Мастер наращивания ногтей',
		photo: master03
	},
	{
		id: '4',
		name: 'Мария Кузнецова',
		position: 'Мастер дизайна ногтей',
		photo: master04
	}
]
