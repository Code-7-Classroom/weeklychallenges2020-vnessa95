//  contact
function validate(){
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error = document.getElementById('error');
  
  error.style.padding = "10px";
  
  var text;
  if(name.length < 4){
    text = "Please enter valid name";
    error.innerHTML = text;
    return false;
  }
  
  if(subject.length < 5){
    text = "Please enter correct subject";
    error.innerHTML = text;
    return false;
  }
  
  if(isNan(phone) || phone.length != 10){
    text = "Please enter valid phone number";
    error.innerHTML = text;
    return false;
  }
  
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter valid email";
    error.innerHTML = text;
    return false;
  }
  
  if(message.length <= 140){
    text = "Please enter valid message";
    error.innerHTML = text;
    return false;
  }
  
  alert("Form Submitted Successfully!")
  return true;
  }

  