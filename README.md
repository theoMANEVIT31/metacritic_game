Commande création base de données :

CREATE DATABASE metacritic
CHARACTER SET utf8
COLLATE utf8_general_ci;


Commandes d'installation des modules manquants : 

npm install axios,
npm install sequelize

(Ces modules n'ont pas étaient déposé sur le git, car trop volumineux.)


API externe utiliser : IGDB
Documentation de l'api externe : https://api-docs.igdb.com/?javascript

Notre projet consiste a créé une API qui permette aux utilisateurs de voir des tests de jeux vidéos ainsi que de les notés et de mettre un commentaire.
Il y a différents rôles : - Les éditeurs : Ce sont ceux qui créent les tests des jeux
                          - Les utilisateurs : Ce sont ceux qui si un test existe peuvent mettre une note au jeu et un commentaire
Nous utilisons l'API externe IGBD qui nous permet d'avoir accès à une très grande liste de jeux.
Nous faisons appel à cette API lorsqu'un éditeur crée un test, pour ne pas stocker tous les jeux.


# Metacritic Game API

This API provides endpoints for managing users, editors, critics, reviews, and titles in the Metacritic Game platform.

## Users

- **GET Users**
  - Endpoint: `GET /users`
  - Description: Get a list of all users.

- **POST User**
  - Endpoint: `POST /users`
  - Description: Create a new user.
  - Request Body:
    ```json
    {
      "pseudo": "user_3",
      "email": "user_3@gmail.com",
      "hashedPassword": "user_mdp"
    }
    ```

- **PUT User**
  - Endpoint: `PUT /users/:idU`
  - Description: Update a user by ID.
  - Request Body:
    ```json
    {
      "idU": 1,
      "pseudo": "user_2",
      "email": "user_2@gmail.com",
      "hashedPassword": "user_mdp"
    }
    ```

- **GET User by ID**
  - Endpoint: `GET /users/:idU`
  - Description: Get a user by ID.

- **DELETE User by ID**
  - Endpoint: `DELETE /users/:idU`
  - Description: Delete a user by ID.

## Editors

(Repeat the above structure for Editors, CriticsEditors, Reviews, CriticsUsers, and Titles)

...

## Titles

- **GET Titles**
  - Endpoint: `GET /titles`
  - Description: Get a list of all titles.

- **GET Title by ID**
  - Endpoint: `GET /titles/:titleId`
  - Description: Get a title by ID.
  - Example: `GET /titles/007%20Legends:%20Skyfall`
