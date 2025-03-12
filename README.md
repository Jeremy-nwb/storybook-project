# Projet test Storybook

🔹 Pourquoi utiliser Storybook ?

- ✅ Développer et tester des composants isolément (sans backend ni navigation)
- ✅ Avoir une bibliothèque de composants réutilisables pour ton équipe
- ✅ Faciliter le design system (test des styles, variantes, accessibilité)
- ✅ Créer de la documentation automatique pour les devs et designers
- ✅ Tester les interactions et variantes dynamiquement

👉 En gros, Storybook est comme un bac à sable pour tes composants !

## Lancer Storybook

```sh
npm run storybook
```

## Ajouter un component

- Ajouter un component dans `src/components`
- Ajouter un story dans `stories` pour que le composant s'ajoute automatiquement dans storybook en front

## Possibilité d'ajouter des tests automatisés (@storybook/testing-library)

- Exemple, simuler un click
