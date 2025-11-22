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
37. # routes folder created and auth file crerated, RESTFUL route coded.
38. # questionController created, questionModel created deleted, index.js of modelm after making row of tablem created userid by seeding, i follwed step

db.users.hasMany(db.questions);
db.questions.belongsTo(db.users);

// Sync database
db.sequelize.sync({ force: true }).then(() => {
console.log("yes re-sync done");
});

# Do force:true --> for seeding --> npm start or run -> again Do force: false;

# same for answerModel.js like questionModel.js

39. # for askQuestion first built -> model-->views--> controller -->routes
40. # To handle image file package installed, npm install multer
41. # enctype="multipart/form-data" in image form, ejs file required
42. # askquestion garnu bhanda agadi tyo user login xa ki nai, valid user le question gari rako xa ki nai situtaion lai resolve garna middleware use garne i.e isAuthenticated.

    -- isAuthenticated.js file created -> token number extract from cookie --> verify token number->

    # use of next(), (a, b, c) -> execute code in order of a-b-c, but without next(), (a, b, c) --> execute a, then exit code

43. # import isAuthenticated in questionRoute

# Key Points:

req.cookies - Contains cookies sent FROM the client TO the server

res.cookie() - Method used to SET cookies FROM the server TO the client

Error Handling: Without try/catch, an invalid token will throw an unhandled promise rejection and crash your server.

44. # cookie-parser import in app.js using npm install cookie-parser
45. # userId null problem solved in middleware

const data = await db.users.findByPk(decryptedResult.id);
if (!data) {
return res.send("No user belong to that id");
}
req.userId = decryptedResult.id;
next();

46. # use isAuthenticated middleware to restrict the invalid user to access the askquestion page.

    questionRouter
    .route("/askquestion")
    .get(isAuthenticated, renderAskQuestions)
    .post(isAuthenticated, upload.single("image"), askQuestion);

47. # code updated for better version
48. # Question and answer community build in the place of home.ejs
49. # <% data.forEach((item) => { %>
<h3 class="question-title"><%- item.title %></h3>
<% >})> %>

used 49 method in Home.ejs to show QA from db for client

51. # login and register auth code updated to redirect to good page.

52. # Learned to find user is logged in or logged out?

# token is passed to navbar.ejs from app.js

i did this in app.js
app.use((req, res, next) => {
const token = req.cookies.jwtToken;
res.locals.token = token;
console.log("Token :", token);
next();
});

# To find out log in or out, i did this in navabr

 <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <% if(token) { %>
      <li><a href="/askquestion">Ask Question</a></li>
      <li><a href="/login">Logout</a></li>

      <% } else { %>
      <li><a href="/askquestion">Ask Question</a></li>
      <li><a href="/login">Login</a></li>
      <% } %>
    </ul>

    # to find out logout just delete cookies from application.

52. # updated above code to
    app.use(async (req, res, next) => {
    const token = req.cookies.jwtToken;
    const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET || "superweak-secret"
    );
    if (decoded) {
    res.locals.authenticatedToken = true;
    } else {
    res.locals.authenticatedToken = false;
    }

console.log("Token :", token);
next();
});

and

 <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <% if(authenticatedToken) { %>
      <li><a href="/askquestion">Ask Question</a></li>
      <li><a href="/login">Logout</a></li>

      <% } else { %>
      <li><a href="/askquestion">Ask Question</a></li>
      <li><a href="/login">Login</a></li>
      <% } %>
    </ul>

# if error came or crashed the code then do this trycatch

app.use(async (req, res, next) => {
const token = req.cookies.jwtToken;
try {
const decoded = await promisify(jwt.verify)(
token,
process.env.JWT_SECRET || "superweak-secret"
);
if (decoded) {
res.locals.authenticatedToken = true;
} else {
res.locals.authenticatedToken = false;
}
} catch (err) {
res.locals.authenticatedToken = false;
}

console.log("Token :", token);
next();
});

# yasari decoded garda cookies ma gayer token wrong enter garera chalauna or login garna sakdina

53. # nodemailer installed to make forgot passworrd OTP sender
54. # created pass password for nodemailer from gmail of 2-step verified account

    i.e user: "screwup39@gmail.com",
    pass: "xkxfzqmsrviojsyt",

55. #

# 📧 Complete Authentication & Email System Summary

## 🔐 **Forgot Password Flow Implementation**

### 1. **Page Rendering**

- `renderForgotPasswordPage()` - Serves the password reset request page
- `renderVerifyOtpPage()` - Serves the OTP verification page

### 2. **Password Reset Logic**

- **Email Validation**: Checks if user exists in database using Sequelize
- **OTP Generation**: Creates 4-digit verification code (range: 9999-10998)
- **Email Dispatch**: Sends OTP to user's registered email
- **Data Persistence**: Stores OTP in user record for verification
- **Navigation**: Redirects to OTP verification page after processing

### 3. **Database Operations**

- **Query**: `users.findAll({ where: { email } })` - Finds user by email
- **Update**: `data[0].save()` - Saves generated OTP to user record

## 📨 **Email Service Configuration**

### 4. **Nodemailer Setup**

const transporter = nodemailer.createTransport({
service: "gmail", // Using Gmail SMTP service
auth: {
user: "screwup39@gmail.com", // Sender email
pass: "xkxfzqmsrviojsyt", // App-specific password
},
});

### 5. **Security Practices**

- User existence verification before OTP generation
- Secure email transmission
- Temporary OTP storage for authentication

## 🔄 **Complete System Flow**

1a. User requests password reset → Serve form
2b. Submit email → Validate user → Generate OTP
3c. Send email → Save OTP → Redirect to verification
4d. Nodemailer configures Gmail service → Sends formatted email

56. # OTP expire

    -- updating user model->authcontroller->
    data[0].otp = otp;
    data[0].otpGeneratedTime = Date.now();
    await data[0].save();

    # OTP verify page

    http://localhost:8000/verifyOtp?email=viperh287@gmail.com
    email name give
    const email = req.query.email;
    res.render("./auth/verifyOtp", { email: email });

    # front end to verify otp

      <form action="/verifyOtp/<%- email %>" method="post">

    # Verifing otp adn email

    export const verifyOtp = async (req, res) => {
    const { otp } = req.body;
    const email = req.params.id;
    await users.getAll({
    where: {
    otp: otp,
    email: email,
    },

57. # completed the Reset Password EJS template.
    ✅ **Frontend Pages Created & Implemented**

- **Forgot Password Page** (`./auth/forgotPassword`)
- **OTP Verification Page** (`./auth/verifyOtp`)
- **Reset Password Page** (`./auth/resetPassword`) - **NEWLY ADDED**

### ✅ **Backend Controllers Implemented**

#### **1. Forgot Password Flow**

- **`renderForgotPasswordPage`** - Renders the forgot password form
- **`handleForgotPassword`** - Processes forgot password requests:
  - Validates user email exists in database
  - Generates 4-digit OTP (range: 9999-10998)
  - Sends OTP via email using `sendEmail` service
  - Stores OTP and generation timestamp in user record
  - Redirects to OTP verification page with email parameter

#### **2. OTP Verification System**

- **`renderVerifyOtpPage`** - Renders OTP input form with pre-filled email
- **`verifyOtp`** - Validates OTP:
  - Checks OTP against database records
  - Verifies OTP expiration (2-minute window)
  - Redirects to password reset on success
  - Handles invalid/expired OTP cases

#### **3. Password Reset Functionality**

- **`renderResetPassword`** - Renders password reset form with email & OTP
- **`handleResetPassword`** - Processes password reset:
  - Validates all required fields (email, OTP, passwords)
  - Confirms password matching
  - Verifies OTP validity and expiration
  - Hashes new password using bcrypt
  - Updates user password in database
  - Redirects to login page on success

### ✅ **Frontend Implementation (Reset Password Page)**

- **Clean HTML Structure** with proper form elements
- **Password Input Fields** for new password and confirmation
- **Form Validation** with required attributes and minlength constraints
- **Dynamic URL Parameters** using EJS templating (`<%- email %>`, `<%- otp %>`)
- **Consistent Styling** with CSS classes
- **Navigation Bar** integration using EJS include

### ✅ **Key Features Implemented**

- 🔐 **Secure OTP-based authentication**
- ⏱️ **Time-based OTP expiration** (2 minutes)
- 📧 **Email integration** for OTP delivery
- 🔒 **Password hashing** with bcrypt
- ✅ **Input validation** and error handling
- 🔄 **Proper redirect flows** between pages
- 🎨 **User-friendly forms** with validation

### ✅ **Technical Achievements**

- **Sequelize database operations** (findAll, update, save)
- **Route parameter handling** (query params & URL params)
- **EJS template rendering** with dynamic data
- **Password security** with bcrypt hashing
- **Email service integration**
- **Frontend-Backend integration** with proper form actions

### 🔄 **Complete User Flow Built**

1. **Forgot Password** → User enters email → OTP generated & emailed
2. **Verify OTP** → User enters received OTP → System validates & redirects
3. **Reset Password** → User sets new password → System hashes & updates
4. **Success** → Redirect to login for renewed access

### 📁 **Files Created/Modified Today:**

- `forgotPassword.ejs` (frontend)
- `verifyOtp.ejs` (frontend)
- `resetPassword.ejs` (frontend - **NEW**)
- `authController.js` (backend controllers)
- Route configurations

58. # express-session is a popular npm package that provides simple session middleware for Express.js applications. It allows you to manage user sessions, store user-specific data on the server, and track users across multiple requests using cookies
59. # npm i express-session and npm i connect-flash
    in authController, replaced this code // return res.send("Email already registered."); by this
    if (exists) {
    // return res.send("Email already registered.");
    req.flash("error", "Email already registered.");
    return res.redirect("/register");
    so that i can show my error in same login page without opening new page.Plus, i did this to show above code in client side or front end
    export const renderRegisterPage = (req, res) => {
    const errors = req.flash("error");
    res.render("auth/register", { errors });
    };

and in front end file
<strong style="color: red"><%- errors %></strong>

now do same for other error and sucess message

60. # trycatch learned to prevent whole backend server crash
        ## but using tryCatch in every function is like impossible and messay task.however, we have global errorCatch that may help to catch error and prevent backend crash. created catchError.js for global catch of function.
    # app.js
        app.get("/", catchError(renderHomePage));
        imported from utils of catchError,js
    # this catchError can be used insted of this
         try {
        const data = await questions.findAll({
          include: [
            {
              model: users,
            },
          ],
        });
        // console.log(data);
        const success = req.flash("success");
        res.render("home.ejs", { data, success });
    } catch (err) {
    console.log(err);
    res.send("Something went wrong");
    }
    };
61. # WebSockets

- WebSockets are all about **real-time communication** — zero delay, instant updates.
- Perfect for high-speed apps like **PUBG, Free Fire, stock markets, chats, live dashboards**, etc.
- Unlike normal HTTP, WebSockets work on an **event/subscription model**, which makes them faster and more efficient.
- They’re not a “tool” by themselves — they’re a **protocol**, a rulebook.
- We use packages like **Socket.IO** to implement that protocol in real projects.

62. # npm i socket.io (backend)
    import { Server } from 'socket.io';

const server = app.listen(PORT, () =>
console.log(`Server running at http://localhost:${PORT}`)
);

const io = new Server(server, {
cors: {
origin: "\*",
},
});

io.on("connection", () => {
console.log("Someone connected");
});

# on-== listen, emit = send something
