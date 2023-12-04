Commande création base de données :

CREATE DATABASE metacritic
CHARACTER SET utf8
COLLATE utf8_general_ci;

API externe utiliser : IGDB
Documentation de l'api externe : https://api-docs.igdb.com/?javascript

Notre projet consiste a créé une API qui permette aux utilisateurs de voir des tests de jeux vidéos ainsi que de les notés et de mettre un commentaire.
Il y a différents rôles : - Les éditeurs : Ce sont ceux qui créent les tests des jeux
                          - Les utilisateurs : Ce sont ceux qui si un test existe peuvent mettre une note au jeu et un commentaire
Nous utilisons l'API externe IGBD qui nous permet d'avoir accès à une très grande liste de jeux.
Nous faisons appel à cette API lorsqu'un éditeur crée un test, pour ne pas stocker tous les jeux.
