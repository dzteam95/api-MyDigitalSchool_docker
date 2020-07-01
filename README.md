# api-MyDigitalSchool


DOCKER - API REST MYDIGITALSCHOOL

This  is a project school MBA EXPERT IN WEB & DIGITAL 1st promotion 

Description

Includes API endpoints 

Posting infos (List, Edit ,update , delete)
https://www.getpostman.com/collections/438c8b9830ef2a831d84


Structure
In folder server  we will find a Dockerfile to build the image:

./app/Dockerfile

In main repository we will find a docker-compose.yml to set containers launching:

./docker-compose.yml


⚙️ Setup Composing
Dockerfile content:

FROM: Use a lighter version of Node as a parent image

WORKDIR: Set the working directory

COPY: Copy the current directory contents into the container at /api

RUN: install dependencies

EXPOSE: Make port XXXX available to the world outside this container

CMD: Run the app when the container launches

In docker-compose.yml:

we will find there the version and the services of deployment


Install & Deployment

Use docker:

:$ docker-compose up --build or docker-compose up -d --build

Shutdown if necessary: :$ docker-compose down


Pactical basic for npm package manager

 run 

:$ npm install

:$ npm start



Note

Connection db mongodb://mongodb:27017


local : https://localhost:3000


Technologies

Mongodb (database)

Express (node.js framework)

Node (tool javascript environment)

Docker (CGROUP + Namespace)

CGROUP (Partitioning ressources - system, memory, networks)

Namespace (Insulation for the creation of a container)


🆙 Registry Docker bonus step
Push image to Registry in public
Build images 

:$ cd ./app

$ docker build -t server:1.0 .

:$ docker images or docker images ls

You can see REPOSITORY and IMAGE ID 


Configuration of the local cluster with docker-compose

Execute the command to execute the config of the config file


$docker-compose up

Once the containers instantiated, I will connect to the container mongoset1

$docker exec -it mongoset1 mongo

configuration for launching the replica set.

$config = {
    _id:"my-mongo-cluseter",
    members:[
        {_id:0, host:"mongoset1:27017"},
        {_id:1, host:"mongoset2:27017"},
        {_id:2, host:"mongoset3:27017"},
    ]
};
Then :
$rs.initiate(config);


If you want to login to your atlas or local database just switch url in config/db.config.js
s

 
