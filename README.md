# Alternance.ptdx.fr

Site personnel de présentation de mes projets et compétences, développé avec **Next.js**.

---

## Description

Alternance.ptdx.fr est un site web portfolio dédié à la présentation de mes projets de développement web, principalement orienté vers la recherche d’une alternance en développement full stack. Le site propose une navigation fluide, un affichage des projets récents, ainsi qu’un formulaire de contact fonctionnel permettant aux visiteurs de me joindre directement.

---

## Fonctionnalités principales

- Affichage des projets de développement avec détails et liens vers GitHub.
- Formulaire de contact intégré, avec envoi des messages via l’API Brevo (Sendinblue).
- Tri et affichage dynamique des projets récents.
- Design responsive et accessible.

---

## Technologies utilisées

- **Next.js** (React framework)
- **React** (composants fonctionnels)
- **TypeScript** / JavaScript
- **SCSS** pour le style
- **API Brevo** pour l’envoi des emails
- **Vercel** pour le déploiement

---

## Installation

1. Cloner le dépôt :  
   ```bash
   git clone https://github.com/PierreTDX/alternance.ptdx.fr.git

2. Installer les dépendances :  
   ```bash
   npm install

3. Configurer les variables d’environnement dans un fichier .env.local :  
   ```ini
   BREVO_API_KEY=ta_clef_api_brevo_ici

## Utilisation du formulaire de contact

Le formulaire de contact utilise l’API Brevo pour envoyer les messages à l’adresse renseignée dans l'PI. Lorsqu’un message est envoyé, un accusé de réception est également adressé automatiquement à l’expéditeur.

## Déploiement

Le projet est déployé sur Vercel avec un système CI/CD automatique à chaque push sur la branche principale.

## Contribuer

Les contributions sont les bienvenues !
N’hésitez pas à ouvrir une issue ou une pull request.

## Auteur

Pierre Tondeux — Développeur Full Stack en alternance  
📧 pierre.tondeux@gmail.com  
🌐 https://alternance.ptdx.fr  
GitHub : https://github.com/PierreTDX