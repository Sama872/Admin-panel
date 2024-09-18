var userName = document.getElementById("userName");
var password = document.getElementById("password");


var registrationArray = [];
if (localStorage.getItem("allUsers")) {
    registrationArray = JSON.parse(localStorage.getItem("allUsers"));
  }
function registration() {
  if (userName.value === "" || password.value === "") {
    alert("Please enter a valid username and password.");
    return;
  }
  var findUser = registrationArray.find((user) => user.name === userName.value);
  if (findUser) {
    alert("Username already Exist");
    return;
  }
  var registrationData = {
    name: userName.value,
    pass: password.value,
  };
  registrationArray.push(registrationData);
  localStorage.setItem("allUsers", JSON.stringify(registrationArray));
  window.location.href = "../pages/login.html";
  console.log(registrationArray);
}

var logedName = document.getElementById("logedName");
var logedpassword = document.getElementById("logedPass");

function Login() {
    if (logedName.value === "" || logedpassword.value === "") {
        alert("Please enter a valid username and password.");
        return;
      }
  var logedData = {
    name: logedName.value,
    pass: logedpassword.value,
  };
  var registeredUsers = JSON.parse(localStorage.getItem("allUsers"));
  var userFound = registeredUsers.find(
    (user) => user.name === logedData.name && user.pass === logedData.pass
  );
  if (userFound) {
    window.location.href = "../pages/articles.html";
  } else {
    window.alert("invaled user name or password");
  }
  console.log(logedData);
}

