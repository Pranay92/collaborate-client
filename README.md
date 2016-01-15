## lets-chat-client

Client for [collaborate](https://github.com/Pranay92/collaborate) server.

#### Setup and installation

1. Make sure you have **bower** installed.
2. From the root execute ````bower install```` for dependencies installation. Prefix a ````sudo```` if you get permission errors.
3. Add **config.js** in the root of the directory. [Instructions](https://github.com/Pranay92/collaborate-client/wiki/Config)

#### Deploying

The simplest way to deploy the client locally is by using python with the following command:

````python -m SimpleHTTPServer````

this will deploy the directory along with index.html as a default at ````localhost:8000````.

#### Technology stack

1. [Bootstrap-material](https://fezvrasta.github.io/bootstrap-material-design/) - for UI.
2. [AngularJS](angularjs.org) - as a primary frameowork.
3. [ReactJS](https://facebook.github.io/react/) - for quickly rendering dom elements.


#### TODO

~~1. Move config to .gitignore so that can be used as per requirements.~~
