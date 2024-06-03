const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexionStaff = document.getElementById("btnconnexionstaff");

btnConnexionStaff.addEventListener("click", checkCredentials);

function checkCredentials () {

   // ici, il faudra appeler l'API pour vérifier les crédentials en BDO
   if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
    alert ("Vous êtes connecté!");
   
    // il faudra récupérer le vrai token 
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
    setToken(token);


    setCookie(RoleCookieName, "admin", 7);
    window.location.replace ("/");
    // Placer le token en cookie
    
   }
   else {
      mailInput.classList.add("is-invalid");
      passwordInput.classList.add("is-invalid");
   }
}