export const FilterListItem = ({
	status,
	icon: Icon,
	label,
	totalCount,
	active,
	setActive,
}: {
	status: string;
	icon: any;
	label: string;
	totalCount: number;
	active: string;
	setActive: any;
}) => {
	const isActive = active === status;
	const bgColor = isActive
		? 'bg-[#FFECE5] border-[#FCD2C2] text-[#F56630]'
		: 'bg-[#F0F2F5] border-[#D0D5DD]';
	const badgeColor = isActive ? 'bg-[#F56630] text-white' : 'bg-[#E4E7EC] text-[#344054]';

	return (
		<li
			className={`cursor-pointer flex w-[170px] justify-center items-center gap-2 py-4 rounded-lg border ${bgColor}`}
			onClick={() => setActive(status)}
		>
			<Icon />
			<span className={`text-[#000000]`}>{label}</span>
			<span
				className={`flex items-center justify-center rounded-full px-4 py-2 w-5 h-5 ${badgeColor}`}
			>
				{isActive ? totalCount : 0}
			</span>
		</li>
	);
};
