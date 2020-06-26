

// console.log("name" + inpDta);
//    var inpDta = document.getElementsByTagName("input").value ;
//    console.log(inpDta);
function nameCheck(){
    // console.log("name" + inpDta.value);
    var name= document.getElementById("userName");
    if((name.value).length<5){
        alert("Name too Short!");
        return false;
    }
    else
        return true;
}
// phone validation
function phoneValid(){
    var phNo = document.getElementById("phoneNo").value ;
    let formatPhNo =/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if((formatPhNo.test(phNo))){
        // alert("valid") ;
        return true;
    }
    else{
        alert("Accepted phone number formats xxx xxx xxxx,xxx-xxx-xxxx,xxx.xxx.xxxx with 10 numbers");
        return false;
    }
}
// Password validation
function passTest(){
    var password = document.getElementById("inputPassword4").value ;
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
//confirm password
function confirmPass(){
    var password1 = document.getElementById("inputPassword4").value ;
    var password2 = document.getElementById("confirmPassword").value ;
    if(password1===password2){
        // alert("valid") ;
        return true;
    }
    else{
        alert("passwords does'nt match!");
        return false;
    }
}
//Pi Coden check
function pinCheck(){
    var pin = document.getElementById("inputPin").value ;
    if(pin.length==6){
        // alert("valid") ;
        return true;
    }
    else{
        alert("pin code should be 6 digits");
        return false;
    }
}