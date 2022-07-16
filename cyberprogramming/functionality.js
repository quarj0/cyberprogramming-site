// hamburger menubar 
const burger = document.querySelector(".burger")
const menuSidebar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")

burger.addEventListener("click", function(){
  menuSidebar.style.transform = "translate(0%)"
})

closeMenu.addEventListener("click", function(){
  menuSidebar.style.transform = "translate(-100%)"
})


/* sign up form*/ 

function formContainer(){
    document.getElementById("form").style.display = "block";
}
function openForm() {
    document.getElementById("form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form").style.display = "none";
  }


/*Reset form*/
function checkForm()
{
 var oldP=document.getElementById("oldP").value;
 var newP=document.getElementById("newP").value;
 var confirmP =document.getElementById("confirmP").value;

 if(oldP!=""&&newP!=""&&confirmP!="")
 {
   if(oldP!=newP)
   {
     if(newP==confirmP)
      {
       return true;
      }
      else
       {
         alert("Confirm password is not same as you new password.");
         return false;
       }
   }
   else
  {
   alert(" This Is Your Old Password,Please Provide A New Password");
   return false;
  }
 }
 else
 {
  alert("All Fields Are Required");
  return false;
 }
}


function ycodes() {
  var regex = /0-9/
  var check = [0,1,2,3,4,5,6,7,8,9]
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (firstname.trim() == "" || lastname.trim() == "" || email.trim()== "" || password == "") {
  alert("All fields required!");
    return false;
  }
  else if (firstname == regex.test(check) || lastname == regex.test(check) || password <=7)
  {
    alert("Sorry! Password is too short or name is containing numerics.");
    return false;
  }
  
}
