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
    new Route("/accountempl", "Mon compte", "/pages/auth/accountempl.html"),
    new Route("/editpassword", "Changement de mot de passe", "/pages/auth/editpassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo ARCADIA";