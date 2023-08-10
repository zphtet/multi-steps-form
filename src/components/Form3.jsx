import React, { useContext, useEffect } from 'react';
import CheckItem from './CheckItem';
import { Context } from '../context/Context';
import addonData from '../model/addonData';

const Form3 = () => {
	return (
		<div>
			<h5 className="form-title">Pick Add-ons</h5>
			<p className="form-info-title">
				Add-ons help enchance your gaming expreience.
			</p>
			<div className="mobile_l:mt-6 mb-6 mobile_l:mb-2">
				{addonData.map((data) => (
					<CheckItem key={data.title} {...data} />
				))}
		
			</div>
		</div>
	);
};

export default Form3;
