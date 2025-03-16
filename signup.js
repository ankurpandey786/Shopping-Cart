let fname=document.getElementById('fname');
let lname=document.getElementById('lname');
let email=document.getElementById('email');
let password=document.getElementById('password');
let confirmpassword=document.getElementById('confirmpassword');

let error=document.getElementById("error");
error.style.color="red";



document.getElementById("signup").addEventListener("click",(e)=>{
    if(fname.value=="" || lname.value==""|| email.value=="" || password.value=="" || confirmpassword.value==""){
        error.textContent="Please fill required field!";
    }else if(password.value==confirmpassword.value){
        //signup
        let users=JSON.parse(localStorage.getItem('users') ?? "[]");
        let filteredUsers=users.filter((user)=> user.email==email.vlaue);
        if(filteredUsers.length>0){
            error.textContent="User already exist!!";
        }else{
            users.push({
                email:email.value,
                password:password.value,
                fname:fname.value,
                lname:lname.value,
                createdAt: new Date(),
            });

            localStorage.setItem("users",JSON.stringify(users));
            error.textContent="";
            fname.value="";
            lname.value="";
            email.value="";
            password.value="";
            confirmpassword.value="";
        }


    }else{
        error.textContent="Password did not matched";
    }
})
