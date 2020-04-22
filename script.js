function test(){
    if(document.getElementById("fname").value ==""){
        window.alert("please give a first name");
    }
    if(document.getElementById("lname").value == ""){
        window.alert("please give a last name");
    }

    var email = document.getElementById("email").value;
    var isok = false;
    for(i = 0; i < email.lenght; i++){
        if(email.chatAt(i) == '@'){
            isok =  true;
        }
    }
    if(isok == false){
        window.alert("invalid e-mail address");
    }
}