import React, { useContext } from 'react';
import { Context } from '../context/Context';

const PlanCard = ({ data }) => {
	const { title, icon, price, planType, freeMonthPerYear } = data;
	const { form2, dispatch } = useContext(Context);


	const active = title.toLowerCase() === form2.plan.toLowerCase();

	const onClickHandler = (e) => {
		dispatch({
			type: 'SET_FORM_2',
			payload: {
				plan: title.toLowerCase(),
			},
		});
	};

	return (
		<div
			className={`p-4 border border-gray-200 rounded-xl flex-1 cursor-pointer
			 ${active && 'border-violet-600 bg-gray-100'}
			 mobile_l:flex mobile_l:gap-4 mobile_l:py-2 mobile_l:mx-4 mobile_l:items-center
			`}
			onClick={onClickHandler}
		>
			<img src={icon} alt={title} />
			<div className="plan-info mt-6 mobile_l:mt-0">
				<h6 className="text-bold mobile_l:text-sm">{title}</h6>
				<p className="text-sm text-gray-400">{`$${price}/${planType}`}</p>
				<span
					className={`text-xs text-gray-600 ${
						planType !== 'yr' && 'line-through'
					}`}
				>
					{freeMonthPerYear}months free
				</span>
			</div>
		</div>
	);
};

export default PlanCard;
