1. npm i
2. npm i express
3. npm i nodemon
4. npm i ejs
5. auth folder created and register file created
6. login page
7. public folder created
8. css folder and login css file created
9. css link permission provide in app.js
10. app.use(express.static('public/css/'))
11. reusable components made i.e navbar.ejs
12. navabr.ejs acessed by register.ejs like this <%- include("../components/navbar.ejs) %>
13. npm i sequelize (for ORM, database connection, xampp install), npm i mysql2
14. Databse connection start by doing
15. Create config folder--> create file--> dbConfig.js
16. dbConfig export some code
17. create Model folder --> index.js file created --> userModel.js file created
18. import db in app.js
19. xampp mysql, apache start and manually create name LearningNodeJs in that phpmyadmin---> new Create database name
20. npm start
    check it worked or not
21. # i made blog table same like user
<!-- I made mistake like by writing email, usernmae, password in blog instead of title, subtitle, and description. here is solition  to update column from email, usernmae, password in blog into title, subtitle, and description.
 I Used below code to update the table's column name which was changed by mistake.

Blog.sync({ alter: true }).then(() => {
console.log("Blog table altered to match new schema!");
}); -->

22. # Frontend → (POST method) → Backend → (Sequelize) → Database "Data sending to DB for typical web app"

        F.E stands for Front End. It uses a POST method to send data to the B.E (Back End).

    The Back End then uses Sequelizer (which is an ORM for Node.js, typically used with databases like MySQL, PostgreSQL, etc.) to interact with the DB.

23. # app.post
24. Inside front end register form action and method written
25. registerd but undefined like error came to solve that inside app.js i write code

# app.use(express.urlencoded({ extended: true })); //server side rendering

# // app.use(express.json()); //if data come from reatc, vue other front end

26. # now this result came after register
    {
    username: 'username1',
    email: 'manager1@email.com',
    password: 'password1'
    }
    ..looks good
27. # For secure password, npm install bcrypt
28. # hased password by doing this
    const { username, email, password } = req.body;
    // const hashPassword = await bcrypt.hash(password, 10); /Do this /Or direct this below
    await db.users.create({
    username,
    email,
    password: bcrypt.hashSync(password, 10), // password: hashPassword, 10 is SALTROUND
    });

# bcrypt.hashSync is synchronous and will block the event loop until the hashing is done. This might be acceptable for low-traffic applications or during the initial development phase.

# bcrypt.hash is asynchronous and returns a promise (or uses a callback). It is non-blocking and generally preferred for production to avoid blocking the event loop.

# For Future Reference: This below is better

const { username, email, password } = req.body;
const hashPassword = await bcrypt.hash(password, 10);

    await db.users.create({
      username,
      email,
      password: hashPassword,
    });

    res.send("Registered successfully!!");

29. # Understand detail about the SALT_ROUNDS
30. # Validation, npm install Validation

    i.e Client side validation, server side validation,
    also checked client and server side validation using register form, and POSTMAN tool.Conclusion. we have to do both side validation.i.e c.s & s.s

31. # Login implemetation
32. # JWT, session, cookies

- npm install jsonwebtoken
  -cookie('jwtToken', token)-> cookie created

33. # Middleware
    it is like police at the boarder of Nepal and india. police restrict any illigal activity. Police only allow to enter people who is innocent and does not have any harm intion to their country. Middleware is the border police for my web application between client and server. It intercepts every request and response, performing critical checks, transformations, and logging to ensure security, reliability, and functionality.

# Middleware: "Show me your login token (username/password, JWT). Are you a valid user? Do you have permission to access this specific route?

34. # MVC pattern: folder structure, work as below
        CLIENT (Browser) → CONTROLLER (Receives request)-→ MODEL (Gets/processes data)-→ CONTROLLER (Receives data from Model) -→ VIEW (Template + Data = Final HTML/UI)-→ CLIENT (Sees the rendered View)

# Controller handles the logic flow

# Model manages data, table, and business logic

# View is the presentation layer that the Controller sends back to the Client

35. # Routes = The "Receptionist" or "Traffic Police"
    Routes act as the initial entry point that directs incoming requests to the appropriate Controller.
    CLIENT (Browser)
    → ROUTES (Receives request first, decides where to send it)
    → CONTROLLER (Specific controller method handles the request)
    → MODEL (Gets/processes data)
    → CONTROLLER (Receives data from Model)
    → VIEW (Template + Data = Final HTML/UI)
    → CLIENT (Sees the rendered View)
36. # controller folder created and messy code manages, imported logic in the authController
