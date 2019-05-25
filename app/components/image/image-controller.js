import ImageService from "./image-service.js";

const _is = new ImageService()

function _drawImg() {
  document.getElementById('bg-image').style.backgroundImage = `radial-gradient(circle, rgba(0, 0, 0, 0.7) 1%, rgba(0, 0, 0, 0.75) 21%, rgba(0, 0, 0, 0.8) 47%, rgba(0, 0, 0, 0.85) 73%, rgb(0, 0, 0) 100%), url("${_is.Image.url}")`
}

export default class ImageController {
  constructor() {
    _is.addSubscribers('apiImages', _drawImg);
    _is.getImageData();
  }

}

