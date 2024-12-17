1. Mot de passe crypté

Qu'est-ce que le chiffrement (cryptage) ?
Le chiffrement utilise un algorithme réversible pour transformer un mot de passe lisible en une version illisible (chiffrée).
Avec la clé de déchiffrement, il est possible de retrouver le mot de passe original.
Exemple :
Algorithmes courants : AES, DES, RSA.

Exemple avec AES :

"monMotDePasse123" → [Cryptage] → "85hfjhds983hf3n29w"

Déchiffrement :

"85hfjhds983hf3n29w" → [Clé] → "monMotDePasse123"

Inconvénient majeur :
Si un attaquant obtient la clé de chiffrement, il peut déchiffrer tous les mots de passe.
Le chiffrement n'est pas adapté pour les mots de passe stockés car il est réversible.


--------------------------------------------------------

2. Mot de passe hashé
Qu'est-ce que le hachage ?

Le hachage est un processus irréversible qui transforme une donnée (ex: mot de passe) en une chaîne de caractères fixe (appelée "empreinte").

Même sans clé, il est impossible de retrouver le mot de passe original à partir de l'empreinte.

Pour comparer un mot de passe, on le rehache et on compare les deux empreintes.

Exemple :
Algorithmes courants : MD5 (non sécurisé), SHA-256, bcrypt, Argon2.
Exemple avec SHA-256 :

"monMotDePasse123" → SHA-256 → "abc123def456ghi789..."

Salage des mots de passe :

Pour éviter que deux mots de passe identiques donnent la même empreinte, on utilise un sel (chaîne aléatoire ajoutée au mot de passe avant le hachage).

"monMotDePasse123" + "selAléatoire" → SHA-256 → "ds6s8df89h43..."

-------------------------------------------------------------

Comparaison : Mot de passe crypté vs hashé

Critère	                    Crypté	                            Hashé
Réversibilité	            Réversible (peut être déchiffré).	Irréversible (impossible de le retrouver).
Objectif	                Protéger temporairement une donnée.	Stocker des
                                                                mots de passe
                                                                en toute sécurité.
Exemple d'utilisation	    Transfert de données sécurisées.	Stockage sécurisé des
                                                                mots de passe.
Sécurité	                Risqué si la clé est compromise.	Sécurisé si le hachage
                                                                est fort + salé.

--------------------------------------------------------

3. Quelle est la meilleure pratique pour les mots de passe ?
La meilleure solution pour stocker des mots de passe est :

Utiliser un algorithme de hachage sécurisé :

Privilégie bcrypt, Argon2 ou SHA-256 avec un sel.
Évite MD5 ou SHA-1, car ils sont vulnérables aux attaques.
Ajouter un sel pour chaque mot de passe :

Un sel unique empêche les attaques par rainbow table (table de correspondance de hachages pré-générés).

----------------------------------------------------------

Conclusion : Pourquoi le hachage est préférable ?

Le hachage est irréversible, donc même si la base de données est piratée, les mots de passe ne peuvent pas être facilement retrouvés.
Le chiffrement (cryptage) est réversible et donc moins sécurisé pour le stockage des mots de passe.
Utilise toujours des algorithmes modernes comme bcrypt ou Argon2 pour garantir une sécurité optimale.