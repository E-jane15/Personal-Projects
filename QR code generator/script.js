 
const url = "https://quickchart.io/qr?text="
const textField = document.querySelector('#text-field');
const btn = document.querySelector('button');
const qrImage = document.querySelector('#qrcode');
const Imgspace = document.querySelector('.Imgspace');

function qrCode(){
    if (textField.value.length = 0) {
    
        setTimeout(()=>{
        textField.classList.add('error');
    },1000);
      
    setTimeout(()=>{
        textField.classList.remove('error');
    },1000);

    } else{
        qrImage.src = url + textField.value;
        Imgspace.style.display = 'block';
    }
    
}

btn.addEventListener("click",() => {
    qrCode();
});
