# 1_ Creation de dossiers et fichiers

j'ai crée un dossier nommeé Cours_js pour y mettre le projet
et fichiers : serveur pour configurer le cote serveur du code, url.js pour interagir avec le formulaire, et url.html qui contient le formulaire du url 
 Après ceci, j'ai installer express.js et ses packages 


# 2 j'ai commencé a creer le formulaire dans url.html 

<form id="formulaire">
    <label for="url">URL :</label>
    <input type="url" id="url" name="url" placeholder="enter the url" required>

    <button type="submit">Générer le QR</button>
    </form>
    
    <div id="resultat"></div>


# 3 puis le coté js 

pour pouvoir gerer le formulaire une fois url s'aisit genre pour envoyer l'url au cote serveur que j'ai ensuite creer le cote serveur

# 4 Serveur

c'est là j'ai gerer comment le serveur a pu recuperer la valeur saisie(url) pour le transformer en qrcode et pour j'ai du installer et importer le qrcode pour que l'url puisque etre transforme en qrcode, et au moment d'executer le code genre les ports des deux fichiers(serveur.js et url.js) etaient differents et avaient du mal à se voir genre se connecter et puis j'ai installer et importer ccors pour regler ce problème 
  

