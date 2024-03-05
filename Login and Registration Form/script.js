const signin = document.querySelector('.signin');
const signup = document.querySelector('.signup');
const userName = document.getElementById('name');
const text = document.querySelector('p');
const title = document.querySelector('h1');

signin.addEventListener('click',()=>{
    signin.style.background = '#fc6e10';
    signin.style.color ='#ffff';
    signup.style.background = '#eaeaea';
    signup.style.color ='#555';
    userName.style.display = 'none';
    text.style.display ='none';
    title.innerHTML = 'Sign In';
});

signup.addEventListener('click',()=>{
    signin.style.background = '#eaeaea';
    signin.style.color ='#555';
    signup.style.background = '#fc6e10';
    signup.style.color ='#ffff';
    userName.style.display = 'flex';
    text.style.display ='block';
    title.innerHTML = 'Sign Up';
});
