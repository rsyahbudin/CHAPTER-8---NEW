module.exports = {
    login: (req, res) => res.render("pages/authentication/login"),
    register: (req, res) => res.renderres.render("pages/authentication/register"),
    api: require("./api"),
}