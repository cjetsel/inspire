import Image from "../../models/image.js";

// // @ts-ignore
// const imgApi = axios.create({
// 	// baseURL: '//bcw-sandbox.herokuapp.com/api/images',
// 	baseURL: 'http://www.splashbase.co/api/v1/images/',
// 	timeout: 3000
// });

let imgApi = axios.create({
	baseURL: 'https://source.unsplash.com/random?roses',
	timeout: 3000
})



let _state = {
	apiImages: []
}

let _subscribers = {
	apiImages: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}



export default class ImageService {
	get Image() {
		return _state.apiImages
	}

	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getImageData() {
		imgApi.get()
			.then(res => {
				let imgData = new Image(res.config)
				_setState('apiImages', imgData)
			})
			.catch(err => {
				console.error(err)
			})
	}
}



