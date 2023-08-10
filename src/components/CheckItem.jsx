import React, { useContext } from 'react';
import { Context } from '../context/Context';

const CheckItem = ({ title, info, price }) => {

	const { form2, form3, dispatch } = useContext(Context);

	const checkedState = form3.indexOf(title) > -1;

	let finalPrice = form2.billingType === 'mo' ? price : price * 10;

	const clickHandler = (e) => {
		if (e.target.checked) {
			dispatch({
				type: 'SET_FORM_3',
				payload: title,
			});
		}
		if (!e.target.checked) {
			dispatch({
				type: 'REMOVE_ADDON',
				payload: title,
			});
		}
	};
	const createId = (str) => str.split(' ')[0];

	return (
		<div className="check-group flex gap-6 p-4 mobile_l:p-2 border border-gray-200 rounded-lg mb-2 last:mb-0 ">
			<input
				type="checkbox"
				id={createId(title)}
				name={title}
				className="cursor-pointer"
				onClick={clickHandler}
				checked={checkedState ? true : false}
			/>
			<label
				htmlFor={createId(title)}
				className="flex-1 flex items-center justify-between  cursor-pointer"
			>
				<div>
					<p className="text-lg mobile_l:text-sm font-bold">{title}</p>
					<span className="text-sm  mobile_l:text-xs text-gray-500">
						{info}
					</span>
				</div>
				<p className="mobile_l:text-sm">{`$${finalPrice}/${form2.billingType}`}</p>
			</label>
		</div>
	);
};

export default CheckItem;
