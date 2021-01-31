# TODO PERN STACK APP
* **Postgres (Database)**
* **Express (Backend)**
* **React (Frontedn)**
* **Node Js (Server)**
* Bootstrap
* Development platform Windows 10
* Latest version React, Express, Node JS

## Installation and Setup
#### Databse setup
1. Download postgres and install postgres. 
2. Go to the `server` directory and update the credentials for databases by editing `db.js` file.
3. Login to postgres cli using `psql -U postgres`
4. Install extension for uuid using `create extension if not exists "uuid-ossp";`
5. Create database using `CREATE DATABASE authtodolist;`
6. Create table **users**  using `
     CREATE TABLE users(
          user_id UUID DEFAULT uuid_generate_v4(),
          user_name VARCHAR(255) NOT NULL,
          user_email VARCHAR(255) NOT NULL UNIQUE,
          user_password VARCHAR(255) NOT NULL,
          PRIMARY KEY (user_id)
        );`
7. Create table **todos** using `
    CREATE TABLE todos(
      todo_id SERIAL,
      user_id UUID,
      description VARCHAR(255) NOT NULL,
      PRIMARY KEY (todo_id),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );`
#### Backend setting up:
1. `cd` to the **server** directory in the project directory.
2. Run the following commands -
`npm init -y`
`npm i express cors pg jsonwebtoken bcrypt`
`npm i dotenv`
#### Frontedn setting up
1. `cd` to the **client** directory in the project directory.
2. Run the following commands -
`npx create-react-app client`
`npm start`
`npm i react-router-dom react-toastify`
`npm install jquery --save`
#### Running project
1. `cd` to the **server** directory and run following command.
2. `node server.js`
3. `cd` to the **client** directory and run following command.
4.  `npm start`
5. If you getting some error in frontend regarding react router dom then 	`cd` to the client directory and run `npm i react-router-dom react-toastify` again.

#### Security measures
1. `uuid` is used for hashed id generation
2. `JWT` is for user authorization and password modifying before it save to databse.

#### Third part api
- Bootstrap 4 cdn used

#### Deployment
1. This project can be deployed to heroku
2. Deployment instruction will be updated soon.