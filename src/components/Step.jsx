import React from 'react';

const Step = ({ stepNum, text, formNum }) => {
	
	return (
		<div className="flex gap-4 items-center text-white  leading-4 mb-4 last:pb-0">
			<div
				className={`w-[32px] h-[32px] border   border-white grid place-items-center rounded-full ${
					formNum === stepNum ? 'bg-white  text-blue-600' : ''
				} `}
			>
				0{stepNum}
			</div>
			<div className="flex-1 mobile_l:hidden ">
				<span className="text-gray-300 text-xs">step {stepNum}</span>
				<p className="uppercase text-sm">{text}</p>
			</div>
		</div>
	);
};

export default Step;
