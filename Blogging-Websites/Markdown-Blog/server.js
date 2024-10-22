const express = require("express");
const mongoose = require("mongoose");
const methodOveride = require("method-override");
const articleRouter = require("./routes/articles");
const Article = require("./models/article");

const app = express();

mongoose.connect("mongodb://localhost/blog", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

app.set("view engine", "ejs");
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

app.use(methodOveride("_method"));

app.use("/articles", articleRouter);

app.get("/", async(req, res) => {
    const articles = await Article.find().sort({
        createdAt: "desc",
    });
    res.render("articles/index", {
        articles: articles,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);