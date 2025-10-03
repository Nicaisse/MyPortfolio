# 🌟 Portfolio — Nicaisse Bryan

[![Deploy to GitHub Pages](https://img.shields.io/github/actions/workflow/status/Nicaisse/portfolio/deploy.yml?branch=main&label=gh-pages+deploy)](https://github.com/Nicaisse/portfolio/actions)
[![Made with Astro](https://img.shields.io/badge/Made%20with-Astro-1b1f24?logo=astro&logoColor=white)](https://astro.build/)
[![Live on GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://nicaisse.github.io/portfolio)
[![Live on Render](https://img.shields.io/badge/Live%20Demo-Render-green?logo=render)](https://nicaissebryan.onrender.com)

---

Bienvenue sur mon portfolio personnel, réalisé avec [Astro](https://astro.build/) !  
Ce site présente mes projets, expériences et compétences de développeur web.

## ✨ Fonctionnalités

- ⚡️ **Astro** & **React**
- 🎨 Design responsive et moderne
- 🏷️ Liens dynamiques vers les projets, expériences, contacts, etc.
- ☁️ Déployé sur [GitHub Pages](https://nicaisse.github.io/portfolio) et [Render](https://nicaissebryan.onrender.com)
- 📦 Gestion automatique des assets

## 🚀 Aperçu

![screenshot du portfolio](assets/folio-img.png)

---

## 🔧 Développement & déploiement

### Installation

```bash
git clone https://github.com/Nicaisse/portfolio.git
cd portfolio
bun install
```

### Développement local

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Prévisualisation locale du build

```bash
bun run preview
```

### Variables d’environnement nécessaires

Pour supporter le multi-déploiement (GitHub Pages **et** Render), il faut définir :

**Fichier `.env` pour GitHub Pages** (par défaut fourni, ou à créer à la racine) :
```env
PUBLIC_BASE=/portfolio
PUBLIC_SITE=https://nicaisse.github.io/portfolio
```

**Pour Render** (dans le dashboard Render > Environment) :
| Key         | Value                                   |
|-------------|-----------------------------------------|
| PUBLIC_BASE | /                                       |
| PUBLIC_SITE | https://nicaissebryan.onrender.com       |

> **Important** : Ces variables assurent que tous les liens et assets fonctionnent selon la plateforme de déploiement.

---

## 🏷 Tags

`#Astro` `#React` `#Portfolio` `#FrontEnd` `#GitHubPages` `#Render` `#WebDev` `#Bun`

---

## 📝 Licence

Projet open source sous licence [MIT](LICENSE).

---

> **Contact**  
> [LinkedIn](https://www.linkedin.com/in/Nicaisse/) · [GitHub](https://github.com/Nicaisse)