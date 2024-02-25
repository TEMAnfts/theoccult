const ADD_WALLET = 'wallets/ADD_WALLET'

export const AddWallet = (signup) => async (dispatch) => {
	const response = await fetch(`/api/new`, {
		method: 'POST',
		body: signup
	});

	if (response.ok) {
		const user_data = await response.json();
		return { ok: true, data: user_data };
	} else {
		const error = await response.json();
		return {ok: false, error: error}
	}

}

export const GetWallets = () => async (dispatch) => {
	const response = await fetch(`/api/wallets`, {
		method: 'GET',
	});

	if (response.ok) {
		const wallet_data = await response.json();
		console.log(wallet_data)
		return wallet_data
	} else {
		const error = await response.json();
		return {ok: false, error: error}
	}

}