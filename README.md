# api-rest-persons
Api Rest that performs requests on people managed in a custom database.

## Install

1 - First the database contained in the database directory is generated.

2 - The repository is downloaded.

3 - The following command is executed:
```
yarn install
```
command to install the dependencies.

4 - To run the api service, the following command is executed 
```
yarn start
```

5 - To access the data we place the following addresses in our browser:
```
GET     http://localhost:5000/Persons             //Bring all records

POST    http://localhost:5000/Persons             // Create new records

PUT     http://localhost:5000/Person/{id}         // Update record existing

DELETE  http://localhost:5000/Person/{id}         // Delete record existing
```

## Technologies used

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Browsers support

![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)
