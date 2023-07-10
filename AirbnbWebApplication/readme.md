# Introduction
Web application to test the model. The application was built with:
- ReactJS: frontend;
- Django: backend;
- MySql: database.

# How to run the application?
In order to run the backend you should have <strong>Docker</strong> installed. Follow these steps to run the application:
Put yourself in the "AirbnbWebApplication/backend" folder and run:
```sh
docker compose up
```
from your console:
- You can access the server at “localhost:8080”;
- You can view the database using Adminer at “localhost:8000”.
When everything’s up, go to the <em>AirbnbWebApplication/backend</em> folder and run:
```sh
docker exec -i mysql mysql -uadmin -padmin db_airbnb < airbnb.sql
```
This will copy the database to the mysql container. Note that in Windows you might need to execute this command instead:
```sh
cmd /c “docker exec -i mysql mysql -uadmin -padmin db_airbnb < airbnb.sql”
```

In order to run the frontend, you should have <strong>Node.js</strong> installed. Just go to the "AirbnbWebApplication/frontend" folder and execute:
```sh
npm install
```
to install the dependencies. Finally run:
```sh
npm start
```
to run the web application. You can access it from “localhost:3000”.

# Can I see how it works?
In the "Demo" folder you can find some videos that show how the application works.