# ZoneGame — site de commande gaming

Site statique prêt à personnaliser pour Free Fire MENA / PUBG Europe.

## Fichiers
- index.html : page complète
- style.css : design responsive
- app.js : sélection des packs + génération de commande WhatsApp
- README.md : instructions

## Avant publication
1. Dans `app.js`, remplace `261XXXXXXXXX` par ton numéro WhatsApp professionnel au format international, sans + ni espaces.
2. Modifie les prix Free Fire dans `index.html` si nécessaire.
3. Ajoute les prix PUBG dans `index.html` ou dans une future version.
4. Le paiement USSD affiché est celui fourni pour ton projet : `*111*1*2*0381093212*MONTANT*2*0*#`.

## Workflow actuel
Client -> choisit le pack -> saisit UID -> paie -> envoie la commande WhatsApp -> tu vérifies -> tu recharges manuellement via ton fournisseur -> tu confirmes au client.

Pour une automatisation complète, il faudra ensuite connecter un backend + API fournisseur + système de paiement. Ne mets jamais une clé API fournisseur dans `index.html` ou `app.js`.
