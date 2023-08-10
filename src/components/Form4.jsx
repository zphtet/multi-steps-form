import React, { useContext } from 'react';
import { Context } from '../context/Context';
import planData from '../model/planData';
import addonData from '../model/addonData';
const Form4 = () => {
	const { form2, form3, dispatch } = useContext(Context);

	const ChosenPlan = planData.filter(
		(plan) => plan.title.toLowerCase() === form2.plan
	);

	const { title, price, freeMonthPerYear } = ChosenPlan[0];
	const finalPrice =
		form2.billingType === 'mo' ? price : price * (12 - freeMonthPerYear);

	const addOnServices = addonData.filter(
		(addon) => form3.indexOf(addon.title) > -1
	);

	const addOnPriceArr = addOnServices.map((addon) => {
		if (form2.billingType === 'mo') {
			return {
				...addon,
				type: 'mo',
			};
		}
		return {
			...addon,
			price: addon.price * (12 - freeMonthPerYear),
			type: 'yr',
		};
	});

	const totalAddOnPrice = addOnPriceArr.reduce((acc, val) => {
		return acc + val.price;
	}, 0);

	const changeToFormTwo = () => {
		dispatch({
			type: 'SET_FORM_NUM',
			payload: 2,
		});
	};

	return (
		<div>
			<h5 className="form-title">Finishing Up</h5>
			<p className="form-info-title">
				Double-check everything looks OK before confirming.
			</p>

			<div className="summary mt-10 mobile_l:mt-6 bg-violet-50 py-8 px-4 rounded-lg">
				<div className="flex items-center justify-between">
					<p>
						{`${title}(${form2.billingType === 'mo' ? 'monthly' : 'yearly'})`}
						<span
							onClick={changeToFormTwo}
							className="underline block text-gray-500 text-sm cursor-pointer"
						>
							change
						</span>
					</p>
					<p>{`$${finalPrice}/${form2.billingType}`}</p>
				</div>

				<hr className="my-4" />

				{addOnPriceArr.map(({ title, price, type }) => {
					return (
						<div key={title} className="flex items-center justify-between">
							<p className="text-gray-600 text-sm">{title.toLowerCase()}</p>
							<p>{`$${price}/${type}`}</p>
						</div>
					);
				})}

			
			</div>
			<div className="flex items-center justify-between mt-8">
				<p className="text-gray-600 text-sm">Total(per month)</p>
				<p className="text-blue-500 font-extrabold">{`$${
					totalAddOnPrice + finalPrice
				}/${form2.billingType}`}</p>
			</div>
		</div>
	);
};

export default Form4;
