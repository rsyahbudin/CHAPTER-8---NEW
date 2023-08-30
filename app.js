const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");

const { PORT = 3000 } = process.env;
const expressLayouts = require("express-ejs-layouts");

app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);
const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

// View Engine
app.use(express.static("public"));
app.set("view engine", "ejs");

// Layout
app.use(expressLayouts);
app.set("layout", "layouts/default");

// Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const setDefault = (req, res, next) => {
  res.locals.contentName = "Default";
  next();
};

app.use(setDefault);

const router = require("./routes");
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
