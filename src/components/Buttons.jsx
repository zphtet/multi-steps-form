import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/Context';
const Buttons = () => {
	const { formNum, next, dispatch } = useContext(Context);

	const nextForm = () => {
		dispatch({
			type: 'SET_FORM_NUM',
			payload: formNum + 1,
		});
	};

	const resetForm = () => {
		dispatch({
			type: 'SET_FORM_NUM',
			payload: 1,
		});
	};

	const prevForm = () => {
		dispatch({
			type: 'SET_FORM_NUM',
			payload: formNum - 1,
		});
	};

	return (
		<div className="  w-full flex items-center justify-between mb-12 mt-10 mobile_l:mt-6 mobile_l:mb-0">
			<button
				onClick={formNum > 4 ? resetForm : prevForm}
				className={`underline text-gray-600 ${formNum <= 1 && 'opacity-0'}`}
				disabled={formNum <= 1 ? true : false}
			>
				Go Back
			</button>

			{formNum < 5 && (
				<button
					onClick={nextForm}
					className={`text-white py-2 px-6 mobile_l:text-sm mobile_l:px-4 rounded-md bg-purple-600 hover:opacity-50 ${
						!next && 'opacity-50 hover:opacity-50'
					}  `}
					disabled={next ? false : true}
				>
					{formNum === 4 ? 'Confirm' : 'Next Step'}
				</button>
			)}
		</div>
	);
};

export default Buttons;
