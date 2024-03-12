const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const images = document.querySelectorAll('.main-background ul img');


let n = 0;

function slide (){
 for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
 }
 images[n].style.display = 'block';
};

previous.addEventListener('click', (e) =>{
     e.preventDefault();
     if(n > 0){
       n = n-1;
     }else {
        n = images.length-1;
     }
     slide();
});

next.addEventListener('click', (e) => {
    e.preventDefault();
    if(n < images.length-1){
        n = n+1;
    }else {
        n = 0;
    }
    slide();
});

const wheelEvent = document.querySelectorAll('.products-row');
for (const element of wheelEvent) {
    element.addEventListener('wheel', (e)=>{
       e.preventDefault();
       element.scrollLeft += e.deltaY;
    });
};