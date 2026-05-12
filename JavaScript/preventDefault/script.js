document.getElementById('form').addEventListener('submit', (event) => {
event.preventDefault();
const fn = document.getElementById('fullname').value;
const em = document.getElementById('email').value;
// const ps = document.getElementById('password').value;

const obj = {
    fullname :fn,
    email:em,
    // password:ps
} ;
console.log(obj);

 document.getElementById('fullname').value = "";
document.getElementById('email').value = "";
// document.getElementById('fullname').value = "";


})

document.getElementById('submit').addEventListener('submit', (event) => {
event.preventDefault();
})