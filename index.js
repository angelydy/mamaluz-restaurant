var submitBtn = document.getElementById('submitBtn');
var email = document.getElementById('email');
var passw = document.getElementById('password')
const signInPage = document.getElementById('signIn')

function removeLogInBtn() {
  if (localStorage.getItem('email') !== null && localStorage.getItem('password') !== null) {
    //remove sign in button in navbar
    var signIn = document.getElementById('login');
    signIn.style.display = 'none';

    //creates and add profile button to navbar of all html pages
    var profile = document.createElement('li');
    profile.innerHTML = '<a href="/pages/user.html">Profile</a>';
    profile.className = 'navlink';
    var navbar = document.getElementById('navbar');
    navbar.appendChild(profile);
  }
}
removeLogInBtn();

function store(event) {
  event.preventDefault();

  localStorage.setItem('email', email.value);
  localStorage.setItem('password', passw.value);
  var useremail = localStorage.getItem('email');
  var userpass = localStorage.getItem('password');
  
  if (email.value && passw.value) {
    if (useremail == email.value && userpass == passw.value) {
      setTimeout(function() {
        window.location.href = '/userProfile/user.html';
        }, 1000);
      }
    }
  }
  submitBtn.addEventListener('click', store);
