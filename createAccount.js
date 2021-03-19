       
    

       const signUpConfirmation = ()=> {
      
           const loginAPI= `http://localhost:8080/users`;
           const inpUsername = document.getElementById("signUp-username").value;
           const inpPassword = document.getElementById("signUp-password").value;
                       
           axios.post(loginAPI,{
               username:inpUsername,
               password:inpPassword
           })
           .then(res=>{
               showLogIn();            
           })
           .catch(err=>
           {
               signUpErrorNotification(err);
           })
            
       }
       
       const signUpErrorNotification = (error)=>{
          
          const errResponse = error.response.data.message;
          const firstChar = errResponse.charAt(0);

          
          switch(firstChar){
              case '-': alert("User  name already exist \nTry another name");
                        break;
              case '~': alert("User name should be at least 3 characters");
                        break;
              case '>': alert("Password should be 6 characters and contains with any symbol");
                        break;
              default: alert("username and password can not be empty");
                       
          }
     
       }


       const showSignUp = ()=> {
           
            document.getElementById("accountDiv").style.display="block";
            document.getElementById("loginDiv").style.display="none";
       }

       const showLogIn = ()=> {
            document.getElementById("accountDiv").style.display="none";
            document.getElementById("loginDiv").style.display="block";
       }

       const logInConfirmation = ()=> {
       
            const loginAPI= `http://localhost:8080/login`;
            const inpUsername = document.getElementById("logIn-username").value;
            const inpPassword = document.getElementById("logIn-password").value;
        
            axios.post(loginAPI,{
                username:inpUsername,
                password:inpPassword
            })
            .then(res=>{
                console.log(res);
                localStorage.setItem("token",res.headers.pragma);
               
                document.getElementById("loginDiv").style.display="none";
                document.getElementById("bookingDiv").style.display="block";
                document.getElementById("logoutLi").style.display="block";
                document.getElementById("capacityDiv").style.display="block";
            })
            .catch(err=>{
                loginErrorHandler(err);
            })

            
        }  


        loginErrorHandler = (err)=>{
            alert("Username/password not valid")
        }

        const  logout= ()=>{
                 
            const logoutAPI= `http://localhost:8080/logout`;
                   
            axios.post(logoutAPI)
            .then(res=>console.log(res))
            .catch(err=>console.log(err)) 
        
            document.getElementById("accountDiv").style.display="block";
                
        }  