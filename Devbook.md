# **Objectif**

Prouver la valeur du portfolio en 1 jour dev : capter le nom du visiteur, lui proposer un choix d’intention, et montrer 1 projet phare avec ses points clés.

# **Périmètre MVP (V1)**

1. **Écran 1 – Welcome / Prénom**

    - Fond noir, avatar, texte : “Hello my name is Joachim” + “What’s your name?”
    - Champ texte + CTA “Enter your name here”.
    - Si prénom saisi → stocké en mémoire (localStorage) → redirige vers Écran 2.

2. **Écran 2 – Intentions**

    - Titre personnalisé : “Hello {Name}! What are you looking for?”
    - 3 icônes cliquables (ex. LinkedIn, GitHub/Website, Mail/Contact).
    - CTA secondaire “View Projects” → Écran 3.

3. **Écran 3 – Projects**

    - Bloc “Last projects :”
    - Carte projet “adopteunbox.fr” : logo/emoji, lien cliquable, “Key Features” (liste bullets 8–12).
    - Boutons pagination minimalistes : “< Back” (vers Écran 2) et “More >” (placeholder).

# **Parcours utilisateur (happy path)**

Arrivée / → saisit prénom → /hello personnalisé → clique “View Projects” → /projects → consulte features → retour ou lien externe.

# **User stories & critères d’acceptation**

-   **US1** : En tant que visiteur, je saisis mon prénom pour une expérience personnalisée.
    **CA** : Le prénom s’affiche sur l’Écran 2 sans re-saisie (persisté en local).
-   **US2** : En tant que visiteur, je choisis rapidement où aller (réseaux/contact).
    **CA** : Chaque icône ouvre le lien dans un nouvel onglet.
-   **US3** : En tant que prospect, je vois un projet avec ses bénéfices clés.
    **CA** : Titre + URL + 8–12 features visibles, lien fonctionne.
-   **US4** : En tant qu’utilisateur mobile, je lis tout sans zoom.
    **CA** : Mise en page responsive (≥320px) + contrastes OK.

# **Composants MVP**

-   Layout (fond noir, conteneur centré).
-   Avatar (image ronde 40px).
-   Heading (H1/H2 typographiés).
-   TextInput (label, placeholder, touche “Enter” soumise).
-   PrimaryButton (état hover/focus).
-   IconButton (icône SVG dans un bouton 40px).
-   ProjectCard (titre, URL, liste features).
-   PaginationLite (“< Back” | “More >”).

# **Données (MVP)**

-   **LocalStorage** : visitor_name (string).
-   **Constantes** (front) : liens sociaux, projet (titre, url, features[]).

> Pas de base de données requise pour V1.

# **Routing (MVP)**

-   / → WelcomeName (écran 1)
-   /hello → HelloNeed (écran 2)
-   /projects → Projects (écran 3)

# **Contenu (copy) — prêt à coller**

-   Écran 1
    -   H1: “Hello, my name is Joachim”
    -   Sub: “What’s your name?”
    -   Placeholder: “Enter your name here”
-   Écran 2
    -   H1: “Hello {Name}! What are you looking for?”
    -   Icônes: LinkedIn | GitHub (ou Site) | Email
    -   CTA: “View Projects”
-   Écran 3
    -   Kicker: “Last projects :”
    -   Projet: “https://adopteunbox.fr”
    -   “Key Features” (exemples) :
        -   Devis en ligne en 60s
        -   Calcul dynamique volume (0.5–8 m³)
        -   Options étage/ascenseur
        -   Durées 30j/4–6 mois
        -   1–2 déménageurs
        -   4 niveaux d’assurance
        -   Prix en temps réel
        -   Paiement sécurisé
        -   Dashboard admin (WIP)
        -   Emails transactionnels

# **UX/UI (MVP)**

-   **Style** : fond #000, texte #fff, opacité #fff/70 pour secondaires.
-   **Typo** : Tailwind par défaut (sans-serif), tailles: H1 text-2xl md:text-4xl, body text-sm md:text-base.
-   **Espaces** : padding px-6 py-8, cartes rounded-2xl, border-white/10.
-   **États** : focus visible (outline-offset-2).
-   **Responsive** : grille 1 col → 2 cols ≥768px sur l’écran projets.

# **Accessibilité minimale**

-   Labels explicites sur input.
-   aria-label sur icônes, title pour tooltips.
-   Contraste ≥ 4.5:1 (texte secondaire ≥ #fff/70 ok sur #000).

# **Mesure & preuve (optionnel V1)**

-   Console log simple à la soumission du prénom.
-   (V1.1) Ajout Plausible/Umami pour clicks icônes.

# **Performance**

-   Bundles compacts (Vite par défaut).
-   Pas d’images lourdes (avatar ≤ 20KB).

# **Livrables V1**

-   Repo avec 3 pages Inertia fonctionnelles.
-   README “setup & run”.
-   Variables (liens sociaux, features) centralisées dans un fichier.

# **Backlog V1.1 (prochaines itérations)**

-   Animation d’entrée (Framer Motion).
-   Galerie projets (carrousel, pagination réelle).
-   Formulaire contact (Inertia POST + validation).
-   Stockage prénom côté serveur si session/auth.
-   Thème clair/sombre toggle.
-   i18n FR/EN.

# **Hors scope (V1)**

-   Authentification complète, CMS, dashboard admin.
-   SEO avancé (OpenGraph, sitemap).
-   Tests E2E.

---

[[styles]]
