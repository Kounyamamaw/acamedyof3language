# 🚀 GUIDE DE DÉPLOIEMENT SUR VERCEL
## L'Académie des Trois Langues

---

## 🎯 Objectif

Héberger **gratuitement** votre application sur Vercel pour y accéder depuis n'importe quel appareil (mobile, ordinateur, tablette).

### Avantages de Vercel

✅ **Gratuit illimité** pour les projets personnels  
✅ **HTTPS automatique** (sécurisé)  
✅ **URL personnalisée** (ex: `academie-trilingue.vercel.app`)  
✅ **Déploiement en 1 clic**  
✅ **Mises à jour automatiques** depuis GitHub  
✅ **Performance optimale** (CDN mondial)

---

## 📋 ÉTAPE PAR ÉTAPE

### PRÉREQUIS

Avant de commencer, assurez-vous d'avoir :
- [ ] Un ordinateur (Windows, Mac, ou Linux)
- [ ] Une connexion Internet
- [ ] Le projet `academie-trilingue` extrait sur votre ordinateur

---

### ÉTAPE 1 : Créer un Compte GitHub

GitHub est une plateforme pour héberger du code. C'est gratuit et nécessaire pour Vercel.

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **"Sign up"** (S'inscrire)
3. Remplissez le formulaire :
   - Nom d'utilisateur
   - Email
   - Mot de passe
4. Vérifiez votre email
5. ✅ Vous avez un compte GitHub !

---

### ÉTAPE 2 : Installer Git

Git est un outil pour gérer votre code.

#### Sur Windows

1. Téléchargez [Git for Windows](https://git-scm.com/download/win)
2. Lancez l'installateur
3. Utilisez toutes les options par défaut
4. Cliquez sur "Next" puis "Install"
5. À la fin, cochez "Launch Git Bash" et cliquez sur "Finish"
6. ✅ Git est installé !

#### Sur Mac

1. Ouvrez le **Terminal** (Applications → Utilitaires → Terminal)
2. Tapez cette commande et appuyez sur Entrée :
   ```bash
   git --version
   ```
3. Si Git n'est pas installé, il s'installera automatiquement
4. ✅ Git est installé !

#### Sur Linux

1. Ouvrez le **Terminal**
2. Selon votre distribution :
   ```bash
   # Ubuntu/Debian
   sudo apt-get install git
   
   # Fedora
   sudo yum install git
   
   # Arch
   sudo pacman -S git
   ```
3. ✅ Git est installé !

---

### ÉTAPE 3 : Configurer Git (Première Utilisation)

1. Ouvrez **Git Bash** (Windows) ou **Terminal** (Mac/Linux)
2. Configurez votre nom :
   ```bash
   git config --global user.name "Votre Nom"
   ```
3. Configurez votre email (celui de GitHub) :
   ```bash
   git config --global user.email "votre.email@example.com"
   ```
4. ✅ Git est configuré !

---

### ÉTAPE 4 : Créer un Repository sur GitHub

1. Connectez-vous sur [github.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Remplissez le formulaire :
   - **Repository name** : `academie-trilingue`
   - **Description** : "Application trilingue pour apprendre le français, le darija et l'anglais"
   - **Visibility** : **Public** (gratuit) ou **Private** (si vous le préférez)
   - ⚠️ **NE COCHEZ PAS** "Initialize this repository with a README"
5. Cliquez sur **"Create repository"**
6. ✅ Votre repository est créé !

**Gardez cette page ouverte**, vous en aurez besoin.

---

### ÉTAPE 5 : Pousser Votre Code sur GitHub

1. Ouvrez **Git Bash** (Windows) ou **Terminal** (Mac/Linux)

2. Naviguez vers le dossier du projet :
   ```bash
   cd chemin/vers/academie-trilingue
   ```
   
   **Astuce Windows** : Dans l'Explorateur de fichiers, faites Shift + Clic droit dans le dossier `academie-trilingue` → "Ouvrir Git Bash ici"

3. Initialisez Git :
   ```bash
   git init
   ```

4. Ajoutez tous les fichiers :
   ```bash
   git add .
   ```

5. Créez le premier commit :
   ```bash
   git commit -m "Académie des Trois Langues - Premier commit"
   ```

6. Ajoutez votre repository GitHub comme "remote" :
   
   Sur la page GitHub de votre repository, copiez l'URL HTTPS qui ressemble à :
   ```
   https://github.com/VOTRE-USERNAME/academie-trilingue.git
   ```
   
   Puis exécutez (en remplaçant par VOTRE URL) :
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/academie-trilingue.git
   ```

7. Créez la branche principale :
   ```bash
   git branch -M main
   ```

8. Poussez le code :
   ```bash
   git push -u origin main
   ```
   
   GitHub va vous demander vos identifiants :
   - **Username** : votre nom d'utilisateur GitHub
   - **Password** : votre mot de passe GitHub
   
   ⚠️ **Note** : Sur certains systèmes, vous devrez créer un **Personal Access Token** au lieu du mot de passe :
   - Allez sur GitHub → Settings → Developer settings → Personal access tokens → Generate new token
   - Donnez-lui un nom et cochez "repo"
   - Copiez le token et utilisez-le comme mot de passe

9. ✅ Votre code est sur GitHub !
   
   Rafraîchissez la page de votre repository sur GitHub pour voir vos fichiers.

---

### ÉTAPE 6 : Créer un Compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Sélectionnez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub
5. Choisissez un nom d'équipe (ou utilisez votre nom d'utilisateur)
6. ✅ Votre compte Vercel est créé !

---

### ÉTAPE 7 : Déployer sur Vercel

1. Sur le Dashboard Vercel, cliquez sur **"Add New..."** → **"Project"**

2. Vous verrez la liste de vos repositories GitHub
   - Trouvez **`academie-trilingue`**
   - Cliquez sur **"Import"**

3. Configuration du projet :
   
   Vercel détecte automatiquement que c'est un projet Next.js. Vérifiez que :
   - **Framework Preset** : Next.js
   - **Root Directory** : `./`
   - **Build Command** : `npm run build` (automatique)
   - **Output Directory** : `.next` (automatique)
   - **Install Command** : `npm install` (automatique)
   
   ⚠️ **Ne touchez à rien**, les valeurs par défaut sont parfaites !

4. Cliquez sur **"Deploy"**

5. **Attendez 1-3 minutes** ⏱️
   
   Vercel va :
   - Cloner votre repository
   - Installer les dépendances (`npm install`)
   - Compiler le projet (`npm run build`)
   - Déployer sur ses serveurs
   
   Vous verrez une belle animation de confettis 🎉

6. ✅ **VOTRE SITE EST EN LIGNE !**
   
   Vous verrez un message de succès avec votre URL :
   ```
   https://academie-trilingue.vercel.app
   ```
   (ou similaire)

7. Cliquez sur **"Visit"** pour voir votre site !

---

### ÉTAPE 8 : Accéder sur Mobile

Maintenant que votre site est en ligne, vous pouvez y accéder depuis n'importe quel appareil.

#### Sur iPhone (iOS)

1. Ouvrez **Safari**
2. Allez sur votre URL Vercel (ex: `https://academie-trilingue.vercel.app`)
3. Appuyez sur le bouton **Partager** (carré avec flèche vers le haut)
4. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
5. Nommez l'icône (ex: "Académie Trilingue")
6. Appuyez sur **"Ajouter"**
7. ✅ Une icône apparaît sur votre écran d'accueil !

#### Sur Android

1. Ouvrez **Chrome**
2. Allez sur votre URL Vercel
3. Appuyez sur le menu **⋮** (trois points en haut à droite)
4. Sélectionnez **"Ajouter à l'écran d'accueil"**
5. Nommez l'icône
6. Appuyez sur **"Ajouter"**
7. ✅ Une icône apparaît sur votre écran d'accueil !

---

## 🔄 METTRE À JOUR LE SITE

Une fois déployé, chaque fois que vous pousserez du code sur GitHub, Vercel redéploiera automatiquement votre site !

### Workflow de Mise à Jour

1. **Modifiez vos fichiers** localement (ex: changez le mot du jour)

2. **Sauvegardez et committez** :
   ```bash
   git add .
   git commit -m "Mise à jour du mot du jour"
   ```

3. **Poussez sur GitHub** :
   ```bash
   git push
   ```

4. **Vercel redéploie automatiquement** (1-2 minutes)

5. ✅ Votre site est à jour !

---

## 🎨 PERSONNALISER L'URL

Par défaut, Vercel vous donne une URL comme :
```
https://academie-trilingue.vercel.app
```

### Changer le Sous-Domaine Vercel

1. Sur Vercel Dashboard, allez dans votre projet
2. Cliquez sur **Settings**
3. Dans la section **Domains**, cliquez sur **Edit** à côté de votre domaine
4. Changez le sous-domaine (ex: `mon-academie-trilingue`)
5. Sauvegardez
6. ✅ Nouvelle URL : `https://mon-academie-trilingue.vercel.app`

### Utiliser Votre Propre Domaine

Si vous avez acheté un domaine (ex: `academie-langues.com`) :

1. Sur Vercel Dashboard → Settings → Domains
2. Cliquez sur **"Add"**
3. Entrez votre domaine
4. Suivez les instructions pour configurer les DNS chez votre registrar
5. ✅ Votre site sera accessible sur votre domaine personnalisé !

---

## 🔍 VÉRIFIER LE DÉPLOIEMENT

### Sur Vercel Dashboard

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur votre projet `academie-trilingue`
3. Vous verrez :
   - **Production Deployment** : votre site en ligne
   - **Deployments** : historique de tous les déploiements
   - **Analytics** : statistiques de visites (avec plan gratuit)

### Logs de Déploiement

Si un déploiement échoue :

1. Allez dans **Deployments**
2. Cliquez sur le déploiement qui a échoué
3. Consultez les **Build Logs** pour voir l'erreur
4. Corrigez l'erreur localement
5. Poussez à nouveau sur GitHub

---

## ❓ DÉPANNAGE

### Erreur : "command not found: git"

**Solution** : Git n'est pas installé. Retournez à l'ÉTAPE 2.

### Erreur : "Permission denied (publickey)"

**Solution** : Utilisez HTTPS au lieu de SSH :
```bash
git remote set-url origin https://github.com/VOTRE-USERNAME/academie-trilingue.git
```

### Erreur : "Authentication failed"

**Solutions** :
1. Vérifiez votre nom d'utilisateur et mot de passe GitHub
2. Créez un **Personal Access Token** :
   - GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token → Cochez "repo"
   - Utilisez le token comme mot de passe

### Le Site ne se Met pas à Jour

**Solution** :
1. Vérifiez que vous avez bien fait `git push`
2. Allez sur Vercel Dashboard → Deployments
3. Vérifiez que le dernier déploiement a réussi
4. Actualisez la page avec Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)

### Erreur de Build sur Vercel

**Solutions** :
1. Vérifiez les logs de build sur Vercel
2. Testez localement :
   ```bash
   npm install
   npm run build
   ```
3. Si ça fonctionne localement mais pas sur Vercel :
   - Assurez-vous que tous les fichiers sont poussés sur GitHub
   - Vérifiez que `.gitignore` n'exclut pas des fichiers nécessaires

---

## 📊 ANALYTICS ET STATISTIQUES

Avec Vercel (gratuit), vous pouvez voir :

1. **Nombre de visiteurs**
2. **Pages les plus consultées**
3. **Pays d'origine des visiteurs**
4. **Temps de chargement**

Pour y accéder :
- Vercel Dashboard → Votre projet → **Analytics**

---

## 🔒 SÉCURITÉ ET CONFIDENTIALITÉ

### Repository Public vs Privé

- **Public** : Tout le monde peut voir votre code (gratuit sur GitHub)
- **Privé** : Seul vous pouvez voir votre code (gratuit aussi sur GitHub)

⚠️ **Important** : Même si votre repository est **privé**, votre site Vercel est **public** et accessible par n'importe qui avec l'URL.

### Changer la Visibilité

Sur GitHub :
1. Repository → Settings
2. En bas de la page : **Danger Zone**
3. **Change visibility** → Private ou Public

---

## 💰 COÛTS

| Service | Plan Gratuit | Inclut |
|---------|--------------|--------|
| **GitHub** | ✅ Illimité | Repositories publics et privés |
| **Vercel** | ✅ Illimité | 100 GB bandwidth/mois, deployments illimités |
| **Total** | **0€ / mois** | Parfait pour usage personnel |

---

## 🎓 RESSOURCES SUPPLÉMENTAIRES

### Documentation

- **Next.js** : [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel** : [vercel.com/docs](https://vercel.com/docs)
- **Git** : [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub** : [docs.github.com](https://docs.github.com)

### Tutoriels Vidéo

- YouTube : "Deploy Next.js to Vercel"
- YouTube : "Git and GitHub tutorial for beginners"

### Communautés

- **Vercel Discord** : [vercel.com/discord](https://vercel.com/discord)
- **Next.js Discord** : [nextjs.org/discord](https://nextjs.org/discord)

---

## ✅ CHECKLIST COMPLÈTE

- [ ] Compte GitHub créé
- [ ] Git installé et configuré
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Compte Vercel créé (avec GitHub)
- [ ] Projet importé sur Vercel
- [ ] Site déployé avec succès
- [ ] URL testée sur navigateur
- [ ] App ajoutée à l'écran d'accueil mobile
- [ ] Premier entraînement effectué !

---

## 🎉 FÉLICITATIONS !

Vous avez maintenant :

✅ Un site web professionnel hébergé **gratuitement**  
✅ Accessible depuis **n'importe quel appareil**  
✅ Avec une **URL personnalisée**  
✅ Qui se **met à jour automatiquement**  
✅ Avec **HTTPS sécurisé**  
✅ Et des **performances optimales**

**Votre Académie des Trois Langues est prête !**

> *À vous de vous entraîner maintenant : 30 minutes par jour pour trois langues magnifiques !*

---

## 📞 BESOIN D'AIDE ?

Si vous rencontrez des difficultés :

1. Relisez attentivement ce guide
2. Consultez la documentation officielle
3. Cherchez sur Google : "Next.js Vercel deployment [votre erreur]"
4. Posez des questions sur :
   - [Stack Overflow](https://stackoverflow.com) (tag `next.js`)
   - [Vercel Discord](https://vercel.com/discord)

---

**Bon courage et que vos mots soient toujours nobles ⚔️, authentiques 🕌, et éloquents 📚 !**
