// Selecting the input element and get its value 
const userName = document.getElementById('userName')
const password = document.getElementById('password')

const fullName = document.getElementById('full-name')
const email = document.getElementById('email')
const image = document.getElementById('image')
const newPassword = document.getElementById('new-password')
const confirmPassword = document.getElementById('re-password')




//declared the user deatails array
users = [
    {
        "name" : "Kalana Gunasekara",
        "email" : "kalana@gmail.com",
        "profileImage" : "kalana.jpg",
        "password": "kalana@123" 
    },
    {
        "name" : "Ranil Wicramasinghe",
        "email" : "ranil@gmail.com",
        "profileImage" : "ranil.jpg",
        "password": "ranil@123" 
    }
]


// sign in function
function signIn(){
    
    // check empty valu feelds
    if(userName.value=="" || password.value==""){
        document.getElementById("err-msg").textContent = "All the inputs must be required!";
    }
    // check username is available
    else{
        const user = users.find(element => element.email==userName.value);
        if(user){
            // check password is same
            if(user.password == password.value){
                // create local storage data
                const name = user.name;
                const email = user.email;
                const profileImage = user.profileImage;
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("profileImage", profileImage);

                // change the page
                location.href = "../main-page.html";
            }
            // print password error massage
            else{
                document.getElementById("err-msg").textContent = "Wrong password, please enter the correct password!";
            }
        }
        //print username error massage
        else{
            document.getElementById("err-msg").textContent = "Wrong username, please enter the correct username!";
        }
    }
    

}


// signup function
function signUp(){
    //get image name
    var split = image.value.split('fakepath\\');
    const imageName = split[1];
    
    // check empty value feelds
    if(fullName.value=="" || email.value=="" || imageName=="" || newPassword.value=="" || confirmPassword.value==""){
        document.getElementById("err-msg").textContent = "All the inputs must be required!";
    }
    // chech password and comfirm password are same or not
    else if(newPassword.value!=confirmPassword.value){
        document.getElementById("err-msg").textContent = "Both passwords must be matched!";
    }
    else{
        users = users.concat({
            "name" : fullName.value,
            "email" : email.value,
            "profileImage" : imageName,
            "password": newPassword.value 
        })
        // location.href = "../signin-page.html";
    }

    console.log(users);
}


//pass the data to main page
const saveName = localStorage.getItem("name");
const saveEmail= localStorage.getItem("email");
const saveImage= "./images/users/"+localStorage.getItem("profileImage");

document.getElementById("name").textContent = saveName;
document.getElementById("email").textContent = saveEmail;
document.getElementById("image").innerHTML = `<img src="${saveImage}" alt="User profile picture">`;


// signout function 
function signOut(){
    location.href = "../signin-page.html";
}


// adduser function
function addUser(){
    // change the class
    document.getElementsByClassName("show")[0].classList.add("hide");
    document.getElementsByClassName("show")[0].classList.remove("show");

    document.getElementsByClassName("signup-body-container")[0].classList.add("show");
    document.getElementsByClassName("signup-body-container")[0].classList.remove("hide");
}