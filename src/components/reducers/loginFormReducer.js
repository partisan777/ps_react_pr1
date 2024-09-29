export const INITIAL_STATE = {
	isValid: {
		login: true
	},
	values: {
		login: ''
	},
	isFormReadyToSubmit: false
};


export function SigninFormReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE':
		return { ...state, values: { ...state.values, ...action.payload}};
	case 'CLEAR':
		return { ...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT' : {
		const loginValidity = state.values.login?.trim().length;};
		return {
			...state,
			isValid: {
				login: loginValidity
			},
			isFormReadyToSubmit: loginValidity
		};
	}
};
