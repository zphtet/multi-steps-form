import React, { useContext, useState } from 'react';
import toggleOn from '../assets/images/toggle-on.svg';
import toggleOff from '../assets/images/toggle-off.svg';
import { Context } from '../context/Context';

const Toggle = () => {
	const { form2, dispatch } = useContext(Context);
	const { changeType } = form2;
	const onClickHandler = () => {
		dispatch({
			type: 'SET_FORM_2',
			payload: {
				billingType: !changeType ? 'yr' : 'mo',
				changeType: !changeType,
			},
		});
	};
	return (
		<div
			className="w-full mt-10 mobile_l:mt-6 bg-orange-50 flex gap-6 items-center justify-center
			
		"
		>
			<p
				className={`mobile_l:text-xs ${
					changeType && 'opacity-60 line-through'
				}`}
			>
				Monthly
			</p>

			<button>
				<img
					src={changeType ? toggleOn : toggleOff}
					className="w-12 h-auto cursor-pointer"
					alt="Toggle "
					onClick={onClickHandler}
				/>
			</button>

			<p
				className={`mobile_l:text-xs ${
					!changeType && 'opacity-60 line-through'
				}`}
			>
				Yearly
			</p>
		</div>
	);
};

export default Toggle;
