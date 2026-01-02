# 📊 Daily Briefing

Application de briefing quotidien - Dashboard personnel avec emails, calendrier et données de santé.

## 🎯 Fonctionnalités

### En cours de développement
- 📧 **Emails** : Accédez rapidement à vos emails importants
- 📅 **Calendrier** : Visualisez vos événements à venir
- 💪 **Santé** : Consultez vos données de santé personnelles

## 🚀 Technologies

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **UI Components** : Lucide React (icônes)
- **Animations** : Framer Motion
- **State Management** : Zustand
- **Validation** : Zod
- **Graphiques** : Recharts

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/pulssart/daily-briefing.git
cd daily-briefing

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🛠️ Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm start` : Lance le serveur de production
- `npm run lint` : Vérifie le code avec ESLint

## 📁 Structure du projet

```
daily-briefing/
├── app/              # Application Next.js (App Router)
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Page d'accueil
│   └── globals.css   # Styles globaux
├── components/       # Composants réutilisables
├── lib/             # Utilitaires et helpers
├── public/          # Fichiers statiques
└── types/           # Types TypeScript
```

## 🎨 Design System

L'application utilise un design system cohérent avec :
- Palette de couleurs personnalisée
- Typographie (Inter + Playfair Display)
- Composants réutilisables (cartes, boutons, formulaires)
- Animations subtiles
- Mode responsive

## 🌐 Déploiement

L'application est configurée pour être déployée sur Netlify avec le plugin Next.js.

```bash
npm run build
```

## 📝 Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# À configurer selon vos besoins
# NEXT_PUBLIC_API_URL=
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT © Adrien DONOT

## 👤 Auteur

**Adrien DONOT**
- GitHub: [@pulssart](https://github.com/pulssart)
