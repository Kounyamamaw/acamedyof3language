# 🌍 L'Académie des Trois Langues

**Votre rituel linguistique quotidien : Français • Darija • English**

> *Trois langues, trois moments, trente minutes par jour*

---

## 🎭 À Propos

L'Académie des Trois Langues est une application web interactive pour s'entraîner quotidiennement dans **trois dimensions linguistiques** :

1. **⚔️ Français Rostandien** — Ton noble, panache et verbe imagé inspiré de Cyrano de Bergerac
2. **🕌 Darija Marocain** — Dialecte vivant du Maroc, expressions authentiques du quotidien
3. **📚 English Sophisticated** — Vocabulaire riche, littéraire et académique

---

## 🗓️ Le Rituel Quotidien

| Moment | Langue | Objectif | Durée |
|--------|--------|----------|-------|
| 🌅 **Matin** | Français | Panache, alexandrins, métaphores nobles | 10 min |
| ☀️ **Midi** | Darija | Expressions vivantes, dialogues authentiques | 10 min |
| 🌙 **Soir** | Anglais | Vocabulaire sophistiqué, transformations élégantes | 10 min |

**Total : 30 minutes par jour** réparties en 3 sessions courtes et efficaces.

---

## ✨ Fonctionnalités

### Pour Chaque Langue

#### 📘 Mot/Expression du Jour
- Définition détaillée
- Exemples d'usage
- Contexte culturel
- Mini-exercice d'application

#### ✒️ Atelier de Transformation
- Phrase simple du jour
- Exercice de transformation
- Consignes et rappels
- Auto-évaluation guidée

#### 🗡️ Thème d'Inspiration
- Thème quotidien (ex: "La fatigue digne")
- Pistes et vocabulaire
- Exercice libre créatif

#### 📚 Lexique Enrichi
- Mots nobles (Français)
- Expressions courantes (Darija)
- Vocabulaire sophistiqué (Anglais)

---

## 🎨 Technologies Utilisées

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** pour le design
- **Google Fonts** :
  - Cinzel, Crimson Text, Cormorant Garamond (Français)
  - Noto Naskh Arabic (Darija)
  - Lora, Playfair Display (Anglais)

---

## 🚀 Installation Locale

### Prérequis
- Node.js 18+ installé

### Étapes

```bash
# 1. Aller dans le dossier
cd academie-trilingue

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans votre navigateur
# http://localhost:3000
```

---

## 📱 Déploiement sur Vercel (GRATUIT)

### Méthode Recommandée : Via GitHub

#### Étape 1 : Créer un repository GitHub

1. Créez un compte sur [github.com](https://github.com) si nécessaire
2. Créez un nouveau repository (public ou privé)

#### Étape 2 : Pousser votre code

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Académie des Trois Langues - Premier commit"

# Ajouter votre repository GitHub
git remote add origin https://github.com/VOTRE-USERNAME/academie-trilingue.git

# Pousser le code
git branch -M main
git push -u origin main
```

#### Étape 3 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur **"New Project"**
4. Importez votre repository `academie-trilingue`
5. Vercel détecte automatiquement Next.js
6. Cliquez sur **"Deploy"**
7. Attendez 1-2 minutes ⏱️
8. **Votre site est en ligne !** 🎉

Vous obtiendrez une URL comme : `https://academie-trilingue.vercel.app`

#### Étape 4 : Mises à Jour Automatiques

Chaque fois que vous pousserez du code sur GitHub, Vercel redéploiera automatiquement :

```bash
# Après avoir modifié des fichiers
git add .
git commit -m "Mise à jour du contenu"
git push
```

---

## 📱 Accéder sur Mobile

1. Ouvrez l'URL Vercel sur votre téléphone
2. **iPhone** : Safari → Partager → "Sur l'écran d'accueil"
3. **Android** : Chrome → Menu (⋮) → "Ajouter à l'écran d'accueil"

Vous avez maintenant une **app progressive** sur votre téléphone !

---

## 🎨 Personnalisation

### Modifier le Contenu Quotidien

Chaque langue a sa propre page dans `app/[langue]/page.js` :

- **Français** : `app/francais/page.js`
- **Darija** : `app/darija/page.js`
- **Anglais** : `app/english/page.js`

Exemples de personnalisation :

#### Changer le mot du jour (Français)
```javascript
// Dans app/francais/page.js
<h3>Mot : <strong>Faste</strong></h3>
// Remplacez par votre mot
<h3>Mot : <strong>Ardeur</strong></h3>
```

#### Ajouter une expression (Darija)
```javascript
// Dans la table des expressions
{ darija: 'نهار زوين', phone: 'Nhar zwin', fr: 'Belle journée' },
```

#### Ajouter un mot (Anglais)
```javascript
// Dans la table du vocabulaire
{ word: 'Ebullient', meaning: 'Cheerful and full of energy', usage: 'Literary' },
```

### Modifier les Couleurs

Dans `tailwind.config.js` :

```javascript
colors: {
  burgundy: '#6b0f1a',      // Français
  'morocco-red': '#c1272d',  // Darija
  'oxford-blue': '#002147',  // Anglais
  // Changez ces valeurs selon vos préférences
}
```

---

## 📖 Contenu Pédagogique

### Français Rostandien

Basé sur :
- La pièce *Cyrano de Bergerac* (1897) d'Edmond Rostand
- Le film de Jean-Paul Rappeneau (1990) avec Gérard Depardieu
- Techniques : alexandrins, métaphores, tirades, panache

**Caractéristiques** :
- Images concrètes et visuelles
- Virtuosité verbale et rythme
- Mélange de noblesse et d'humour
- Autodérision héroïque

### Darija Marocain

Dialecte arabe parlé au Maroc, mélange de :
- Arabe classique
- Berbère (amazigh)
- Français
- Espagnol

**Contenu** :
- Salutations et politesse
- Expressions émotionnelles
- Dialogues authentiques
- Contexte culturel et religieux

### English Sophisticated

Vocabulaire académique et littéraire pour :
- Communication professionnelle
- Écriture académique
- Expression littéraire
- Conversation élégante

**Focus** :
- Mots avancés avec étymologie
- Transformations élégantes
- Devices littéraires (métaphore, allitération, etc.)
- Précision et nuance

---

## 🌟 Exemples de Transformation

### Français
**Simple** : "Je suis fatigué"  
**Rostandien** : "Mon armure est de plomb, mon épée pèse mille livres, mais je tiens debout encore"

### Darija
**Français** : "Je suis fatigué"  
**Darija** : "راني معيّق" (Rani m3eyyeq)

### Anglais
**Simple** : "I am tired"  
**Sophisticated** : "I find myself utterly enervated, depleted of vigor"

---

## 📁 Structure du Projet

```
academie-trilingue/
├── app/
│   ├── layout.js              # Layout principal avec polices
│   ├── page.js                # Page d'accueil (hub)
│   ├── globals.css            # Styles Tailwind
│   ├── francais/
│   │   └── page.js            # Page Français Rostandien
│   ├── darija/
│   │   └── page.js            # Page Darija Marocain
│   └── english/
│       └── page.js            # Page English Sophisticated
├── tailwind.config.js         # Configuration Tailwind
├── postcss.config.js          # Configuration PostCSS
├── next.config.js             # Configuration Next.js
├── package.json               # Dépendances
├── .gitignore                 # Fichiers à ignorer
└── README.md                  # Ce fichier
```

---

## 🎯 Objectifs Pédagogiques

### Court Terme (1-2 semaines)
- Familiarisation avec le vocabulaire de chaque langue
- Premières transformations simples
- Compréhension des structures de base

### Moyen Terme (1-2 mois)
- Maîtrise du vocabulaire quotidien
- Transformations plus complexes
- Création de phrases originales

### Long Terme (3+ mois)
- Expression naturelle et fluide
- Richesse lexicale remarquable
- Créativité linguistique développée

---

## 💡 Conseils d'Utilisation

### Pour un Entraînement Optimal

1. **Régularité** : Les 3 sessions chaque jour
2. **Matin** : Français (esprit frais pour la créativité)
3. **Midi** : Darija (pratique vivante)
4. **Soir** : Anglais (consolidation)
5. **Lire à voix haute** : Essentiel pour le rythme
6. **Noter vos progrès** : Sauvegardez vos meilleures créations

### Intégration dans la Vie Quotidienne

- **Français** : Décrivez votre journée en style rostandien dans un journal
- **Darija** : Pratiquez avec des locuteurs natifs ou des groupes en ligne
- **Anglais** : Lisez des articles académiques, écoutez des podcasts sophistiqués

---

## 🔧 Dépannage

### Le site ne se lance pas localement
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
npm run dev
```

### Erreur lors du build
```bash
# Vérifiez la version de Node.js
node --version
# Devrait être 18+

# Réinstallez les dépendances
npm install
npm run build
```

### Le déploiement Vercel échoue
- Vérifiez que tous les fichiers sont bien poussés sur GitHub
- Consultez les logs de déploiement sur Vercel Dashboard
- Assurez-vous que `package.json` contient les bons scripts

---

## 🤝 Idées d'Amélioration Future

- [ ] Système de sauvegarde des exercices (LocalStorage)
- [ ] Générateur aléatoire de phrases du jour
- [ ] Mode sombre
- [ ] Partage sur réseaux sociaux
- [ ] Statistiques de progression
- [ ] Notifications quotidiennes
- [ ] API pour les exercices quotidiens
- [ ] Version mobile native (React Native)

---

## 📜 Licence

Ce projet est libre d'utilisation à des fins personnelles et éducatives.

---

## 🙏 Remerciements

- **Edmond Rostand** pour *Cyrano de Bergerac*
- **Jean-Paul Rappeneau** et **Gérard Depardieu** pour le film
- La communauté **Darija School** et **BlaBla Darija** pour les ressources
- Les dictionnaires de vocabulaire anglais sophistiqué

---

## ⚔️ Citation Finale

> *"Je n'emploierai pas le verbe pour paraître,  
> mais pour dire avec grandeur ce que je ressens avec vérité."*

> *"يد وحدة ما تصفقش"  
> (Une seule main ne peut pas applaudir)*

> *"Words are, of course, the most powerful drug used by mankind."  
> — Rudyard Kipling*

---

**Fait avec ❤️, panache ⚔️, authenticité 🕌, et éloquence 📚**

**30 minutes par jour pour trois langues magnifiques** 🌍
