import { listingExchange } from "../action/actions";

const URI = 'https://api.borsaekranim.com/prices';
export function fetchExchangesAction() {
    return dispatch => {
    	fetch(URI)
		.then((res) => { return res.json() } ) 
		.then(res => {
		if(res.error) {
			throw(res.error);
		}
		console.log('inside fetch');
		console.log(res);
		return dispatch(listingExchange(res))
		})
		.catch(error => {
			dispatch(exchangeError(error))
		})
	}
}

