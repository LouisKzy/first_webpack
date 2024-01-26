# Premier Starter Webpack

## Introduction
Le projet Starter Webpack vise à fournir un environnement de développement rapide et efficace pour la création de sites web en utilisant Webpack. L'utilisation de ce starter facilitera la gestion des assets, la compilation du JavaScript via Babel, la gestion des styles avec SCSS, ainsi que l'intégration de Bootstrap et Font Awesome.

## Mise en place
Commencez par cloner ce référentiel sur votre machine locale. Ensuite, exécutez la commande npm install pour installer les dépendances nécessaires.

## Structure du projet
Le projet est structuré comme suit :

- **src/** : Ce dossier contient le code source du projet.
  - **index.html** : Fichier HTML principal.
  - **index.js** : Point d'entrée JavaScript du projet.
  - **style/** : Dossier contenant les fichiers SCSS.
    - **index.scss** : Fichier principal SCSS.
  - **assets/** : Dossier pour stocker les ressources comme les images et les polices.
- **dist/** : Ce dossier sera généré automatiquement lors de la compilation par Webpack. Il contient les fichiers résultants prêts pour le déploiement.
  - **bundle.js** : Fichier JavaScript résultant.
  - **bundle.css** : Fichier CSS résultant.
  - ... : D'autres fichiers générés pour les images et les polices.

## Configuration Webpack
Le fichier webpack.config.js contient la configuration principale du projet. Voici un aperçu des principales fonctionnalités :

- **Point d'entrée** : Le point d'entrée du projet est défini comme `./src/index.js`.
- **Sortie** : Webpack génère les fichiers résultants dans le dossier `dist`.
- **Règles des modules** : Différentes règles sont définies pour le traitement des fichiers, utilisant des loaders pour le JavaScript (Babel) et le SCSS.
- **Plugins** : Le plugin MiniCssExtractPlugin est utilisé pour extraire les styles dans un fichier séparé appelé `bundle.css`.

## Scripts NPM
Deux scripts sont disponibles :

- `npm run build` : Compile le projet et génère les fichiers dans le dossier `dist`.
- `npm test` : Exécute une commande de test (dans cet exemple, une simple déclaration d'erreur).

## Utilisation
1. Clonez le référentiel.
2. Exécutez `npm install` pour installer les dépendances.
3. Utilisez `npm run build` pour générer les fichiers dans le dossier `dist`.
4. Ouvrez le fichier `dist/index.html` dans votre navigateur pour visualiser l'application.
