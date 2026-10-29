# AERION CLIMATE — site vitrine

Site vitrine statique, responsive, en français. Aucun framework ni abonnement à un CMS n'est nécessaire.

## Fichiers
- `index.html` : contenu des pages/sections, SEO de base et coordonnées
- `style.css` : design responsive premium
- `script.js` : menu mobile et formulaire qui prépare un e-mail
- `assets/favicon.svg` : icône du site

## Avant publication
1. Vérifier les coordonnées (téléphone et e-mail).
2. Vérifier le périmètre exact des prestations, attestations et assurances applicables.
3. Ajouter les mentions légales et la politique de confidentialité adaptées à votre situation. Si un formulaire de contact avec envoi serveur ou des outils de mesure sont ajoutés plus tard, réévaluer les obligations RGPD/cookies.
4. Vérifier que vous détenez les droits nécessaires sur le nom de domaine et le contenu.
5. La page utilise une police Google Fonts distante ; les polices système prendront le relais si elle ne charge pas.

## Publier gratuitement avec GitHub Pages
1. Créer/se connecter à un compte GitHub.
2. Créer un dépôt public, par exemple `aerion-climate-site`.
3. Envoyer les fichiers du dossier à la racine du dépôt (`index.html`, `style.css`, `script.js`, `assets/`).
4. Dans le dépôt : Settings → Pages.
5. Sous Build and deployment, choisir `Deploy from a branch`, puis `main` et `/ (root)`, et enregistrer.
6. Après publication, GitHub fournit une adresse `https://VOTRE-PSEUDO.github.io/aerion-climate-site/`.

## Connecter aerion-climate.fr
Dans Settings → Pages → Custom domain, saisir `aerion-climate.fr` et enregistrer.
Chez le fournisseur du domaine, configurer les enregistrements DNS exactement comme indiqué dans la documentation GitHub Pages au moment de la configuration. La configuration varie selon le fournisseur et peut prendre du temps à se propager. Activer ensuite HTTPS dans GitHub Pages si proposé.
Le site est hébergé gratuitement, mais le nom de domaine reste généralement payant à renouveler. Vérifier aussi que le domaine vous appartient et que le fournisseur permet de modifier ses DNS.

## Formulaire
Le formulaire n'envoie pas les données à un serveur et ne stocke rien : il ouvre le logiciel de messagerie de l'utilisateur via `mailto:`. Le visiteur doit avoir une application e-mail configurée. Pour recevoir les demandes sans cette dépendance, il faudra intégrer un service de formulaire (dont les offres gratuites peuvent avoir des limites) ou un backend.

## Remarque SEO
Le référencement n'est pas garanti. Les données structurées et métadonnées sont une base de départ. Créer/optimiser une fiche Google Business Profile, vérifier les informations d'entreprise et ajouter les mentions légales avant diffusion publique.
