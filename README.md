# 🌤️ WeatherApp

Une application météo mobile développée avec **React Native** et **Expo**, offrant des prévisions météo en temps réel basées sur la géolocalisation.

---

## 📱 Aperçu

<p align="center">
<img width="445" height="928" alt="Accueil application météo" src="https://github.com/user-attachments/assets/54aed776-9880-4431-8cff-abc597e022a2" />
</p>

---

## ✨ Fonctionnalités

- 📍 **Géolocalisation** — détection automatique de la position de l'utilisateur
- 🌡️ **Météo en temps réel** — température, humidité, vent, conditions actuelles
- 📅 **Prévisions** — consultez les prévisions à venir
- 🎨 **Interface moderne** — design soigné avec dégradés et animations fluides
- 📲 **Multiplateforme** — compatible iOS et Android

---

## 🛠️ Stack technique

| Technologie | Version |
|---|---|
| React Native | 0.81.5 |
| Expo | ~54.0.32 |
| Expo Router | ~6.0.22 |
| TypeScript | ~5.9.2 |
| React | 19.1.0 |

**Librairies notables :**
- `expo-location` — géolocalisation
- `expo-linear-gradient` — dégradés visuels
- `@gorhom/bottom-sheet` — panneaux glissants
- `react-native-reanimated` — animations performantes
- `react-native-gesture-handler` — gestion des gestes

---

## 🚀 Installation & lancement

### Prérequis

- [Node.js](https://nodejs.org/) v18+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Application **Expo Go** sur votre téléphone (iOS / Android) ou un émulateur

### Cloner le projet

```bash
git clone https://github.com/FarCodeFR/WeatherApp.git
cd WeatherApp
```

### Installer les dépendances

```bash
npm install
```

### Démarrer l'application

```bash
npx expo start
```

Scannez le QR code avec l'application **Expo Go** ou lancez sur un émulateur :

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

---

## 📁 Structure du projet

```
WeatherApp/
├── api/              # Appels à l'API météo
├── app/              # Routes et écrans (Expo Router)
├── assets/           # Images, icônes, polices
├── components/       # Composants réutilisables
├── hooks/            # Hooks React personnalisés
├── services/         # Logique métier et services
├── types/            # Types et interfaces TypeScript
├── app.json          # Configuration Expo
└── package.json
```

---

## 🔧 Scripts disponibles

| Commande | Description |
|---|---|
| `npm start` | Démarre le serveur de développement Expo |
| `npm run android` | Lance sur émulateur / appareil Android |
| `npm run ios` | Lance sur simulateur / appareil iOS |
| `npm run web` | Lance la version web |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run reset-project` | Réinitialise le projet (efface le starter) |

---

<p align="center">Réalisé par <a href="https://github.com/FarCodeFR">FarCodeFR</a></p>
