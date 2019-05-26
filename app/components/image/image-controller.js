import ImageService from "./image-service.js";

const _is = new ImageService()

function _drawImg() {
  document.getElementById('bg-image').style.backgroundImage = `radial-gradient(circle, rgba(255,80,100,0.12958686892725846) 1%, rgba(255,80,100,0.28644961402529767) 21%, rgba(145,50,61,0.5749650201877626) 47%, rgba(94,30,37,0.8802871490393032) 73%, rgba(60,18,23,1) 100%), url("${_is.Image.url}")`
}
export default class ImageController {
  constructor() {
    _is.addSubscribers('apiImages', _drawImg);
    _is.getImageData();
  }

}

