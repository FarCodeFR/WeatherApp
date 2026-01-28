# WeatherAppMobile — Commandes & workflow (Expo / iOS Dev Client)

Ce projet utilise **Expo + expo-dev-client** (dev build) pour développer l’app sur :

- ✅ iPhone physique
- ✅ Simulateur iOS

> Important : un **Dev Client** nécessite **Metro** pour charger le JavaScript.  
> Tu peux travailler **sans internet**, mais **pas sans Metro**.

---

## Prérequis

- Xcode installé (et `xcode-select` configuré)
- CocoaPods installé (souvent déjà ok via Xcode)
- Un simulateur iOS disponible
- (Optionnel) iPhone branché en USB

---

## Scripts npm disponibles

Dans `package.json`, tu as :

- `npm start`  
  Lance Metro (serveur JS).  
  ⚠️ Pour dev-client, privilégie `npx expo start --dev-client`.

- `npm run ios`  
  Compile + installe l’app iOS (choisit l’appareil iOS disponible : iPhone branché ou simulateur).

- `npm run android`  
  Compile + installe l’app Android.

- `npm run web`  
  Lance l’app en version web.

- `npm run lint`  
  Lance le lint.

---

## Développement iOS — Dev Client (recommandé)

### 1) Installer / mettre à jour le Dev Client sur iOS

Cette commande compile et installe l’app native iOS.

#### Sur simulateur iOS (recommandé quand tu n’as pas ton iPhone)

```bash
npx expo run:ios --scheme "WeatherAppDev" --simulator
```
