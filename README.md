# KISS | Keep It Short & Simple
**KISS - Keep It Short & Simple** is URL Shortener application; similar to TinyUrl and Bitly. It will accept long url and return a shorter one instead. This repo consists 2 sub-repo; FrontEnd and BackEnd.

## Production URL
https://kiss-tmsuw.mongodbstitch.com/

## Tech Stacks
KISS was originally developed using **MERN** (MongoDB, Express, React, NodeJS). However later during the deployment stage, this was change/convert to **MRR** (MongoDB Realm, React) as it is much more easier and it's serverless (and always available too!).

### FrontEnd
Use **React** (and **Bootstrap** for styling). Just another normal SPA application that connects to the API developed in BackEnd.

### BackEnd (Latest)
For BackEnd, we use **MongoDB Realm** to replace NodeJS and Express.

#### MongoDB Realm API
Below is the list of available APIs to be used that's hosted in MongoDB Realm.

- Get all urls
````
GET | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kiss-tmsuw/service/kiss/incoming_webhook/urls
REQUEST BODY: N/A
RESPONSE BODY: 
[
    {
        "_id": {
            "$oid": "619b88f3d35d00ad7abd2a20"
        },
        "code": "vj5zankq",
        "longUrl": "https://github.com/LianaAli/keep-it-short-simple/"
    },
    ...
]
````

- Get url details by code (replace `{{code}}` with actual code)
````
GET | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kiss-tmsuw/service/kiss/incoming_webhook/url?code={{code}}
REQUEST BODY: N/A
RESPONSE BODY: 
{
    "_id": {
        "$oid": "619b88f3d35d00ad7abd2a20"
    },
    "code": "vj5zankq",
    "longUrl": "https://github.com/LianaAli/keep-it-short-simple/"
}
````

- Create url from long url (replace the `{{longUrl}}` with actual long url)
````
POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kiss-tmsuw/service/kiss/incoming_webhook/url-new
REQUEST BODY: 
{
    "longUrl": "{{longUrl}}"
}

RESPONSE BODY: 
{
    "_id": {
        "$oid": "619b88f3d35d00ad7abd2a20"
    },
    "code": "vj5zankq",
    "longUrl": "https://github.com/LianaAli/keep-it-short-simple/"
}
````

### BackEnd (Decommissioned)
BackEnd folder in this repo was developed using **NodeJS, Express with MongoDB** as it's database. No worries, what's in MongoDB Realm is pretty much have the same syntax as what's in here.

## Developer Guide
Follow below steps to setup/configured this repo into your machine/servers.

### FrontEnd
1. Download and save this repo into your machine.
2. Go to the folder in Step#1, click on `/frontend`.
3. Open your terminal/GitBash. Ensure you are in `/frontend` folder/directory.
4. Run `npm install`. It will install all the dependencies accordingly.
5. Once Step#4 completed, you should see there's `/node_modules` folder created in `/frontend` folder.
6. While in `/frontend` folder, run `npm start`. It should open up a browser with `http://localhost:3000`.
7. Voilaa! You're good to go!

**Bonus:** To build and deploy the apps, run `npm run build`.

### BackEnd (optional)
Since KISS no longer use this Backend folder, this is optional. In case you still want to use this instead of the MongoDB Realm API, no problem! Just follow below steps.

1. Assuming that you already have this repo already downloaded/saved, go to that folder.
2. Click on `/backend`.
3. Open your terminal/GitBash. Ensure you are in `/backend` folder/directory.
4. Run `npm install`. It should install all the dependencies.
5. Once Step#4 completed, you should see there's `/node_modules` folder created in `/backend` folder.
6. While in `/backend` folder, run `nodemon server`.
7. It should now running on `http://localhost:5000`.

### Bonus!
To connect FrontEnd and BackEnd from this repo, just update the value in below files. It should be easy!

1. `/frontend/src/http-common.js`
Change the `baseUrl` to `http://localhost:5000` (BackEnd > Step#7)

2. `/frontend/services/kiss.js`
Change the url endpoints accordingly.
- `/urls` => `/`
- `/url?code={{code}}` => `/:code`
- `/url-new` => `/`

## Versions with Release Notes (What's New!)
List of KISS versions and what's coming.

### v1.0.0
Initial release with basic functionalities and UI with error handling.

### v1.0.1 (coming soon!)
Improvement on the UI and refractoring the MongoDB Realm functions and services.

---

#### Special Notes
Feedbacks are most welcome! Please feel free to contribute too. :)