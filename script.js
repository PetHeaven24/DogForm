const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', e =>{
    if (valideinput()==false ){
        e.preventDefault();
    }
    else{
        alert('Form Submitted , Check ur email for the dates of your appointments !')
    }
})

function seterror(element,message) {
    const inputcontrol = element.parentElement
    const errordisplay = inputcontrol.querySelector('.error');
    errordisplay.innerText = message;
    
}
function setsucces(element) {
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector('.error');
    errordisplay.innerText = '';
}
function valideinput(){
    let output = true
    const namepatern = /^[a-zA-z\s]+$/;
    const phonepatern = /^[0-9]+$/;
    const emailpatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    if (!namepatern.test(first.value.trim())){
        output = false
        seterror(first,'Enter a valid name.');
    }else{
        setsucces(first);
    }
    if (!namepatern.test(last.value.trim())){
        output = false
        seterror(last,'Enter a valid name.');
    }else{
        setsucces(last);
    }
    if (!emailpatern.test(email.value.trim())){
        output = false
        seterror(email,'Enter a valid email address.');
    }else{
        setsucces(email);
    }
    if (!phonepatern.test(phone.value.trim())){
        output = false
        seterror(phone,'Enter a valid phonr number.');
    }else if(phone.value.trim().length!=10){
        output = false
        seterror(phone,'Enter a valid phone number.');
    }else{
        setsucces(phone);
    }
    return output;
    }
    