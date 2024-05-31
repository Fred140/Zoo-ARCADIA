import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Les services", "/pages/services.html"),
    new Route("/habitats", "Les habitats", "/pages/habitats.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/avis", "Avis", "/pages/avis.html"),
    new Route("/connexion", "Connexion Staff", "/pages/auth/connexionstaff.html"),
    new Route("/signupstaff", "Inscription Staff", "/pages/auth/signupstaff.html"),
    new Route("/accountempl", "Mon compte Employé", "/pages/auth/accountempl.html"),
    new Route("/editpassword", "Changement de mot de passe", "/pages/auth/editpassword.html"),
    new Route("/accountvete", "Mon compte Vétérinaire", "/pages/auth/accountvete.html"),
    new Route("/dashboard", "Dashboard du Zoo", "/pages/dashboard/dashboard.html"), 
    new Route("/gestioncompte", "Gestion des comptes pro", "/pages/gestioncompte/gestioncompte.html"),  
    new Route("/accountadmin", "Mon compte Administrateur", "/pages/auth/accountadmin.html", "/js/auth/accountadmin.js"),
    new Route("/loginadmin", "Connexion Administrateur", "/pages/auth/loginadmin.html", "/js/auth/loginadmin.js"),         
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo ARCADIA";