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
- Setup envvars (SLACK_CLIENTID, SLACK_CLIENTSECRET);
- Install your slack app in a slack team of your choice;
- Start node;
- Grab a cup of coffe and be happy.
