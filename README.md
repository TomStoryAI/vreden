# VredenOnline

This project is part of an initiative to digitze a german village called Vreden.

In this project I have used Angular's PWA capacities, to create a QRCode Scanner for the real world. You should be able to access it here:

https://vreden-online.appspot.com/

# Installation Instructions

It is important to have [Angular](https://angular.io/guide/setup-local) and [NodeJS]("https://nodejs.org/en/download/") installed! Make sure you can access both from your console by typing:

```
npm -version //Which would show:
PS C:\Users\not> npm -version
6.4.1
ng version // Which Would show:
PS C:\Users\not> ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 7.3.8
Node: 10.15.0
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.13.8
@angular-devkit/core         7.3.8
@angular-devkit/schematics   7.3.8
@schematics/angular          7.3.8
@schematics/update           0.13.8
rxjs                         6.3.3
typescript                   3.2.4
```

Afterwards run the following:
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

# New Schnitzel

Head over to qrcode.component.html and add new Schnitzel's by using the ```<app-schnitzel>``` Selector. Styling of individual Schnitzels can be done on the Schnitzel component.

