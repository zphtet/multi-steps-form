import React, { useContext, useEffect } from 'react';
import thankIcon from '../assets/images/icon-thank-you.svg';
import { Context } from '../context/Context';
const ThankYou = () => {
	const { dispatch } = useContext(Context);
	useEffect(() => {
		dispatch({
			type: 'SET_DEFAULT',
		});
	}, []);
	return (
		<div className="flex-1  flex justify-center items-center">
			<div className="  text-center flex-1">
				<img
					src={thankIcon}
					alt="thank you icon"
					className="mx-auto w-[70px]"
				/>
				<h5 className="font-extrabold text-3xl mt-4">Thank You</h5>
				<p className="text-gray-500 ">
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support please feel free to email us at
					support@gamil.com
				</p>
			</div>
		</div>
	);
};

export default ThankYou;
