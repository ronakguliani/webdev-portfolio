let prevScrollpos = window.pageYOffset;
let submit = document.querySelector('#submit');
let userName = document.querySelector('#nameInput');
let email = document.querySelector('#emailInput');
let message = document.querySelector('#messageInput');

submit.addEventListener('click', handleClick);

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').style.top = '0';
  } else {
    document.querySelector('nav').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

function handleClick(event) {
  event.preventDefault();
  if (!userName.value || !email.value || !message.value) {
    console.warn('You must complete all fields to submit this form');
    return;
  }
  const submissionDate = new Date().toLocaleString();
  console.log('===== Form Submission =====');
  console.log('Name: ' + userName.value);
  console.log('Email: ' + email.value);
  console.log('Message: ' + message.value);
  console.log('Date Submitted: ' + submissionDate);
}
