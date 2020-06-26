// email validation
function emailValidation(){
    var email = document.getElementById("email").value ;
    let format =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

   if (format.test(email)) {
        return true;
    }
    else{
        alert("Expected abc@mail.com or abc@mail.co.in");
        return false;
    }
}
// Password validation
function passTest(){
    var password = document.getElementById("password").value ;
    let passFormat =/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    if((passFormat.test(password))){
        // alert("valid") ;
        return true;
    }
    else{
        alert("Password must contain Minimum 8 Characters with at least one number , one uppercase and one lowercase each");
        return false;
    }
}