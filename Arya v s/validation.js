const scriptURL = 'https://script.google.com/macros/s/AKfycbwPPpPuFqrfRffz765oGeGhc1HixcB-7a55GJlVNtSzVHkfsyoVLzC5e-VXh3cAvNzG3Q/exec '
const form = document.getElementById("form");

form.addEventListener('submit', e => validateForm())
function validateForm() {
  var check=true;
  var Name = document.getElementById("formname").value;
  var Email = document.getElementById("formemail").value;
  var Message = document.getElementById("formMessage").value;

  var spanName = document.getElementById("spanName");
  var spanEmail = document.getElementById("spanEmail");
  var spanMessage = document.getElementById("spanMessage");

  if (Name==""||Email==""||Message=="") {
    alert("Fill the form before")
  }
  
  if (Name=="") {
    spanName.innerHTML="Type your name..."
    check=false
  } else if(Name.length<3){
    spanName.innerHTML="Type more..."
    check=false
  } else if(!isNaN(Name)){
    spanName.innerHTML="Are you sure is that your name (It contain some numbers)"
    check=false
  }else{
    spanName.innerHTML=""
  }


  if(Email==""){
        spanEmail.innerHTML="number or email please"
        check=false
    }else if(!Email.includes("@"))
    {
        spanEmail.innerHTML="Enter a valid email"
        check=false
    }
    else{
        spanEmail.innerHTML=""
        
    }

    if(Message.length<10){
      spanMessage.innerHTML="Type something more, it will so I could improve"
      check= false
    }
    console.log(check);
    return check;

}
    form.addEventListener('submit', e => {
      e.preventDefault()
      if (validateForm()) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
            msg.innerHTML = "Sent Successfully"
            alert("Sent Successfully")
            setTimeout(function () {
              msg.innerHTML = ""
            }, 5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      }
    })