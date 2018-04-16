[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0d9ff80136a54fc0b8b423df801d87a8)](https://www.codacy.com/app/andre.maldonado/habitica-slack-integration?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andremaldonado/habitica-slack-integration/&amp;utm_campaign=Badge_Grade)

# Habitica-Slack Integration
**This a command-line app for slack that lets you create and retrieve your habitica todos.**

## Initial local environment configuration
- Install [Docker](https://docs.docker.com/install/)
- Clone repo
- Download [ngrok](https://ngrok.com/)
- Navigate to the folder of the repo
- Create docker image:
```
docker build -t habitica-slack .
```

## Running the program
- Start ngrok on the correct port;
```
./ngrok http 3394
```
- Create a [slack app](https://api.slack.com/apps/) with the same configuration this program uses;
  - Command: /habitica;
  - Request URL: your-ngrok-url;
  - Short description: for testing purposes, whenever you want;
  - Usage hint: for testing purposes, whenever you want.
- Get client_id and client_secret from your slack app;
- Get User ID and API Token from habitica;
- Setup these enviroment variables in a file:
  - SLACK_CLIENTID
  - SLACK_CLIENTSECRET
  - HABITICA_USERID
  - HABITICA_APITOKEN
  - Tip: if you create a file named appenv to store your enviroment variables, git will ignore it!
- Install your slack app in a slack team of your choice;
- Run docker image with port forwarding and setting up your environment variables
```
docker run --env-file [your-file-here] -p 3394:3394 habitica-slack
```
- Grab a cup of coffe and be happy.
