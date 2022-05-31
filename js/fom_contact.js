var n = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var mssg = document.getElementById("mssg");
var error = document.getElementById("error");

function SendForm(){
    var mssgsError = [];
    let error404 = false;
    error.style.color = "red";

    if(n.value === "" || n.value === null)
    {
        mssgsError.push("Ingresa tu nombre");
        error404 = true
    }
    if(email.value === "" || email.value === null)
    {
        mssgsError.push("Ingresa tu e-mail");
        error404 = true 
    }
    if(subject.value < 1)
    {
        mssgsError.push("Elija un motivo");
        error404 = true 
    }
    if(mssg.value === "" || mssg.value === null)
    {
        mssgsError.push("Ingresa tu mensaje"); 
        error404 = true
    }

    if(error404 == false)
    {
        mssgsError.push("Mensaje Enviado");
        error.style.color = "green";

        console.log(n.value + "/" + email.value + "/" + subject.value + "/" + mssg.value);
    }

    error.innerHTML = mssgsError.join(', ');

    return false;
}