 let id= (id) => document.getElementById(id);
 let classes =(classes) => document.getElementsByClassName(classes);


let username = id("username"),
    email = id("email"),
    password = id("password")
    form=id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {    
    e.preventDefault();
    console.log(e,"event");

    engine(username,0 ,"username cannot be blank");
    engine(email,1 ,"email cannot be blank");
    engine(password,2 ,"password cannot be blank");
});

let engine =(id,serial,message) => {
    if(id.value.trim()=== ""){
        errorMsg[serial].innerHTML= message;


        id.style.border="2px solid red";

        //icon
        failureIcon[serial].style.opacity ="1";
        successIcon[serial].style.opacity="0";
    } 
    else{
        errorMsg[serial].innerHTML="";
        id.style.border="2px solid green";

        //icon
        failureIcon[serial].style.opacity ="0";
        successIcon[serial].style.opacity="1";

}};


// let engine =(id,serial,message) => {
//     if(id.value === ""){
//         errorMsg[serial].innerHTML=message;
//         failureIcon[serial].Style.opacity ="1";
//         successIcon[serial].Style.opacity ="0";
//       } else{
//          errorMsg[serial].innerHTML ="";
//          failureIcon[serial].Style.opacity ="0";
//          successIcon[serial].Style.opacity ="1";
//       }
// };


    