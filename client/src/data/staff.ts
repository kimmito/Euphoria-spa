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
		photo: 'src/assets/images/team/master-01.png'
	},
	{
		id: '2',
		name: 'Светлана Иванова',
		position: 'Мастер педикюра',
		photo: 'src/assets/images/team/master-02.png'
	},
	{
		id: '3',
		name: 'Екатерина Смирнова',
		position: 'Мастер наращивания ногтей',
		photo: 'src/assets/images/team/master-03.png'
	},
	{
		id: '4',
		name: 'Мария Кузнецова',
		position: 'Мастер дизайна ногтей',
		photo: 'src/assets/images/team/master-04.png'
	}
]
