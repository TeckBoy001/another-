
let greeting = 'hello world'
alert(greeting)


// let age ='32';
// let pi='3.142';
// let alphabet='a';

// alert(2+3)


// let number1 = 2;
// let number2 =3;
// let sum = number1 + number2; alert(sum);


let submitButton= document.querySelector('#submit-button');

function clickListener() {
	console.log('Button clicked');
}

submitButton.addEventListener('click', clickListener);

function clickListener(event){
	event.preventDefault();


	let emailInput = document.querySelector('#email');
	let messageInput =document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	console.log('email:'emailText, 'message:', messageText);
}

function emailValidate(email) { 
  if(email.includes('@')) { 
    return true;
  } else { 
    return false;
  }
}

console.log(emailValidate('abc@xyz.cm'));

if(emailValidate(emailText) !== true) {
  console.log('The email address must contain @'); 
  return false;
} 
console.log('Thanks for your message');


