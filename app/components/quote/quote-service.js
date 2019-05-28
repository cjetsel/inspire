import Quote from "../../models/quote.js";

const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: []
}

let _subscribers = {
	quote: []
}

function _setState(propName, data) {
	_state[propName] = data;
	_subscribers[propName].forEach(fn => fn());
}

export default class QuoteService {
	get Quote() {
		return _state.quote;
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn);
	}

	getQuote() {
		_quoteApi.get().then(res => {
			_setState('quote', new Quote(res.data));
		})
	}
}
