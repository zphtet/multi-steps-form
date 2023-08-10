import { createContext, useReducer } from 'react';

const initialState = {
	formNum: 1,
	other: null,
	form1: {
		name: '',
		email: '',
		phone: '',
	},
	next: false,
	form2: {
		plan: 'arcade',
		billingType: 'mo',
		changeType: false,
	},
	form3: [],
};
const myReducer = (state, action) => {
	switch (action.type) {
		case 'SET_FORM_NUM':
			return {
				...state,
				formNum: action.payload,
			};
		case 'SET_NEXT':
			return {
				...state,
				next: action.payload,
			};
		case 'SET_FORM_1':
			return {
				...state,
				form1: action.payload,
			};
		case 'SET_FORM_2':
			return {
				...state,
				form2: {
					...state.form2,
					...action.payload,
				},
			};
		case 'SET_FORM_3':
			state.form3.push(action.payload);
			return {
				...state,
			};
		case 'REMOVE_ADDON':
			const removedArr = state.form3.filter(
				(service) => service !== action.payload
			);
			return {
				...state,
				form3: removedArr,
			};
		case 'SET_DEFAULT':
			return {
				...initialState,
				formNum: 5,
				form3: [],
			};
		default:
			return state;
	}
};
export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(myReducer, initialState);
	return (
		<Context.Provider value={{ ...state, dispatch }}>
			{children}
		</Context.Provider>
	);
};
