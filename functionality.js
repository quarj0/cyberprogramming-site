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
var ycodes = document.getElementById("ycodes");
ycodes.addEventListener=forget();
function forget(){
  //document.createElement('div')
  document.write("<h1>Hello and welcome</h1>")

}
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
