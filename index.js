var submitBtn = document.getElementById('submitBtn');
var email = document.getElementById('email');
var passw = document.getElementById('password')
const signInPage = document.getElementById('signIn')
var logOutBtn = document.getElementById('signOut')

function removeLogInBtn() {
  if (localStorage.getItem('email') && localStorage.getItem('password')) {
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
removeLogInBtn()

function store() {
  //adding value to local storage
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', passw.value);
  window.location.href = '/pages/user.html';
  }
  submitBtn.addEventListener('click', store);
  
  


