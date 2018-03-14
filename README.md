[![Codacy Badge](https://api.codacy.com/project/badge/Grade/293b6e4410f447ed9466d10dc0cc950f)](https://www.codacy.com/app/andre.maldonado/habitica-slack-integration?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andremaldonado/habitica-slack-integration/&amp;utm_campaign=Badge_Grade)

# Habitica-Slack Integration
**This a command-line app for slack that lets you create and retrieve your habitica todos.**

## Initial local environment configuration
- Clone repo.
- Download [ngrok](https://ngrok.com/);
- Install node;
- Go to the folder and install dependencies with npm (you could be prompted to install npm if you don't have it yet);
```
npm install
```

## Running the program
- Start ngrok on the correct port;
- Create a [slack app](https://api.slack.com/apps/) with the same configuration this program uses;
  - Command: /habitica;
  - Request URL: your-ngrok-url;
  - Short description: for testing purposes, whenever you want;
  - Usage hint: for testing purposes, whenever you want.
- Get client_id and client_secret from your slack app;
- Get User ID and API Token from habitica;
- Setup these enviroment variables:
  - SLACK_CLIENTID
  - SLACK_CLIENTSECRET
  - HABITICA_USERID
  - HABITICA_APITOKEN
  - Tip: if you create a file named appenv to store your enviroment variables, git will ignore it!
- Install your slack app in a slack team of your choice;
- Start node;
- Grab a cup of coffe and be happy.
