// var userName=document.getElementById('userName')
// var password=document.getElementById('password')


// document.getElementById("login-form").addEventListener("submit",function(e){
//     e.preventDefault()
//     Login()

// })
// var arryOfLoginData=[]
// if(localStorage.getItem('login')){
//     arryOfRegiserData=JSON.parse(localStorage.getItem('login'))
//     Login()
// }
// function Login(){
//     var LoginData={
//         userName:userName.value,
//         password:password.value

//     }
//     if(LoginData)
//     localStorage.setItem('login', JSON.stringify(arryOfLoginData));
    
// }
// JavaScript for login
// document.getElementById("login-form").addEventListener("submit", function(e) {
//     e.preventDefault();
//     login();
// });

function login() {
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;

    // Retrieve registration data from localStorage
    var arryOfRegisterData = JSON.parse(localStorage.getItem('register'));

    // Check if user exists and password matches
    var user = arryOfRegisterData.find(user => user.userName === userName && user.password === password);
    
    if (user) {
        // Redirect to articles page on successful login
        window.location.href = '../pages/articles.html';
    } else {
        // Show an error message if login fails
        alert('Invalid username or password.');
    }
}
