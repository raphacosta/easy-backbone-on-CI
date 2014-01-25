# Easy Backbone on CI

I was initially making this for a fellow developer that was struggling to find a reliable and easy to use sample of a Backbone app running on  CodeIgniter.

Well, this is it. I believe that if you follow this carefully, you shouldn't need to change much before seeing it working.

First of all, I would like to thank Phil Sturgeon for his Rest Library. It has saved me hours and hours of development. Phil, I appreciate your work.

This backbone implementation is completely based on Thomas Davis' Backbone Boilerplate (https://github.com/thomasdavis/backboneboilerplate). I don't think there's any better out there. Differently from most samples, I haven't focused on the Look & Feel of it. I rather concentrated on the functionality + RestAPI integration. You will OK with implemeting the look & feel.

## Description

I think Thomas Davis has the best description of the current scenario:

Javascript currently lacks a native way to organized your code into modules unlike other languages. This has lead to developers writing spaghetti code or using global variable namespaces which both end diastrously when scaling.

I'm sure most people understand the benefits of 'modularized' code. But due to the nature of front-end development it has been quite disregarded up until now.

**AMD and Require.js**
Asynchronous Module Definitions designed to load modular code asynchronously in the browser and server. It is actually a fork of the Common.js specification. Many script loaders have built their implementations around AMD, seeing it as the future of modular Javascript development.

Backboneboilerplate.com supports Require.js the default AMD loader. It has a vibrant open-source ecology.

## Libraries in Use
We were building this for a project utilising the following:

RequireJS
Backbone
Bootstrap
Handlebars
jQuery
Lodash
Underscore
Node

## Get Started
Pretty much, you will need the following to start:

Simply clone the repo and serve the files on a http server (nginx, apache)

`git clone https://github.com/raphacosta/easy-backbone-on-CI.git`

Alternatively run

`node build/server`

You may need to install Express

`npm install express`

## File Structure
The CI part of the project is sitting on the api/ folder. 

Make sure your ste your base_API_Path for your API on the config file (api/application/config/config.php).

`$config['base_API_Path'] = 'http://yourAPI.com/v1.0/';`

You must pay attention and observe the following folders:

**CI:**
app/api/application/config/ => your configuration will be here. Although not much will be needed to change, it's always good to watch it closely.
app/api/application/controllers/ => your Restfull API will be consumed from here. On this specific example, I'm fetching from a external API.

**Backbone:**
Your backbone stack will be composed by the following folder on root:
app/js/
app/js/colletions
app/js/libs
app/js/models
app/js/views

**Common Assets:**
app/css
app/images
app/templates

**Node:**
app/node_modules/

**Build:**
The boilerplate project contains a `build` folder and is designed to be a one line execution optimization process.

Make sure you have node.js installed
Execute ./build.sh from inside the build folder
Find your ready to go application in `/build/output`

The build process uses the require.js optimizer called r.js, it traverses through the dependency list and compiles and minifies them intelligently.

Using r.js once again it runs over styles.css and inlines all the style sheets into one and then minifies the file.

Finally it creates a directory for your output and replaces the relative path to require.js with the latest version hosted on cdnjs.com

You should now have one Javascript file, one CSS file and the index.html


## Contact
If you got stuck and you need help, give me a shout and I will reply ASAP.


*   [@raphacosta](http://twitter.com/raphacosta) on twitter
*   Github - https://github.com/raphacosta
*   raphael@hashtagit.co.za
