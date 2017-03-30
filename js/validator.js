function validatename(field) 
{
    var errorDiv = field.nextElementSibling;
    var maintainplus = '';
    var numval = field.value;
    var curphonevar;
    var pattern = /[\\0-9!"£$%^&\-\)\(*+_={};:'@#~,.Š\/<>\?|`¬\]\[]/g;
    if(pattern.test(numval)){
        errorDiv.innerHTML = "Invalid character found and replaced (only alphabets allowed)";
    } else {
        errorDiv.innerHTML = "";
    }
    curphonevar = numval.replace(/[\\0-9!"£$%^&\-\)\(*+_={};:'@#~,.Š\/<>\?|`¬\]\[]/g,'');
    field.value = maintainplus + curphonevar;
    var maintainplus = '';
    field.focus;
}
function validatepassword(field) 
{
    var errorDiv = field.nextElementSibling;
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(pattern.test(field.value)){
        errorDiv.innerHTML = "";
    } else {
        errorDiv.innerHTML = "Invalid password ..<br>Password should be alpha-numeric with one special chracter and minimum 8 characters";
    }
    field.focus;
}
function isEmpty(field) {
    var errorDiv = field.nextElementSibling;
    if (field.value == '') {
        errorDiv.innerHTML = "Please fill in the details";
    } else {
        errorDiv.innerHTML = "";
    }
}

function isPrevEmpty(field){
    var fields = document.getElementsByClassName("form-input");

    for(var i=0; i < fields.length ; i++){
        if(fields[i] == field){
            for(var j = 0; j < i; j++){
                var errorDiv = fields[j].nextElementSibling;
                if (fields[j].value == '') {
                    errorDiv.innerHTML = "Please fill in the details";
                }
            }
        }
    }
}

function validatesignup(form){
    if(form.firstName.value == ""){
        alert( "Please provide your firstname!" );
        form.firstName.focus() ;
        return false;
    }
    if(form.lastName.value == ""){
        alert( "Please provide your lastname!" );
        form.lastName.focus() ;
        return false;
    }
    if(form.email.value == ""){
        alert( "Please provide your email!" );
        form.email.focus() ;
        return false;
    }
    if(form.password.value == ""){
        alert( "Please provide your password!" );
        form.password.focus() ;
        return false;
    }
    return true;
}

function validatelogin(form){
    
    if(form.email.value == ""){
        alert( "Please provide your email!" );
        form.email.focus() ;
        return false;
    }
    if(form.password.value == ""){
        alert( "Please provide your password!" );
        form.password.focus() ;
        return false;
    }
    return true;
}