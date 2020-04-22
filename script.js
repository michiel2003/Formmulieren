function test(){
    var confirm = true;
    if(document.getElementById("fname").value ==""){
        window.alert("please give a first name");
        var confirm = false;
    }
    if(document.getElementById("lname").value == ""){
        window.alert("please give a last name");$
        var confirm = false;
    }
    var isok = false;
    if(document.getElementById("email").value.includes('@')){
        isok = true;
    }
    if(isok == false){
        window.alert("invalid e-mail");
        var confirm = false;
    }
    var date = new Date;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    console.log(day+"-"+ month+ "-" +year);
    var bdayok = false;
    if(document.getElementById("bdayyear").value < year){
        bdayok = true;
    }

    if(bdayok == false){
        console.log("cycle month")
        if(document.getElementById("bdayyear").value == year){
            if(document.getElementById("bdaymonth").value < month){
                bdayok = true;
            }
        }
    }

    if(bdayok == false){
        console.log(document.getElementById("bdaymonth").value)
        console.log(document.getElementById("bdayday") <= day)
        console.log(day)
        console.log(document.getElementById("bdaymonth").value == month)
        console.log("cycle day")
        if(document.getElementById("bdayyear").value == year){
            console.log("cycle day-year")
            if(document.getElementById("bdaymonth").value == month){
                console.log("cycle day-month")
                if(document.getElementById("bdayday") <= day){
                    console.log("cycle day-day");
                    bdayok = true;
                }
            }
        }
    }

    if(bdayok == false){
        window.alert("birthday cannot be in the future")
        var confirm = false;
    }

    var appok = false;
    if(document.getElementById("appyear").value > year){
        appok = true;
    }

    if(appok == false){
        console.log("cycle month")
        if(document.getElementById("appyear").value == year){
            if(document.getElementById("appmonth").value > month){
                appok = true;
            }
        }
    }

    if(appok == false){
        console.log(document.getElementById("appmonth").value)
        console.log(document.getElementById("appday") <= day)
        console.log(day)
        console.log(document.getElementById("appmonth").value == month)
        console.log("cycle day")
        if(document.getElementById("appyear").value == year){
            console.log("cycle day-year")
            if(document.getElementById("appmonth").value == month){
                console.log("cycle day-month")
                if(document.getElementById("appday") <= day){
                    console.log("cycle day-day");
                    appok = true;
                }
            }
        }
    }

    if(appok == false){
        window.alert("appointments must be in the future")
        var confirm = false;
    }

    if(document.getElementById("hour").value < 6 || document.getElementById("hour").value > 21){
        window.alert("time must be between 6h and 21h");
        var confirm = false;
    }

    if(confirm == true){
        document.getElementById("name").innerHTML = document.getElementById("fname").value + " " + document.getElementById("lname").value;
        document.getElementById("e-mail").innerHTML = document.getElementById("email").value;
        document.getElementById("bdayfull").innerHTML = document.getElementById("bdayday").value + "-" + document.getElementById("bdaymonth").value + "-" + document.getElementById("bdayyear").value;
        document.getElementById("appdate").innerHTML = document.getElementById("appday").value + "-" + document.getElementById("appmonth").value + "-" + document.getElementById("appyear").value;
        document.getElementById("apphourhour").innerHTML = document.getElementById("hour").value
    }
}