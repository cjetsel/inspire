import ImageService from "./image-service.js";

const _is = new ImageService();

function _drawImg() {
  document.getElementById('bg-image').style.backgroundImage = `radial-gradient(circle, rgba(242,99,99,0.37888658881521353) 0%, rgba(187,87,87,0.7290266448376226) 27%, rgba(71,20,20,1) 66%, rgba(0,0,0,1) 88%, rgba(0,0,0,1) 100%), url("${_is.Image.url}")`
}

export default class ImageController {
  constructor() {
    _is.addSubscribers('apiImages', _drawImg);
    _is.getImageData();
  }

}

