
function validate(){
var username=document.getElementById("validationCustom01").value;
var email=document.getElementById("exampleInputEmail1").value;
var pass1=document.getElementById("exampleInputPassword1").value;
var pass2=document.getElementById("exampleInputPassword2").value;



/*username.addEventListener('input',function(e){

    var patt=/^[\w]{4,20}$/;
    var curvalue=e.target.value;
    var valid=patt.text(curvalue);
    console.log(curvalue);
    if(valid){
           alert("h");
    }
})*/

var usrcheck= /^[A-Za-z]{3,50}$/;
var emailcheck= /^[A-Za-z0-9_.]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
//var passcheck= /^[A-Za-z0-9_+!@#$%^&*.?]{8,16}$/;
var passcheck=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


if (usrcheck.test(username))
{
    document.getElementById("errorname").innerHTML="";

}
else{
   document.getElementById("errorname").innerHTML="Please Enter valid name";
   return false;
}
if(emailcheck.test(email))
{
 document.getElementById("erroremail").innerHTML="";
}
else{
    document.getElementById("erroremail").innerHTML="Please Enter valid email";
    return false;
}
if(pass1.match(passcheck))
{
    document.getElementById("errorpass1").innerHTML="";

}
else{
    document.getElementById("errorpass1").innerHTML="Please enter valid min 8 digit password with a uppercase lowecase and special character";
    return false;
}
if(pass1!=pass2)
{
    document.getElementById("errorpass2").innerHTML="Both the passwords do not match";
    return false;
}
alert("Successfully registered");
return true;
}
function validate1()
{
    alert("Successfully registered");
    
return true;
}

function erasefunc(){

    document.getElementById("errorname").innerHTML="";
    document.getElementById("erroremail").innerHTML="";
    document.getElementById("errorpass1").innerHTML="";
    document.getElementById("errorpass2").innerHTML="";

}