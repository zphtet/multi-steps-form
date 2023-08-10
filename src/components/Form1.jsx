import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../context/Context';
import {
	validateEmail,
	validatePhoneNumber,
	checkValidFormOne,
} from '../utils/validate';
const Form1 = () => {
	const { form1, next, dispatch } = useContext(Context);
	const [formData, setFormData] = useState(form1);

	const { name, email, phone } = formData;
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		const isNext = checkValidFormOne(
			formData,
			validateEmail,
			validatePhoneNumber,
			dispatch
		);
		if (isNext) {
			if (next) return;
			dispatch({ type: 'SET_NEXT', payload: true });
		}
		if (!isNext) {
			if (!next) return;
			dispatch({ type: 'SET_NEXT', payload: false });
		}
	};

	return (
		<div>
			<h5 className="form-title">Personal Info</h5>
			<p className="form-info-title">
				Please provide your name , email address and phone number
			</p>
			<form>
				<div className="form-group mb-4">
					<label htmlFor="name" className="input-label">
						Name
					</label>
					<input
						type="text"
						id="name"
						className="form-input"
						placeholder="eg . stephen chow"
						name="name"
						onChange={onChangeHandler}
						value={name}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="email" className="input-label">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						placeholder="eg . stephen@gmail.com"
						className="form-input"
						name="email"
						onChange={onChangeHandler}
						value={email}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone" className="input-label">
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						placeholder="eg . 09774043568"
						className="form-input"
						name="phone"
						onChange={onChangeHandler}
						value={phone}
						pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
					/>
				</div>
			</form>
		</div>
	);
};

export default Form1;
