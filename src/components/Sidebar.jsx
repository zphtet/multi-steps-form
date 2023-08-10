import React from 'react';
import Step from './Step';
import { useContext } from 'react';
import { Context } from '../context/Context';
const Sidebar = () => {
	const { formNum } = useContext(Context);
	return (
		<div className="bg-sidebar mobile_l:bg-side_m bg-cover bg-center basis-[270px] tablet:basis-52 py-10 pl-10 tablet:pl-5 pr-4 max-w-[270px] rounded-xl mobile_l:basis-auto mobile_l:max-w-full  mobile_l:flex mobile_l:items-start mobile_l:justify-center mobile_l:gap-4 mobile_l:h-[200px] mobile_l:rounded-none">
			<Step stepNum={1} formNum={formNum} text="your info" />
			<Step stepNum={2} formNum={formNum} text="Select plan" />
			<Step stepNum={3} formNum={formNum} text="add-ons" />
			<Step stepNum={4} formNum={formNum} text="summary" />
		</div>
	);
};

export default Sidebar;
