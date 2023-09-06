const express = require("express");
const app = express();
const { Articles } = require("./models");

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSON = require("./swagger.json");

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// Get all articles
app.get("/articles", (req, res) => {
  Articles.findAll().then((articles) => {
    res.status(200).json(articles);
  });
});

// Get articles by Id
app.get("/article/:id", (req, res) => {
  Articles.findOne({
    where: { id: req.params.id },
  }).then((articles) => {
    res.status(200).json(articles);
  });
});

// Post an article
app.post("/articles", (req, res) => {
  Articles.create({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    approved: req.body.approved,
  })
    .then((articles) => {
      res.status(201).json(articles);
    })
    .catch((err) => {
      res.status(422).json("Can't create an article");
    });
});

// Update an article
app.put("/article/:id", (req, res) => {
  Articles.update(
    {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      approved: req.body.approved,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((articles) => {
      res.status(201).json(articles);
    })
    .catch((err) => {
      res.status(422).json("Can't update article");
    });
});

// Delete an article
app.delete("/article/:id", (req, res) => {
  Articles.destroy({
    where: { id: req.params.id },
  }).then((articles) => {
    res.status(200).json({
      message: `Article dengan id ${req.params.id} sudah dihapus`,
    });
  });
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
