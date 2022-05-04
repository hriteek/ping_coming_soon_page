const inputContainer = document.querySelector('.input-container');
const emailInput = document.getElementById('email');
const button = document.getElementById('submit');
const feedback = document.getElementById('feedback');

button.addEventListener('click', function (e) {
  e.preventDefault();
  const email = emailInput.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email)) {
    emailInput.placeholder = 'Your email address...';
    feedback.innerHTML = '';
  } else {
    emailInput.value = '';
    emailInput.placeholder = 'example@email/com';
    feedback.innerHTML = 'Please provide a valid email address';
    feedback.style.marginBlockStart = '.6em';
    emailInput.style.borderColor = 'var(--light-red)';
    // feedback.style.order = '3';
    inputContainer.style.flexWrap = 'wrap';
  }
});

emailInput.addEventListener('input', function (e) {
  console.log('called');
  feedback.innerHTML = '';
  emailInput.style.borderColor = 'var(--pale-blue)';
});
