import { getItemFromStorage } from '@/helpers/misc';
import { useMemo } from 'react';

interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
}

export default function WelcomeBanner() {
	const user: User | null = useMemo(() => {
		const storedUser = getItemFromStorage('user');
		if (storedUser) {
			return JSON.parse(storedUser);
		}
		return null;
	}, [])

	return (
		<div className="mt-[5rem] flex-col md:flex-row px-2 flex items-center justify-center gap-4 border border-[#D0D5DD] bg-[#F7F9FC] rounded-lg py-9">
			<img src="/images/blue-mark.png" className="w-[84px] h-[81px]" />
			<div>
				<h4 className="text-[#101928] text-[18px] font-medium">
					Hi {user ? user?.firstName : 'User'}, Welcome to Fabspace
				</h4>
				<p className="text-[#101928] text-[14px]">
					My name is <span className="font-bold">Fabby</span>, your assistant all through
					your journey.
				</p>
			</div>
		</div>
	);
}
