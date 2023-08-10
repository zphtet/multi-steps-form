import React from 'react';
import Sidebar from './components/Sidebar';
import Buttons from './components/Buttons';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import ThankYou from './components/ThankYou';
import { useContext } from 'react';
import { Context } from './context/Context';
const App = () => {
	const { formNum } = useContext(Context);
	return (
		<div className="w-full mx-auto my-0 bg-gray-100  h-screen  flex items-center justify-center px-5 mobile_l:px-0 mobile_l:items-start">
			<div
				className="max-w-4xl bg-white rounded-2xl mx-auto flex-1 flex mobile_l:flex-col p-4 pr-[90px] mobile_l:pr-0 tablet:pr-10 gap-x-20 tablet:gap-x-10 mobile_l:gap-0 min-h-[600px] mobile_l:min-h-0
				mobile_l:bg-transparent mobile_l:pl-0
			    mobile_l:py-0
			"
			>
				<Sidebar />
				<div
					className=" w-full flex-1 flex flex-col py-14 mobile_l:p-6
				 justify-between mobile_l:bg-white mobile_l:rounded-xl mobile_l:-mt-[100px] mobile_l:max-w-[90%] mobile_l:mx-auto"
				>
					{formNum === 1 ? (
						<Form1 />
					) : formNum === 2 ? (
						<Form2 />
					) : formNum === 3 ? (
						<Form3 />
					) : formNum === 4 ? (
						<Form4 />
					) : (
						<ThankYou />
					)}
					<Buttons />
				</div>
			</div>
		</div>
	);
};

export default App;
