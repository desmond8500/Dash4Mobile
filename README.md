# Dash Mobile

## Description

Application mobile Dash

## Générer l'APK

```console
ionic build --prod
mv www/browser/* www/
npx cap sync
./gradlew assembleDebug
```
