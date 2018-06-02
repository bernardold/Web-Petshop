// Reference: https://gist.github.com/candycode/f18ae1767b2b0aba568e

// Image Source -> Array Buffer
imageToArrayBuffer = (imgSrc, cb = () => {}) => {
    const xhr = new XMLHttpRequest();
    let arrBuff;

    xhr.open("GET", imgSrc, true);
    xhr.responseType = "arraybuffer";

    xhr.onload = (e) => {
        if (xhr.status === 200) {
            arrBuff = xhr.response;
            cb(arrBuff)
        }
    }
    xhr.send();
}

// Array Buffer -> Blob
arrayBufferToObjectUrl = (arrBuff, cb = () => {}) => {
    const arrayBufferView = new Uint8Array(arrBuff);
    const blob = new Blob([arrayBufferView], {type: 'image/jpg'});
    imageUrl = window.URL.createObjectURL(blob);
    cb(imageUrl);
}
