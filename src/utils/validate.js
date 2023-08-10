

export function validateEmail(inputText) {
	var mailFormat = /\S+@\S+\.\S+/;
	if (inputText.match(mailFormat)) {
		return true;
	} else {
		return false;
	}
}

export function validatePhoneNumber(phoneNumber) {
	var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (regex.test(phoneNumber)) {
		return true;
	} else {
		return false;
	}
}

export const checkValidFormOne = (
	{ name, email, phone },
	validator1,
	validator2,
	dispatch
) => {
	if (name && validator1(email) && validator2(phone)) {
		dispatch({
			type: 'SET_FORM_1',
			payload: {
				name,
				email,
				phone,
			},
		});
		return true;
	}
	return false;
};
