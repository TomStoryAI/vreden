# VredenOnline

This project is part of an initiative to digitze a german village called Vreden.

In this project I have used Angular's PWA capacities, to create a QRCode Scanner for the real world. You should be able to access it here:

https://vreden-online.appspot.com/

# Installation Instructions

run the following:
```javascript
npm install
ng serve
```

On your local device you can then head over to localhost:4200 to see the app in your preferred browser. 

# Deployment

For deployment purposes I am using google cloud. Simply create a Google Cloud Project, create an API Key and add it to app.yaml.

Afterwards run this:
```javascript
ng build --prod
gcloud app deploy
```

