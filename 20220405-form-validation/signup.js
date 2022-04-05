const form = document.getElementById('signup__form');
const username = document.getElementById('signup__username');
const errorMsg = document.getElementById('username-error');

form.addEventListener('submit', (event) => {
  // work out if the form is valid
  console.dir(username);
  if (/^[a-z0-9]+$/i.test(username.value)) {
    errorMsg.innerText = "";
  } else {
    errorMsg.innerText = "Invalid username; only letters and numbers allowed please";
    event.preventDefault();
  }
});
