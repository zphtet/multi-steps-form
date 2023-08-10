import React, { useContext, useEffect } from 'react';
import Toggle from './Toggle';
import PlanCard from './PlanCard';
import planData from '../model/planData';
import { Context } from '../context/Context';

const Form2 = () => {
	const { form2, dispatch } = useContext(Context);
	const { billingType } = form2;

	const cardData =
		billingType === 'yr'
			? planData.map((plan) => ({
					...plan,
					price: plan.price * (12 - plan.freeMonthPerYear),
					planType: 'yr',
			  }))
			: planData;

	// Use Effect
	useEffect(() => {
		dispatch({ type: 'SET_NEXT', payload: true });
	}, []);
	return (
		<div>
			<h5 className="form-title">Select your plan</h5>
			<p className="form-info-title">
				You have the option of monthly or yearly billing.
			</p>

			<div className="plan-group flex gap-4 mobile_l:gap-2 mobile_l:flex-col mobile_l:mt-6">
				{cardData.map((plan) => {
					return <PlanCard data={plan} key={plan.title} />;
				})}
			</div>

			<Toggle />
		</div>
	);
};

export default Form2;
