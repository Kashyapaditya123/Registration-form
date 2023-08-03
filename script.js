
    document.getElementById('myForm').addEventListener('submit',function (event) {
    event.preventDefault();


    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const role= document.getElementById('role').value;
    const dob= document.getElementById('dob').value;
    const gender= document.getElementById('gender').value;


   if(name.trim() === "") {
    alert("Please enter your name");
    return;
   }

   if(email.trim() === "") {
    alert("Please enter your email");
    return;
   }

   if(role.trim() === "") {
    alert("Please enter your role");
    return;
   }

   if(dob.trim() === "") {
    alert("Please enter your dob");
    return;
   }

   if(gender.trim() === "") {
    alert("Please enter your gender");
    return;
   }
   window.location.href="success.html";
});