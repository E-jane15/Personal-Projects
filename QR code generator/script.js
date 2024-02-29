 
const url = "https://quickchart.io/qr?text="
const textField = document.querySelector('#text-field');
const btn = document.querySelector('button');
const qrImage = document.querySelector('#qrcode');


function qrCode(){
    qrImage.src = url + textField.value;
}

btn.addEventListener("click",() => {
    qrCode();
});
