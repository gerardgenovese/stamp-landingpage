//eyeball for password logic. click to show click to hide Font awesome must be uncommented in about.html to work
document.querySelector(".eye-open").style.display = "none";

function showPassword(){
  document.querySelector(".eye-closed").style.display = "none";
  document.querySelector(".eye-open").style.display = "block";

  showHide();
};

function hidePassword(){
  document.querySelector(".eye-closed").style.display = "block";
  document.querySelector(".eye-open").style.display = "none";

  showHide();
};

function showHide(){
  const password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};


//target element and prevent scrolling for landing page. 
const fixed = document.querySelector('.c2a');
fixed.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, false);

input.onfocus = function () {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
}

