# National Bootcamp - Week Nine Project Brief

Click the link to see the [Project Guidelines](https://github.com/SchoolOfCode/project-guidelines/blob/master/project-week.md)

## Features

Allows data to be exchanged between Heroku database and React front-end.
Scripts for initial set-up and edit of database.
Express.js routing

## Skills & Tech

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)


## File Structure

``` MD
project
│   README.md
│       
│
└───db
│    │ index.js 
│    │  
│    │
│    └───scripts
|        |
│        │ createTable.js
│        │ deleteTable.js
│        │ populateTable.js
│   
└───models
|    │   
|    | resources.js
|    
|    
|
└───node-modules
|
|
|
└───routes
|       | 
|       | index.js
|       | plan.md
|
|---.env
|
|---.gitignore
|
|---app.js
|
|---package-lock.json
|
└───package.json

```

## Scripts

```bash
  cd code-bandits
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Run in dev mode

```bash
  npm run dev
```

Run tests

```bash
  npm run test
```

Create, delete and populate a table

```bash
  npm run db:createTable
```

```bash
  npm run db:deleteTable
```

```bash
  npm run db:populateTable
```
