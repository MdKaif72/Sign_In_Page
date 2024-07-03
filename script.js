function sign_in(){
    var name=document.getElementById('name').value;
    var pass=document.getElementById('password').value;
    var isValid=passwordValid(pass);
    if(isValid){
        document.getElementById('result').innerHTML='Sign In Successful!!! Welcome '+name+' to Our Website';
        
    }
    else{
        document.getElementById('result').innerHTML='Please enter a valid password';

    }
    return false;
}
function passwordValid(pass){
    var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(pass);
}