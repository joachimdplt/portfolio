## 1) Tokens & composants (CSS)

````bash
/* app.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* === Design System minimal === */
@layer components {
  /* Page & conteneur */
  .page        { @apply min-h-screen bg-black text-white; }
  .container   { @apply max-w-5xl mx-auto px-6 py-8; }

  /* Typo */
  .kicker      { @apply uppercase tracking-wide text-sm text-white/70; }
  .h1          { @apply text-2xl md:text-4xl font-semibold; }
  .h2          { @apply text-xl md:text-2xl font-semibold; }
  .muted       { @apply text-white/70; }

  /* Surfaces & cartes */
  .surface     { @apply rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm; }
  .card        { @apply surface p-6; }

  /* Formulaires */
  .input       { @apply w-full rounded-xl bg-white/10 border border-white/20
                       px-4 py-3 placeholder-white/40
                       focus:outline-none focus:ring-2 focus:ring-white/30; }

  /* Boutons */
  .btn         { @apply inline-flex items-center justify-center gap-2 rounded-xl
                       px-4 py-2 border border-white/20 hover:border-white/40
                       transition focus:outline-none focus:ring-2 focus:ring-white/30; }
  .btn-primary { @apply btn bg-white text-black hover:bg-white/90; }
  .btn-ghost   { @apply btn bg-transparent text-white hover:bg-white/10; }
  .btn-icon    { @apply inline-flex items-center justify-center h-10 w-10 rounded-lg
                       border border-white/20 hover:border-white/40 transition
                       focus:outline-none focus:ring-2 focus:ring-white/30; }

  /* Médias */
  .avatar      { @apply h-10 w-10 rounded-full border border-white/20 object-cover; }

  /* Listes & grilles */
  .bullets     { @apply list-disc pl-5 space-y-1 text-sm md:text-base; }
  .grid-2      { @apply grid grid-cols-1 md:grid-cols-2 gap-6; }

  /* Liens & pagination */
  .link        { @apply underline underline-offset-4 hover:text-white; }
  .pager       { @apply flex items-center justify-between text-white/70; }
}```

##  **2) Exemples d’usage (HTML/JSX)**


### Ecran 1 welcome

```bash
<div className="page">
  <div className="container">
    <div className="flex items-center gap-3">
      <img src="/images/avatar.png" alt="Joachim" className="avatar" />
      <div className="kicker">joachim duplat</div>
    </div>

    <h1 className="h1 mt-6">Hello, my name is Joachim</h1>
    <p className="muted mt-2">What’s your name?</p>

    <form className="mt-6 flex items-center gap-3">
      <input className="input max-w-md" placeholder="Enter your name here" />
      <button className="btn-primary">Continue</button>
    </form>
  </div>
</div>
````

### Ecran 2 Intentions

```bash
<div className="page">
  <div className="container">
    <div className="flex items-center gap-3">
      <img src="/images/avatar.png" alt="Joachim" className="avatar" />
      <div className="kicker">joachim duplat</div>
    </div>

    <h1 className="h1 mt-6">Hello Name! What are you looking for?</h1>

    <div className="mt-6 flex items-center gap-3">
      <a className="btn-icon" href="https://linkedin.com" title="LinkedIn" aria-label="LinkedIn">in</a>
      <a className="btn-icon" href="https://github.com" title="GitHub" aria-label="GitHub">GH</a>
      <a className="btn-icon" href="mailto:hello@site.com" title="Email" aria-label="Email">@</a>
    </div>

    <a className="btn-ghost mt-8 inline-flex" href="/projects">View Projects</a>
  </div>
</div>
```

### Ecran 3 Projets

```bash
<div className="page">
  <div className="container">
    <div className="kicker">Last projects :</div>

    <div className="card mt-4">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-white/10 grid place-items-center text-xl">🌐</div>
        <div>
          <div className="font-semibold">adopteunbox.fr</div>
          <a href="https://adopteunbox.fr" target="_blank" rel="noreferrer" className="link">
            https://adopteunbox.fr
          </a>
        </div>
      </div>

      <div className="grid-2 mt-6">
        <div>
          <div className="muted mb-2">Aperçu</div>
          <div className="surface aspect-video rounded-xl" />
        </div>
        <div>
          <div className="muted mb-2">Key Features</div>
          <ul className="bullets">
            <li>Devis en ligne en 60s</li>
            <li>Calcul dynamique volume (0.5–8 m³)</li>
            <li>Options étage / ascenseur</li>
            <li>Durées 30j / 4–6 mois</li>
            <li>1–2 déménageurs</li>
            <li>4 niveaux d’assurance</li>
            <li>Prix en temps réel</li>
            <li>Paiement sécurisé</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="pager mt-6">
      <a href="/hello" className="btn-ghost">&lt; Back</a>
      <button className="btn-ghost">More &gt;</button>
    </div>
  </div>
</div>
```

# **Tips d’intégration**

-   Pas besoin de créer des composants React si tu préfères aller vite : **compose avec ces classes** directement dans tes pages Inertia.
-   Si tu veux des variantes (ex. .btn-danger, .btn-success), dupliques .btn et ajoutes juste la couleur (bg-red-500 text-white, etc.).
-   Les icônes : commence simple (texte/emoji), tu pourras brancher lucide-react plus tard **sans changer tes classes** (.btn-icon reste la même).

Tu veux que je te génère aussi la **version “clair”** des mêmes classes pour un toggle dark/light ?
