Step:-

1. npm i
2. npm i express
3. npm i nodemon
4. npm i ejs

nodemon :-
This a tool helpsto develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
/_
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"bob":" nodemon app.js" instead of "start": "nodemon app.js" // TO run bob.. use this in cmd, npm run bob
},
_/

app.use(express.static("public"));
/_
express.static is a built-in middleware in Express that serves static files (like images, CSS, JavaScript, etc.) from a specified directory.
Example: app.use(express.static("public")) will serve any file in the "public" directory as a static file.
_/

EJS (Embedded JavaScript)
/_
Tis a templating engine that allows you to generate HTML markup with JavaScript. It is used for dynamic content.
cmd: npm i ejs
_/
