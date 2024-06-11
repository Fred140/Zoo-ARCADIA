Ajouter un domaine local avec XAMPP


Ajouter un domaine local présente plusieurs avantages, notamment :
    1. Accès aux ressources partagées : Lorsque vous ajoutez un ordinateur à un domaine, vous pouvez accéder aux ressources partagées sur le réseau du domaine.
    2. Politique de sécurité et de configuration centralisées : Les politiques de sécurité et de configuration peuvent être appliquées de manière centralisée à tous les ordinateurs du domaine.
    3. Gestion sécurisée des informations : Active Directory Services (ADDS) aide les administrateurs à gérer de manière sécurisée les informations et facilite la collaboration entre les utilisateurs d’un même domaine.
    4. Contrôle des droits administrateurs : Vous  pouvez modifier les utilisateurs ayant les droits administrateurs sur les PC juste en les plaçant dans un groupe spécifique.


Sous windows :
Ouvrir le fichier c:\Windows\System32\drivers\etc\hosts
127.0.0.1 monprojet.local


Sur Xampp :
Nous allons ensuite devoir indiquer à apache vers quel dossier le domaine doit pointer.
Pour cela il faut modifier le fichier httpd-vhosts.conf
C:\xampp\apache\conf\extra\http-vhosts.conf
et ajouter la configuration en adaptant les informations 
<VirtualHost*:80>
    DocumentRoot "C:\xampp\www\mon_projet"
    ServerName monprojet.local
</VirtualHost>

Il faut ensuite redémarrer le serveur 
