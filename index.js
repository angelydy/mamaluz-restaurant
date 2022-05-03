var submitBtn = document.getElementById('submitBtn');
var email = document.getElementById('email');
var passw = document.getElementById('password')
var logOutBtn = document.getElementById('signOut')
var isLocalSto = false;
const signInPage = document.getElementById('signIn')

function removeLogInBtn() {
  if (isLocalSto) {
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
removeLogInBtn()

function store(event) {
  event.preventDefault();
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', passw.value);
  var useremail = localStorage.getItem('email');
  var userpass = localStorage.getItem('password');
  
  if (email.value && passw.value) {
    if (useremail == email.value && userpass == passw.value) {
      isLocalSto = true;
      setTimeout(function() {
        window.location.href = '/pages/user.html';
        }, 1000);
      }
    }
  }
  submitBtn.addEventListener('click', store);

