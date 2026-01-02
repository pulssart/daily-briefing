# Guide de Contribution

Merci de votre intérêt pour contribuer à Daily Briefing !

## 🚀 Comment contribuer

### 1. Fork et Clone

```bash
# Fork le repository sur GitHub
# Puis clone votre fork
git clone https://github.com/VOTRE-USERNAME/daily-briefing.git
cd daily-briefing
```

### 2. Créer une branche

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
# ou
git checkout -b fix/correction-bug
```

### 3. Installation

```bash
npm install
```

### 4. Développement

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

### 5. Commits

Utilisez des messages de commit clairs et descriptifs :

```bash
git commit -m "feat: ajout de la fonctionnalité X"
git commit -m "fix: correction du bug Y"
git commit -m "docs: mise à jour de la documentation"
```

Types de commits :
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, point-virgule manquant, etc.
- `refactor`: Refactorisation du code
- `test`: Ajout de tests
- `chore`: Tâches de maintenance

### 6. Tests et Lint

```bash
npm run lint
npm run build
```

Assurez-vous que tout fonctionne correctement avant de soumettre.

### 7. Push et Pull Request

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

Puis créez une Pull Request sur GitHub avec :
- Un titre clair
- Une description détaillée des changements
- Des captures d'écran si applicable
- Les issues liées (si applicable)

## 📝 Standards de Code

### TypeScript
- Utilisez TypeScript pour tout nouveau code
- Définissez les types explicitement
- Évitez `any` autant que possible

### Style
- Suivez les conventions ESLint
- Utilisez des noms de variables/fonctions descriptifs
- Commentez les parties complexes du code

### Composants React
- Utilisez les composants fonctionnels
- Privilégiez les hooks
- Gardez les composants petits et réutilisables

### CSS/Tailwind
- Utilisez Tailwind CSS en priorité
- Respectez le design system du projet
- Les classes custom vont dans `globals.css`

## 🐛 Signaler un Bug

Ouvrez une issue avec :
- Une description claire du problème
- Les étapes pour reproduire
- Le comportement attendu vs observé
- Captures d'écran si pertinent
- Environnement (navigateur, OS, etc.)

## 💡 Proposer une Fonctionnalité

Ouvrez une issue avec :
- Une description de la fonctionnalité
- Le problème qu'elle résout
- Des exemples d'utilisation
- Des maquettes si applicable

## ❓ Questions

N'hésitez pas à ouvrir une issue pour poser vos questions !

Merci pour votre contribution ! 🚀
